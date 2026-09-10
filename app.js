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
    ['inicio','⌂','Início'],
    ['curso','▤','Curso'],
    ['tarefas','✓','Tarefas'],
    ['videos','▶','Vídeos'],
    ['obsidian','◇','Obsidian'],
    ['progresso','◔','Progresso']
  ];
  const $ = selector => document.querySelector(selector);
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
  function progressPercent() { return Math.round((completedSet().size / 120) * 1000) / 10; }
  function updateGlobalProgress() {
    const n = completedSet().size;
    $('#sidebar-progress-label').textContent = `${n} de 120 aulas`;
    $('#sidebar-progress-bar').style.width = `${progressPercent()}%`;
  }
  function firstIncompleteLesson() {
    const done = completedSet();
    return DATA.lessons.find(lesson => !done.has(lesson.id)) || DATA.lessons[DATA.lessons.length - 1];
  }
  function currentLesson() {
    const done = completedSet();
    const lastId = Number(localStorage.getItem(STORAGE.lastLesson));
    const last = DATA.lessons.find(lesson => lesson.id === lastId);
    if (last && !done.has(last.id)) return last;
    return firstIncompleteLesson();
  }
  function routeInfo() {
    const parts = (location.hash.replace(/^#\/?/, '') || 'inicio').split('/');
    return { page: parts[0], id: Number(parts[1]) || null };
  }
  function setNavActive(page) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === page));
  }
  function renderNav() {
    $('#main-nav').innerHTML = navItems.map(([page, icon, label]) =>
      `<a class="nav-link" data-page="${page}" href="#/${page}"><span aria-hidden="true">${icon}</span><span>${label}</span></a>`
    ).join('');
  }
  function pageHeader(eyebrow, title, subtitle = '') {
    return `<header class="page-header"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${subtitle ? `<p class="muted">${subtitle}</p>` : ''}</div></header>`;
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  }
  function section(title, content, cls = '') { return `<section class="section-card ${cls}"><h2>${title}</h2>${content}</section>`; }
  function list(items) { return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`; }
  function text(content) { return `<p>${content}</p>`; }
  function code(content) { return `<pre class="code"><code>${escapeHtml(content)}</code></pre>`; }

  function moduleTotal(module) {
    const parts = String(module.lessons).split('–').map(Number);
    return parts.length === 2 && parts.every(Number.isFinite) ? parts[1] - parts[0] + 1 : 0;
  }
  function moduleCard(module) {
    const count = DATA.lessons.filter(lesson => lesson.module === module.id).length;
    const enabled = count > 0;
    const status = !enabled ? 'Planejado' : count >= moduleTotal(module) ? 'Módulo disponível' : `${count} aulas disponíveis`;
    return `<article class="card module-card"><div><span class="badge">Módulo ${module.id}</span><h3>${module.title}</h3><p class="muted">${module.description}</p></div><div class="module-meta"><span>Aulas ${module.lessons}</span><span>${status}</span></div><div class="actions">${enabled ? `<a class="btn secondary" href="#/modulo/${module.id}">Abrir módulo</a>` : '<button class="btn ghost" disabled>Em breve</button>'}</div></article>`;
  }

  function renderHome() {
    const current = currentLesson();
    const done = completedSet().size;
    const tasks = taskState();
    const pending = DATA.lessons.filter(lesson => !tasks[lesson.id]).length;
    app.innerHTML = `<div class="page">
      ${pageHeader('Python do Zero','Continue de onde parou','120 aulas · 12 módulos · evolução progressiva do absoluto zero ao Full Stack.')}
      <section class="card"><span class="badge current">Continuar estudos</span><h2>Aula ${current.id} — ${current.title}</h2><p class="muted">Módulo ${current.module} · ${current.time}</p><div class="actions"><a class="btn primary" href="#/aula/${current.id}">Continuar estudando</a><a class="btn ghost" href="#/curso">Ver curso</a></div></section>
      <div class="grid three" style="margin-top:18px">
        <section class="card"><div class="eyebrow">Progresso</div><div class="stat">${progressPercent()}%</div><p class="muted">${done} de 120 aulas concluídas</p></section>
        <section class="card"><div class="eyebrow">Tarefas</div><div class="stat">${pending}</div><p class="muted">tarefas pendentes</p></section>
        <section class="card"><div class="eyebrow">Segundo cérebro</div><div class="stat">Obsidian</div><p class="muted">Envie seus resumos para Markdown no seu Vault.</p></section>
      </div>
      <section style="margin-top:28px"><h2>Seus módulos</h2><div class="grid three">${DATA.modules.slice(0,3).map(moduleCard).join('')}</div></section>
    </div>`;
  }

  function renderCourse() {
    app.innerHTML = `<div class="page">${pageHeader('Curso','Trilha completa','A ordem segue o currículo oficial.')}<div class="grid three">${DATA.modules.map(moduleCard).join('')}</div></div>`;
  }

  function renderModule(id) {
    const module = DATA.modules.find(item => item.id === id);
    const lessons = DATA.lessons.filter(lesson => lesson.module === id);
    const done = completedSet();
    if (!module || !lessons.length) { renderCourse(); return; }
    const subtitles = {
      1:'Aulas 1–20 · Semanas 1–4 · nível iniciante absoluto',
      2:'Aulas 21–35 · Semanas 5–7 · iniciante em progressão para intermediário'
    };
    const objectives = {
      1:'construir a base para compreender programação, algoritmos e os primeiros programas em Python.',
      2:'organizar programas maiores, salvar dados, lidar com erros, compreender POO e iniciar ferramentas profissionais de desenvolvimento.'
    };
    const first = lessons[0].id;
    const last = lessons[lessons.length - 1].id;
    app.innerHTML = `<div class="page">${pageHeader(`Módulo ${id}`,module.title,subtitles[id] || `Aulas ${module.lessons}`)}<section class="card soft"><p><strong>Objetivo:</strong> ${objectives[id] || module.description}</p><p class="muted">Aulas ${first}–${last} disponíveis.</p></section><section style="margin-top:20px"><h2>Aulas</h2><div class="lesson-list">${lessons.map(lesson => `<a class="lesson-row" href="#/aula/${lesson.id}"><span class="lesson-number">${lesson.id}</span><span class="grow"><strong>${lesson.title}</strong><span class="lesson-meta"><span>${lesson.time}</span></span></span>${done.has(lesson.id) ? '<span class="badge done">Concluída</span>' : '<span class="badge">Estudar</span>'}</a>`).join('')}</div></section></div>`;
  }

  function answerButtons(lesson) {
    return `<div style="margin-top:14px"><button class="details-btn reveal" data-target="hint1-${lesson.id}" aria-expanded="false">Ver uma dica</button><div id="hint1-${lesson.id}" class="hidden-answer">${lesson.hint1}</div></div><div style="margin-top:8px"><button class="details-btn reveal" data-target="hint2-${lesson.id}" aria-expanded="false">Ver segunda dica</button><div id="hint2-${lesson.id}" class="hidden-answer">${lesson.hint2}</div></div><div style="margin-top:8px"><button class="details-btn reveal" data-target="solution-${lesson.id}" aria-expanded="false">Ver solução comentada</button><div id="solution-${lesson.id}" class="hidden-answer">${code(lesson.solution)}<p>Compare com sua tentativa e identifique o raciocínio usado em cada etapa.</p></div></div>`;
  }
  function checklistFor() {
    return '<ul><li>Consigo explicar a ideia principal da aula.</li><li>Consigo reconhecer os conceitos estudados.</li><li>Fiz a prática sem apenas copiar.</li><li>Tentei o exercício antes de abrir a solução.</li></ul>';
  }

  function renderLesson(id) {
    const lesson = DATA.lessons.find(item => item.id === id);
    if (!lesson) { renderCourse(); return; }
    localStorage.setItem(STORAGE.lastLesson, String(id));
    const done = completedSet().has(id);
    const tasks = taskState();
    const taskDone = Boolean(tasks[id]);
    const prev = DATA.lessons.find(item => item.id === id - 1);
    const next = DATA.lessons.find(item => item.id === id + 1);

    app.innerHTML = `<div class="page">${pageHeader(`Aula ${lesson.id}/120 · Módulo ${lesson.module}`,lesson.title,lesson.time)}<div class="lesson-layout"><article class="lesson-body">
      ${section('O que você vai aprender',list(lesson.learn))}
      ${section('Por que isso é importante',text(lesson.importance))}
      ${section('Antes de começar',text(lesson.before))}
      ${section('Explicação',text(lesson.explanation))}
      ${section('Exemplo cotidiano',text(lesson.everyday))}
      ${section('Exemplo em programação',text(lesson.programming))}
      ${section('Código / pseudocódigo',code(lesson.code))}
      ${section('Explicação linha por linha',text(lesson.lineByLine))}
      ${section('Prática guiada',text(lesson.guided))}
      ${section('Agora é sua vez · Exercício',text(lesson.exercise)+answerButtons(lesson))}
      ${section('Desafio',text(lesson.challenge))}
      ${section('Encontre o erro',`<div class="callout error-callout"><strong>EXEMPLO PARA ANALISAR</strong>${text(lesson.findError)}</div>`)}
      ${section('Erros comuns',text(lesson.common))}
      ${section('Resumo',text(lesson.summary))}
      ${section('Checklist',checklistFor())}
      ${section('Tarefa',text(lesson.task)+`<button class="btn ${taskDone ? 'success' : 'secondary'} task-toggle">${taskDone ? '✓ Tarefa concluída · desfazer' : 'Marcar tarefa como feita'}</button>`)}
      ${section('Vídeo complementar',lesson.video ? `<a class="btn secondary" href="${lesson.video}" target="_blank" rel="noopener noreferrer">Abrir vídeo validado</a>` : '<p>Não há vídeo complementar selecionado para esta aula.</p>')}
      ${section('Referências','<p>Conteúdo baseado na documentação oficial do repositório Python do Zero.</p>')}
      <nav class="footer-nav" aria-label="Navegação entre aulas">${prev ? `<a class="btn ghost" href="#/aula/${prev.id}">← Aula ${prev.id}</a>` : '<span></span>'}${next ? `<a class="btn primary" href="#/aula/${next.id}">Aula ${next.id} →</a>` : `<a class="btn primary" href="#/modulo/${lesson.module}">Voltar ao módulo</a>`}</nav>
    </article><aside class="lesson-aside"><section class="card"><div class="eyebrow">Progresso</div><p><strong>${completedSet().size}/120 aulas</strong></p><div class="progress-track" style="background:#dbe4ed"><div class="progress-bar" style="width:${progressPercent()}%"></div></div></section><button id="complete-lesson" class="btn ${done ? 'secondary' : 'success'}">${done ? '✓ Aula concluída · desfazer' : 'Marcar aula como concluída'}</button><button id="lesson-obsidian" class="btn ghost">◇ Enviar resumo ao Obsidian</button><a class="btn ghost" href="#/modulo/${lesson.module}">Ver Módulo ${lesson.module}</a></aside></div></div>`;

    document.querySelectorAll('.reveal').forEach(button => button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target);
      target.classList.toggle('show');
      button.setAttribute('aria-expanded', target.classList.contains('show'));
    }));
    $('#complete-lesson').addEventListener('click', () => {
      const set = completedSet();
      set.has(id) ? set.delete(id) : set.add(id);
      saveCompleted(set);
      renderLesson(id);
      showToast(set.has(id) ? 'Aula concluída.' : 'Conclusão desfeita.');
    });
    $('.task-toggle').addEventListener('click', () => toggleTask(id, true));
    $('#lesson-obsidian').addEventListener('click', () => openObsidian(lesson));
  }

  function toggleTask(id, rerender = false) {
    const tasks = taskState();
    tasks[id] = !tasks[id];
    saveTaskState(tasks);
    showToast(tasks[id] ? 'Tarefa concluída.' : 'Tarefa marcada como pendente.');
    rerender ? renderLesson(id) : renderTasks();
  }

  function renderTasks() {
    const tasks = taskState();
    app.innerHTML = `<div class="page">${pageHeader('Tarefas','Pratique o que estudou','As tarefas ficam salvas neste navegador.')}<div class="grid">${DATA.lessons.map(lesson => `<article class="card task-item ${tasks[lesson.id] ? 'done' : ''}"><input type="checkbox" aria-label="Concluir tarefa da Aula ${lesson.id}" data-task="${lesson.id}" ${tasks[lesson.id] ? 'checked' : ''}><div><div class="eyebrow">Aula ${lesson.id}</div><h3 class="task-title">${lesson.task}</h3><a href="#/aula/${lesson.id}">Abrir aula</a></div></article>`).join('')}</div></div>`;
    document.querySelectorAll('[data-task]').forEach(element => element.addEventListener('change', () => toggleTask(Number(element.dataset.task))));
  }

  function renderVideos() {
    const videos = DATA.lessons.filter(lesson => lesson.video);
    app.innerHTML = `<div class="page">${pageHeader('Vídeos','Complementos selecionados','Vídeos são apoio. O conteúdo principal continua dentro de cada aula.')}${videos.length ? `<div class="grid two">${videos.map(lesson => `<article class="card"><span class="badge">Aula ${lesson.id}</span><h3>${lesson.title}</h3><p class="muted">Vídeo validado na documentação oficial.</p><a class="btn primary" href="${lesson.video}" target="_blank" rel="noopener noreferrer">Assistir no YouTube</a></article>`).join('')}</div>` : '<div class="empty">Nenhum vídeo validado disponível ainda.</div>'}</div>`;
  }

  function noteMarkdown(lesson) {
    return `---\ncurso: Python do Zero\nmodulo: ${lesson.module}\naula: ${lesson.id}\nstatus: estudando\ntags:\n  - python-do-zero\n  - programacao\n---\n\n# Aula ${String(lesson.id).padStart(2,'0')} — ${lesson.title}\n\n## O que aprendi\n${lesson.learn.map(item => `- ${item}`).join('\n')}\n\n## Resumo da aula\n${lesson.summary}\n\n## Meu resumo\n\n## Conceitos para conectar\n- [[Programação]]\n- [[Python]]\n\n## Código que pratiquei\n\n\`\`\`text\n${lesson.code}\n\`\`\`\n\n## Dúvidas\n\n## Exercícios que errei\n\n## Revisar depois\n- [ ] Rever esta aula\n`;
  }
  function openObsidian(lesson) {
    const params = new URLSearchParams();
    const vault = getVault().trim();
    if (vault) params.set('vault', vault);
    params.set('name', `Python do Zero/Módulo ${String(lesson.module).padStart(2,'0')}/Aula ${String(lesson.id).padStart(2,'0')} - ${lesson.title}`);
    params.set('content', noteMarkdown(lesson));
    window.location.href = `obsidian://new?${params.toString()}`;
  }
  async function copyMarkdown(lesson) {
    try { await navigator.clipboard.writeText(noteMarkdown(lesson)); showToast('Markdown copiado.'); }
    catch { showToast('Não foi possível copiar automaticamente.'); }
  }
  function renderObsidian() {
    const lesson = currentLesson();
    app.innerHTML = `<div class="page">${pageHeader('Obsidian','Seu segundo cérebro','As notas do curso podem virar arquivos Markdown no seu Vault. Nenhuma senha ou token é necessário.')}<div class="grid two"><section class="card"><h2>Configuração</h2><div class="form-group"><label for="vault-name">Nome do Vault</label><input id="vault-name" type="text" value="${escapeHtml(getVault())}" placeholder="Ex.: Segundo Cérebro"></div><button id="save-vault" class="btn primary">Salvar nome do Vault</button></section><section class="card"><h2>Enviar uma aula</h2><div class="form-group"><label for="lesson-note">Aula</label><select id="lesson-note" style="width:100%;padding:11px;border:1px solid #b8c5d2;border-radius:10px">${DATA.lessons.map(item => `<option value="${item.id}" ${item.id === lesson.id ? 'selected' : ''}>Aula ${item.id} — ${item.title}</option>`).join('')}</select></div><div class="actions"><button id="open-obsidian" class="btn primary">Abrir/criar no Obsidian</button><button id="copy-md" class="btn secondary">Copiar Markdown</button></div></section></div><section class="card" style="margin-top:18px"><h2>Prévia da nota</h2><pre id="obsidian-preview" class="obsidian-preview"></pre></section></div>`;
    const select = $('#lesson-note');
    const preview = $('#obsidian-preview');
    const selected = () => DATA.lessons.find(item => item.id === Number(select.value));
    const refresh = () => { preview.textContent = noteMarkdown(selected()); };
    refresh();
    select.addEventListener('change', refresh);
    $('#save-vault').addEventListener('click', () => { localStorage.setItem(STORAGE.vault, $('#vault-name').value.trim()); showToast('Nome do Vault salvo.'); });
    $('#open-obsidian').addEventListener('click', () => openObsidian(selected()));
    $('#copy-md').addEventListener('click', () => copyMarkdown(selected()));
  }

  function moduleProgressCard(module, done) {
    const lessons = DATA.lessons.filter(lesson => lesson.module === module.id);
    const complete = lessons.filter(lesson => done.has(lesson.id)).length;
    const percent = lessons.length ? Math.round((complete / lessons.length) * 100) : 0;
    return `<article class="card"><div class="eyebrow">Módulo ${module.id}</div><h3>${module.title}</h3><p class="muted">${complete}/${lessons.length} aulas concluídas</p><div class="progress-track" style="background:#dbe4ed"><div class="progress-bar" style="width:${percent}%"></div></div><div class="actions" style="margin-top:12px"><a class="btn ghost" href="#/modulo/${module.id}">Ver módulo</a></div></article>`;
  }

  function renderProgress() {
    const done = completedSet();
    const tasks = taskState();
    const available = DATA.lessons.length;
    const doneTasks = DATA.lessons.filter(lesson => tasks[lesson.id]).length;
    app.innerHTML = `<div class="page">${pageHeader('Progresso','Acompanhe sua evolução','O progresso aumenta somente quando você marca explicitamente uma aula como concluída.')}<div class="grid three"><section class="card"><div class="eyebrow">Curso</div><div class="stat">${progressPercent()}%</div><p class="muted">${done.size}/120 aulas</p></section><section class="card"><div class="eyebrow">Aulas disponíveis</div><div class="stat">${DATA.lessons.filter(lesson => done.has(lesson.id)).length}/${available}</div><p class="muted">aulas concluídas</p></section><section class="card"><div class="eyebrow">Tarefas</div><div class="stat">${doneTasks}/${available}</div><p class="muted">tarefas concluídas</p></section></div><section class="card" style="margin-top:18px"><h2>Progresso geral</h2><div class="progress-track" style="background:#dbe4ed;height:14px"><div class="progress-bar" style="width:${progressPercent()}%"></div></div><p class="muted">Fórmula: aulas concluídas ÷ 120 × 100.</p></section><section style="margin-top:28px"><h2>Progresso por módulo</h2><div class="grid three">${DATA.modules.map(module => moduleProgressCard(module, done)).join('')}</div></section></div>`;
  }

  function render() {
    const route = routeInfo();
    setNavActive(route.page === 'aula' || route.page === 'modulo' ? 'curso' : route.page);
    updateGlobalProgress();
    const pages = {
      inicio: renderHome,
      curso: renderCourse,
      tarefas: renderTasks,
      videos: renderVideos,
      obsidian: renderObsidian,
      progresso: renderProgress
    };
    if (pages[route.page]) pages[route.page]();
    else if (route.page === 'modulo') renderModule(route.id);
    else if (route.page === 'aula') renderLesson(route.id);
    else location.hash = '#/inicio';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  renderNav();
  window.addEventListener('hashchange', render);
  render();
})();
