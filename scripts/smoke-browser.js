const { chromium } = require('playwright');

const BASE = process.env.APP_URL || 'http://127.0.0.1:4173';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function go(page, hash, readySelector) {
  await page.goto(`${BASE}/${hash}`, { waitUntil: 'networkidle' });
  if (readySelector) await page.waitForSelector(readySelector, { state: 'visible' });
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
    await go(page, '#/inicio', 'h1');
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForSelector('h1');

    assert(await page.locator('h1').innerText() === 'Continue de onde parou', 'Tela inicial não carregou corretamente.');
    assert(await page.locator('#sidebar-progress-label').innerText() === '0 de 120 aulas', 'Progresso inicial incorreto.');

    await go(page, '#/curso', '.module-card');
    await page.waitForFunction(() => document.querySelectorAll('.module-card').length === 12);
    assert(await page.locator('.module-card').count() === 12, 'A página Curso deve exibir 12 módulos.');

    await go(page, '#/modulo/1', '.lesson-row');
    await page.waitForFunction(() => document.querySelectorAll('.lesson-row').length === 20);
    assert(await page.locator('.lesson-row').count() === 20, 'O Módulo 1 deve exibir 20 aulas.');

    await go(page, '#/aula/1', '#complete-lesson');
    assert((await page.locator('h1').innerText()).includes('O que é programação?'), 'A Aula 1 não abriu corretamente.');

    const hint = page.locator('.reveal').first();
    await hint.click();
    assert(await page.locator('#hint1-1').evaluate(el => el.classList.contains('show')), 'A primeira dica não foi revelada.');
    assert(await hint.getAttribute('aria-expanded') === 'true', 'aria-expanded da dica não foi atualizado.');

    await page.locator('#complete-lesson').click();
    await page.waitForFunction(() => document.querySelector('#sidebar-progress-label')?.textContent === '1 de 120 aulas');
    assert((await page.locator('#complete-lesson').innerText()).includes('Aula concluída'), 'Conclusão da aula não persistiu na interface.');
    assert(await page.locator('#sidebar-progress-label').innerText() === '1 de 120 aulas', 'Progresso lateral não atualizou após concluir a aula.');

    await page.locator('.task-toggle').click();
    await page.waitForFunction(() => document.querySelector('.task-toggle')?.textContent.includes('Tarefa concluída'));
    assert((await page.locator('.task-toggle').innerText()).includes('Tarefa concluída'), 'Estado da tarefa não atualizou na aula.');

    await go(page, '#/tarefas', '[data-task="1"]');
    assert(await page.locator('[data-task="1"]').isChecked(), 'Tarefa concluída não persistiu na página Tarefas.');

    await go(page, '#/progresso', 'h1');
    assert(await page.locator('text=1/120 aulas').count() > 0, 'Página Progresso não refletiu a aula concluída.');
    assert(await page.locator('text=Progresso por módulo').count() === 1, 'Progresso por módulo não está visível.');

    await go(page, '#/obsidian', '#vault-name');
    await page.locator('#vault-name').fill('Meu Vault');
    await page.locator('#save-vault').click();
    assert(await page.evaluate(() => localStorage.getItem('pdz.obsidianVault')) === 'Meu Vault', 'Nome do Vault não foi salvo localmente.');
    assert((await page.locator('#obsidian-preview').innerText()).includes('# Aula 02'), 'Prévia do Obsidian não acompanha a aula atual/recomendada.');

    await page.setViewportSize({ width: 390, height: 844 });
    await go(page, '#/inicio', '.sidebar');
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
