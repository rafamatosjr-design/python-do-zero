const { chromium } = require('playwright');

const BASE = process.env.APP_URL || 'http://127.0.0.1:4173';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function openApp(page) {
  console.log('PASSO: abrir início');
  await page.goto(`${BASE}/#/inicio`, { waitUntil: 'networkidle' });
  await page.waitForSelector('h1');
}

async function go(page, hash, expectedTitle) {
  console.log(`PASSO: navegar para ${hash}`);
  await page.evaluate(nextHash => { window.location.hash = nextHash; }, hash);
  await page.waitForFunction(title => document.querySelector('h1')?.textContent?.includes(title), expectedTitle, { timeout: 8000 });
  console.log(`OK: ${hash}`);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];

  page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });

  try {
    await openApp(page);
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForSelector('h1');

    assert(await page.locator('h1').innerText() === 'Continue de onde parou', 'Tela inicial não carregou corretamente.');
    assert(await page.locator('#sidebar-progress-label').innerText() === '0 de 120 aulas', 'Progresso inicial incorreto.');

    await go(page, '#/curso', 'Trilha completa');
    assert(await page.locator('.module-card').count() === 12, 'A página Curso deve exibir 12 módulos.');

    await go(page, '#/modulo/1', 'Fundamentos de Programação e Python');
    assert(await page.locator('.lesson-row').count() === 20, 'O Módulo 1 deve exibir 20 aulas.');

    await go(page, '#/aula/1', 'O que é programação?');
    assert(await page.locator('#complete-lesson').count() === 1, 'Controles da Aula 1 não foram carregados.');

    console.log('PASSO: revelar dica');
    const hint = page.locator('.reveal').first();
    await hint.click();
    assert(await page.locator('#hint1-1').evaluate(el => el.classList.contains('show')), 'A primeira dica não foi revelada.');
    assert(await hint.getAttribute('aria-expanded') === 'true', 'aria-expanded da dica não foi atualizado.');

    console.log('PASSO: concluir aula');
    await page.locator('#complete-lesson').click();
    await page.waitForFunction(() => document.querySelector('#sidebar-progress-label')?.textContent === '1 de 120 aulas', null, { timeout: 8000 });
    assert((await page.locator('#complete-lesson').innerText()).includes('Aula concluída'), 'Conclusão da aula não persistiu na interface.');

    console.log('PASSO: concluir tarefa');
    await page.locator('.task-toggle').click();
    await page.waitForFunction(() => document.querySelector('.task-toggle')?.textContent.includes('Tarefa concluída'), null, { timeout: 8000 });
    assert((await page.locator('.task-toggle').innerText()).includes('Tarefa concluída'), 'Estado da tarefa não atualizou na aula.');

    await go(page, '#/tarefas', 'Pratique o que estudou');
    assert(await page.locator('[data-task="1"]').isChecked(), 'Tarefa concluída não persistiu na página Tarefas.');

    await go(page, '#/progresso', 'Acompanhe sua evolução');
    assert(await page.locator('text=1/120 aulas').count() > 0, 'Página Progresso não refletiu a aula concluída.');
    assert(await page.locator('text=Progresso por módulo').count() === 1, 'Progresso por módulo não está visível.');

    await go(page, '#/obsidian', 'Seu segundo cérebro');
    await page.locator('#vault-name').fill('Meu Vault');
    await page.locator('#save-vault').click();
    assert(await page.evaluate(() => localStorage.getItem('pdz.obsidianVault')) === 'Meu Vault', 'Nome do Vault não foi salvo localmente.');
    assert((await page.locator('#obsidian-preview').innerText()).includes('# Aula 02'), 'Prévia do Obsidian não acompanha a aula atual/recomendada.');

    console.log('PASSO: viewport móvel');
    await page.setViewportSize({ width: 390, height: 844 });
    await go(page, '#/inicio', 'Continue de onde parou');
    assert(await page.locator('.sidebar').isVisible(), 'Navegação principal não está disponível em viewport móvel.');
    assert((await page.locator('body').evaluate(el => el.scrollWidth)) <= 390, 'Há rolagem horizontal inesperada no viewport móvel.');

    if (errors.length) throw new Error(`Erros do navegador:\n${errors.join('\n')}`);
    console.log('✅ Smoke test de navegador concluído com sucesso.');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(`❌ ${error.message}`);
  process.exit(1);
});
