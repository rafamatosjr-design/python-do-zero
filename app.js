(() => {
  'use strict';

  const DATA = window.PDZ_DATA;
  const STORAGE = {
    completed: 'pdz.completed',
    tasks: 'pdz.tasks',
    lastLesson: 'pdz.lastLesson',
    vault: 'pdz.obsidianVault'
  };

  const navItems = [
    ['inicio', '⌂', 'Início'],
    ['curso', '▤', 'Curso'],
    ['tarefas', '✓', 'Tarefas'],
    ['videos', '▶', 'Vídeos'],
    ['obsidian', '◇', 'Obsidian'],
    ['progresso', '◔', 'Progresso']
  ];

  const $ = (selector) => document.querySelector(selector);
  const app = $('#app');
  const toast = $('#toast');

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  }

  function completedSet() { return new Set(readJSON(STORAGE.completed, [])); }
  function saveCompleted(set) { localStorage.setItem(STORAGE.completed, JSON.stringify([...set])); }
  function taskState() { return readJSON(STORAGE.tasks, {}); }
  function saveTaskState(value) { localStorage.setItem(STORAGE.tasks, JSON.stringify(value)); }
  function getVault() { return localStorage.getItem(STORAGE.vault) || ''; }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function progressPercent() {
    return Math.round((completedSet().size / 120) * 1000) / 10;
  }

  function updateGlobalProgress() {
    const count = completedSet().size;
    $('#sidebar-progress-label').textContent = `${count} de 120 aulas`;
    $('#sidebar-progress-bar').style.width = `${progressPercent()}%`;
  }

  function currentLesson() {
    const done = completedSet();
    return DATA.lessons.find(l => !done.has(l.id)) || DATA.lessons[DATA.lessons.length - 1];
  }

  function routeInfo() {
    const raw = location.hash.replace(/^#\/?/, '') || 'inicio';
    const parts = raw.split('/');
    return { page: parts[0], id: Number(parts[1]) || null };
  }

  function setNavActive(page) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });
  }

  function renderNav() {
    $('#main-nav').innerHTML = navItems.map(([page, icon, label]) =>
      `<a class="nav-link" data-page="${page}" href="#/${page}"><span aria-hidden="true">${icon}</span><span>${label}</span></a>`
    ).join('');
  }

  function pageHeader(eyebrow, title, subtitle = '') {
    return `<header class="page-header"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${subtitle ? `<p class="muted">${subtitle}</p>` : ''}</div></header>`;
  }

  function renderHome() {
    const current = currentLesson();
    const done = completedSet().size;
    const tasks = taskState();
    const pending = DATA.lessons.filter(l => !tasks[l.id]).length;
    app.innerHTML = `<div class="page">
      ${pageHeader('Python do Zero', 'Continue de onde parou', '120 aulas · 12 módulos · evolução progressiva do absoluto zero ao Full Stack.')}
      <section class="card" aria-labelledby="continue-title">
        <span class="badge current">Próxima recomendada</span>
        <h2 id="continue-title">Aula ${current.id} — ${current.title}</h2>
        <p class="muted">Módulo ${current.module} · ${current.time}</p>
        <div class="actions"><a class="btn primary" href="#/aula/${current.id}">Continuar estudando</a><a class="btn ghost" href="#/curso">Ver curso</a></div>
      </section>
      <div class="grid three" style="margin-top:18px">
        <section class="card"><div class="eyebrow">Progresso</div><div class="stat">${progressPercent()}%</div><p class="muted">${done} de 120 aulas concluídas</p></section>
        <section class="card"><div class="eyebrow">Tarefas</div><div class="stat">${pending}</div><p class="muted">tarefas pendentes nas aulas disponíveis</p></section>
        <section class="card"><div class="eyebrow">Segundo cérebro</div><div class="stat">Obsidian</div><p class="muted">Envie seus resumos para Markdown no seu Vault.</p></section>
      </div>
      <section style="margin-top:28px"><div class="page-header"><div><div class="eyebrow">Trilha</div><h2>Seus módulos</h2></div></div>
        <div class="grid three">${DATA.modules.slice(0, 3).map(moduleCard).join('')}</div>
      </section>
    </div>`;
  }

  function moduleCard(m) {
    const enabled = m.id === 1;
    return `<article class="card module-card">
      <div><span class="badge">Módulo ${m.id}</span><h3>${m.title}</h3><p class="muted">${m.description}</p></div>
      <div class="module-meta"><span>Aulas ${m.lessons}</span>${enabled ? '<span>Em desenvolvimento</span>' : '<span>Planejado</span>'}</div>
      <div class="actions">${enabled ? '<a class="btn secondary" href="#/modulo/1">Abrir módulo</a>' : '<button class="btn ghost" disabled>Em breve</button>'}</div>
    </article>`;
  }

  function renderCourse() {
    app.innerHTML = `<div class="page">${pageHeader('Curso', 'Trilha completa', 'A ordem segue o currículo oficial do projeto. As próximas aulas serão implementadas sem antecipar conteúdos.')}
      <div class="grid three">${DATA.modules.map(moduleCard).join('')}</div>
    </div>`;
  }

  function renderModule(id) {
    if (id !== 1) { renderCourse(); return; }
    const done = completedSet();
    app.innerHTML = `<div class="page">${pageHeader('Módulo 1', 'Fundamentos de Programação e Python', 'Aulas 1–20 · Semanas 1–4 · nível iniciante absoluto')}
      <section class="card soft"><p><strong>Objetivo:</strong> construir a base para compreender programação, algoritmos e os primeiros programas em Python.</p><p class="muted">Nesta versão estão implementadas as Aulas 1–5. O restante será acrescentado seguindo o documento oficial do módulo.</p></section>
      <section style="margin-top:20px"><h2>Aulas disponíveis</h2><div class="lesson-list">
        ${DATA.lessons.map(l => `<a class="lesson-row" href="#/aula/${l.id}"><span class="lesson-number">${l.id}</span><span class="grow"><strong>${l.title}</strong><span class="lesson-meta"><span>${l.time}</span></span></span>${done.has(l.id) ? '<span class="badge done">Concluída</span>' : '<span class="badge">Estudar</span>'}</a>`).join('')}
      </div></section>
    </div>`;
  }

  function section(title, content, extraClass = '') {
    return `<section class="section-card ${extraClass}"><h2>${title}</h2>${content}</section>`;
  }

  function list(items) { return `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`; }
  function text(content) { return `<p>${content}</p>`; }
  function code(content) { return `<pre class="code"><code>${escapeHtml(content)}</code></pre>`; }
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }

  function renderLesson(id) {
    const lesson = DATA.lessons.find(l => l.id === id);
    if (!lesson) { renderModule(1); return; }
    localStorage.setItem(STORAGE.lastLesson, String(id));
    const done = completedSet().has(id);
    const prev = DATA.lessons.find(l => l.id === id - 1);
    const next = DATA.lessons.find(l => l.id === id + 1);
    app.innerHTML = `<div class="page">
      ${pageHeader(`Aula ${lesson.id}/120 · Módulo ${lesson.module}`, lesson.title, lesson.time)}
      <div class="lesson-layout">
        <article class="lesson-body">
          ${section('O que você vai aprender', list(lesson.learn))}
          ${section('Por que isso é importante', text(lesson.importance))}
          ${section('Antes de começar', text(lesson.before))}
          ${section('Explicação', text(lesson.explanation))}
          ${section('Exemplo cotidiano', text(lesson.everyday))}
          ${section('Exemplo em programação', text(lesson.programming))}
          ${section('Código / pseudocódigo', code(lesson.code))}
          ${section('Explicação linha por linha', text(lesson.lineByLine))}
          ${section('Prática guiada', text(lesson.guided))}
          ${section('Agora é sua vez · Exercício', text(lesson.exercise) + answerButtons(lesson))}
          ${section('Desafio', text(lesson.challenge))}
          ${section('Encontre o erro', `<div class="callout error-callout"><strong>EXEMPLO PARA ANALISAR</strong>${text(lesson.findError)}</div>`)}
          ${section('Erros comuns', text(lesson.common))}
          ${section('Resumo', text(lesson.summary))}
          ${section('Checklist', checklistFor(lesson))}
          ${section('Tarefa', text(lesson.task) + `<button class="btn secondary task-toggle" data-task-id="${lesson.id}">Marcar tarefa como feita</button>`)}
          ${section('Vídeo complementar', lesson.video ? `<a class="btn secondary" href="${lesson.video}" target="_blank" rel="noopener noreferrer">Abrir vídeo validado</a>` : '<p>Não há vídeo complementar selecionado para esta aula.</p>')}
          ${section('Referências', '<p>Conteúdo baseado na documentação oficial do repositório Python do Zero.</p>')}
          <nav class="footer-nav" aria-label="Navegação entre aulas">
            ${prev ? `<a class="btn ghost" href="#/aula/${prev.id}">← Aula ${prev.id}</a>` : '<span></span>'}
            ${next ? `<a class="btn primary" href="#/aula/${next.id}">Aula ${next.id} →</a>` : '<a class="btn primary" href="#/modulo/1">Voltar ao módulo</a>'}
          </nav>
        </article>
        <aside class="lesson-aside">
          <section class="card"><div class="eyebrow">Progresso</div><p><strong>${completedSet().size}/120 aulas</strong></p><div class="progress-track" style="background:#dbe4ed"><div class="progress-bar" style="width:${progressPercent()}%"></div></div></section>
          <button id="complete-lesson" class="btn ${done ? 'secondary' : 'success'}">${done ? '✓ Aula concluída · desfazer' : 'Marcar aula como concluída'}</button>
          <button id="lesson-obsidian" class="btn ghost">◇ Enviar resumo ao Obsidian</button>
          <a class="btn ghost" href="#/modulo/1">Ver Módulo 1</a>
        </aside>
      </div>
    </div>`;
    bindLessonActions(lesson);
  }

  function answerButtons(l) {
    return `<div style="margin-top:14px"><button class="details-btn reveal" data-target="hint1-${l.id}">Ver uma dica</button><div id="hint1-${l.id}" class="hidden-answer">${l.hint1}</div></div>
      <div style="margin-top:8px"><button class="details-btn reveal" data-target="hint2-${l.id}">Ver segunda dica</button><div id="hint2-${l.id}" class="hidden-answer">${l.hint2}</div></div>
      <div style="margin-top:8px"><button class="details-btn reveal" data-target="solution-${l.id}">Ver solução comentada</button><div id="solution-${l.id}" class="hidden-answer">${code(l.solution)}<p>Compare com sua tentativa e identifique o raciocínio usado em cada etapa.</p></div></div>`;
  }

  function checklistFor(l) {
    return `<ul><li>Consigo explicar a ideia principal da aula.</li><li>Consigo reconhecer os conceitos estudados.</li><li>Fiz a prática sem apenas copiar.</li><li>Tentei o exercício antes de abrir a solução.</li></ul>`;
  }

  function bindLessonActions(lesson) {
    document.querySelectorAll('.reveal').forEach(btn => btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      target.classList.toggle('show');
      btn.setAttribute('aria-expanded', target.classList.contains('show'));
    }));
    $('#complete-lesson').addEventListener('click', () => {
      const done = completedSet();
      done.has(lesson.id) ? done.delete(lesson.id) : done.add(lesson.id);
      saveCompleted(done);
      updateGlobalProgress();
      renderLesson(lesson.id);
      showToast(done.has(lesson.id) ? 'Aula concluída.' : 'Conclusão desfeita.');
    });
    $('.task-toggle').addEventListener('click', () => toggleTask(lesson.id, true));
    $('#lesson-obsidian').addEventListener('click', () => openObsidian(lesson));
  }

  function toggleTask(id, rerenderLesson = false) {
    const tasks = taskState();
    tasks[id] = !tasks[id];
    saveTaskState(tasks);
    showToast(tasks[id] ? 'Tarefa concluída.' : 'Tarefa marcada como pendente.');
    if (rerenderLesson) renderLesson(id); else renderTasks();
  }

  function renderTasks() {
    const tasks = taskState();
    app.innerHTML = `<div class="page">${pageHeader('Tarefas', 'Pratique o que estudou', 'As tarefas das aulas disponíveis ficam salvas neste navegador.')}
      <div class="grid">${DATA.lessons.map(l => `<article class="card task-item ${tasks[l.id] ? 'done' : ''}"><input type="checkbox" aria-label="Concluir tarefa da Aula ${l.id}" data-task="${l.id}" ${tasks[l.id] ? 'checked' : ''}><div><div class="eyebrow">Aula ${l.id}</div><h3 class="task-title">${l.task}</h3><a href="#/aula/${l.id}">Abrir aula</a></div></article>`).join('')}</div>
    </div>`;
    document.querySelectorAll('[data-task]').forEach(el => el.addEventListener('change', () => toggleTask(Number(el.dataset.task))));
  }

  function renderVideos() {
    const videos = DATA.lessons.filter(l => l.video);
    app.innerHTML = `<div class="page">${pageHeader('Vídeos', 'Complementos selecionados', 'Vídeos são apoio. O conteúdo principal continua dentro de cada aula.')}
      ${videos.length ? `<div class="grid two">${videos.map(l => `<article class="card"><span class="badge">Aula ${l.id}</span><h3>${l.title}</h3><p class="muted">Vídeo validado na documentação oficial.</p><a class="btn primary" href="${l.video}" target="_blank" rel="noopener noreferrer">Assistir no YouTube</a></article>`).join('')}</div>` : '<div class="empty">Nenhum vídeo validado disponível ainda.</div>'}
    </div>`;
  }

  function noteMarkdown(lesson) {
    return `---\ncurso: Python do Zero\nmodulo: ${lesson.module}\naula: ${lesson.id}\nstatus: estudando\ntags:\n  - python-do-zero\n  - programacao\n---\n\n# Aula ${String(lesson.id).padStart(2, '0')} — ${lesson.title}\n\n## O que aprendi\n${lesson.learn.map(i => `- ${i}`).join('\n')}\n\n## Resumo da aula\n${lesson.summary}\n\n## Meu resumo\n\n\n## Conceitos para conectar\n- [[Programação]]\n- [[Python]]\n\n## Código que pratiquei\n\n\`\`\`text\n${lesson.code}\n\`\`\`\n\n## Dúvidas\n\n\n## Exercícios que errei\n\n\n## Revisar depois\n- [ ] Rever esta aula\n`;
  }

  function openObsidian(lesson) {
    const vault = getVault().trim();
    const name = `Python do Zero/Módulo 01/Aula ${String(lesson.id).padStart(2, '0')} - ${lesson.title}`;
    const params = new URLSearchParams();
    if (vault) params.set('vault', vault);
    params.set('name', name);
    params.set('content', noteMarkdown(lesson));
    window.location.href = `obsidian://new?${params.toString()}`;
  }

  async function copyMarkdown(lesson) {
    try { await navigator.clipboard.writeText(noteMarkdown(lesson)); showToast('Markdown copiado.'); }
    catch { showToast('Não foi possível copiar automaticamente.'); }
  }

  function renderObsidian() {
    const lesson = currentLesson();
    app.innerHTML = `<div class="page">${pageHeader('Obsidian', 'Seu segundo cérebro', 'As notas do curso podem virar arquivos Markdown no seu Vault. Nenhuma senha ou token é necessário.')}
      <div class="grid two">
        <section class="card"><h2>Configuração</h2><p class="muted">Informe apenas o nome exato do seu Vault. Ele fica salvo localmente neste navegador.</p><div class="form-group"><label for="vault-name">Nome do Vault</label><input id="vault-name" type="text" value="${escapeHtml(getVault())}" placeholder="Ex.: Segundo Cérebro"></div><button id="save-vault" class="btn primary">Salvar nome do Vault</button><p class="muted">Se deixar vazio, o Obsidian perguntará/abrirá no contexto padrão do aplicativo.</p></section>
        <section class="card"><h2>Enviar uma aula</h2><div class="form-group"><label for="lesson-note">Aula</label><select id="lesson-note" style="width:100%;padding:11px;border:1px solid #b8c5d2;border-radius:10px">${DATA.lessons.map(l => `<option value="${l.id}" ${l.id === lesson.id ? 'selected' : ''}>Aula ${l.id} — ${l.title}</option>`).join('')}</select></div><div class="actions"><button id="open-obsidian" class="btn primary">Abrir/criar no Obsidian</button><button id="copy-md" class="btn secondary">Copiar Markdown</button></div><p class="muted">O botão usa o protocolo local <code>obsidian://</code>. Se o Obsidian não estiver instalado, use “Copiar Markdown”.</p></section>
      </div>
      <section class="card" style="margin-top:18px"><h2>Prévia da nota</h2><pre id="obsidian-preview" class="obsidian-preview"></pre></section>
    </div>`;
    const select = $('#lesson-note');
    const preview = $('#obsidian-preview');
    const selected = () => DATA.lessons.find(l => l.id === Number(select.value));
    const refresh = () => preview.textContent = noteMarkdown(selected());
    refresh();
    select.addEventListener('change', refresh);
    $('#save-vault').addEventListener('click', () => { localStorage.setItem(STORAGE.vault, $('#vault-name').value.trim()); showToast('Nome do Vault salvo.'); });
    $('#open-obsidian').addEventListener('click', () => openObsidian(selected()));
    $('#copy-md').addEventListener('click', () => copyMarkdown(selected()));
  }

  function renderProgress() {
    const done = completedSet();
    const tasks = taskState();
    const doneTasks = DATA.lessons.filter(l => tasks[l.id]).length;
    app.innerHTML = `<div class="page">${pageHeader('Progresso', 'Acompanhe sua evolução', 'O progresso aumenta somente quando você marca explicitamente uma aula como concluída.')}
      <div class="grid three"><section class="card"><div class="eyebrow">Curso</div><div class="stat">${progressPercent()}%</div><p class="muted">${done.size}/120 aulas</p></section><section class="card"><div class="eyebrow">Módulo 1 disponível</div><div class="stat">${DATA.lessons.filter(l => done.has(l.id)).length}/5</div><p class="muted">aulas implementadas concluídas</p></section><section class="card"><div class="eyebrow">Tarefas</div><div class="stat">${doneTasks}/5</div><p class="muted">tarefas concluídas</p></section></div>
      <section class="card" style="margin-top:18px"><h2>Progresso geral</h2><div class="progress-track" style="background:#dbe4ed;height:14px"><div class="progress-bar" style="width:${progressPercent()}%"></div></div><p class="muted">Fórmula: aulas concluídas ÷ 120 × 100.</p></section>
      <section style="margin-top:24px"><h2>Aulas disponíveis</h2><div class="lesson-list">${DATA.lessons.map(l => `<a class="lesson-row" href="#/aula/${l.id}"><span class="lesson-number">${l.id}</span><span class="grow"><strong>${l.title}</strong></span>${done.has(l.id) ? '<span class="badge done">Concluída</span>' : '<span class="badge">Pendente</span>'}</a>`).join('')}</div></section>
    </div>`;
  }

  function render() {
    const route = routeInfo();
    setNavActive(route.page === 'aula' || route.page === 'modulo' ? 'curso' : route.page);
    updateGlobalProgress();
    if (route.page === 'inicio') renderHome();
    else if (route.page === 'curso') renderCourse();
    else if (route.page === 'modulo') renderModule(route.id);
    else if (route.page === 'aula') renderLesson(route.id);
    else if (route.page === 'tarefas') renderTasks();
    else if (route.page === 'videos') renderVideos();
    else if (route.page === 'obsidian') renderObsidian();
    else if (route.page === 'progresso') renderProgress();
    else { location.hash = '#/inicio'; return; }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  renderNav();
  window.addEventListener('hashchange', render);
  render();
})();
