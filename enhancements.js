(() => {
  'use strict';

  const DATA = window.PDZ_DATA;
  const NOTES_KEY = 'pdz.lessonNotes';
  let enhancing = false;

  function readNotes() {
    try { return JSON.parse(localStorage.getItem(NOTES_KEY)) || {}; }
    catch { return {}; }
  }

  function writeNotes(notes) {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }

  function defaultNote(lesson) {
    return `# Aula ${String(lesson.id).padStart(2, '0')} — ${lesson.title}\n\n## O que aprendi\n${lesson.learn.map(item => `- ${item}`).join('\n')}\n\n## Resumo da aula\n${lesson.summary}\n\n## Minhas anotações\n\nEscreva aqui, com suas palavras, o que fez sentido para você.\n\n## Código que pratiquei\n\n\`\`\`text\n${lesson.code}\n\`\`\`\n\n## Dúvidas\n- \n\n## O que preciso revisar\n- [ ] Rever esta aula\n`;
  }

  function noteFor(lesson) {
    const notes = readNotes();
    return notes[lesson.id] ?? defaultNote(lesson);
  }

  function saveNote(lessonId, value) {
    const notes = readNotes();
    notes[lessonId] = value;
    writeNotes(notes);
  }

  function showLocalToast(message) {
    const toast = document.querySelector('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showLocalToast.timer);
    showLocalToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  async function copyText(value) {
    try {
      await navigator.clipboard.writeText(value);
      showLocalToast('Nota copiada.');
    } catch {
      showLocalToast('Não foi possível copiar automaticamente.');
    }
  }

  function openInObsidian(lesson, content) {
    const params = new URLSearchParams();
    const vault = (localStorage.getItem('pdz.obsidianVault') || '').trim();
    if (vault) params.set('vault', vault);
    params.set('name', `Python do Zero/Módulo ${String(lesson.module).padStart(2, '0')}/Aula ${String(lesson.id).padStart(2, '0')} - ${lesson.title}`);
    params.set('content', content);
    window.location.href = `obsidian://new?${params.toString()}`;
  }

  function getLessonFromHash() {
    const match = location.hash.match(/#\/aula\/(\d+)/);
    if (!match) return null;
    return DATA.lessons.find(item => item.id === Number(match[1])) || null;
  }

  function addLessonMap(lesson) {
    if (document.querySelector('.lesson-visual-map')) return;
    const layout = document.querySelector('.lesson-layout');
    if (!layout) return;
    const map = document.createElement('section');
    map.className = 'lesson-visual-map';
    map.setAttribute('aria-label', 'Mapa visual da aula');
    map.innerHTML = `
      <div class="visual-map-title"><span>🧭</span><div><strong>Como estudar esta aula</strong><small>Siga esta ordem para não se perder</small></div></div>
      <div class="visual-steps">
        <div class="visual-step"><span>1</span><strong>Entenda</strong><small>Leia a explicação devagar.</small></div>
        <div class="visual-arrow" aria-hidden="true">→</div>
        <div class="visual-step"><span>2</span><strong>Veja</strong><small>Observe o exemplo e o código.</small></div>
        <div class="visual-arrow" aria-hidden="true">→</div>
        <div class="visual-step"><span>3</span><strong>Faça</strong><small>Digite e teste por conta própria.</small></div>
        <div class="visual-arrow" aria-hidden="true">→</div>
        <div class="visual-step"><span>4</span><strong>Anote</strong><small>Registre suas dúvidas ao lado.</small></div>
      </div>
      <div class="lesson-key-points">
        ${lesson.learn.slice(0, 4).map((item, index) => `<div><span>${['💡','🔎','⌨️','✅'][index]}</span><p>${item}</p></div>`).join('')}
      </div>`;
    layout.parentNode.insertBefore(map, layout);
  }

  function addLessonNotes(lesson) {
    const aside = document.querySelector('.lesson-aside');
    if (!aside || aside.querySelector('.study-notes-card')) return;
    const card = document.createElement('section');
    card.className = 'card study-notes-card';
    card.innerHTML = `
      <div class="notes-heading"><span class="notes-icon">✎</span><div><h2>Minhas notas</h2><p>Escreva enquanto estuda.</p></div></div>
      <label class="sr-only" for="lesson-notes-${lesson.id}">Notas da Aula ${lesson.id}</label>
      <textarea id="lesson-notes-${lesson.id}" class="lesson-notes-input" spellcheck="true" placeholder="Ex.: Eu entendi que...\nMinha dúvida é...\nQuero testar depois..."></textarea>
      <div class="notes-save-status" aria-live="polite">Salvo automaticamente neste navegador.</div>
      <div class="notes-actions">
        <button type="button" class="btn secondary copy-study-note">Copiar nota</button>
        <button type="button" class="btn ghost reset-study-note">Usar modelo</button>
      </div>`;
    aside.appendChild(card);

    const textarea = card.querySelector('.lesson-notes-input');
    const status = card.querySelector('.notes-save-status');
    textarea.value = noteFor(lesson);
    let saveTimer;
    textarea.addEventListener('input', () => {
      status.textContent = 'Salvando…';
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        saveNote(lesson.id, textarea.value);
        status.textContent = '✓ Nota salva automaticamente.';
      }, 300);
    });
    card.querySelector('.copy-study-note').addEventListener('click', () => copyText(textarea.value));
    card.querySelector('.reset-study-note').addEventListener('click', () => {
      textarea.value = defaultNote(lesson);
      saveNote(lesson.id, textarea.value);
      status.textContent = '✓ Modelo da aula carregado e salvo.';
      textarea.focus();
    });
  }

  function addInstallGuide(lesson) {
    if (lesson.id !== 3 || document.querySelector('.setup-guide')) return;
    const body = document.querySelector('.lesson-body');
    if (!body) return;
    const first = body.querySelector('.section-card');
    const guide = document.createElement('section');
    guide.className = 'section-card setup-guide';
    guide.innerHTML = `
      <div class="setup-title"><span>🧰</span><div><h2>Preparação do computador — passo a passo</h2><p>Faça esta parte antes de escrever seu primeiro programa. Não precisa decorar nada.</p></div></div>
      <div class="setup-warning"><strong>Importante:</strong> neste curso, vamos instalar uma ferramenta somente quando ela realmente for necessária. Por enquanto, você precisa de três coisas: Python, VS Code e a extensão Python do VS Code.</div>
      <div class="tool-flow" aria-label="Ferramentas necessárias">
        <div><span>🐍</span><strong>Python</strong><small>executa seu código</small></div><span>+</span>
        <div><span>📝</span><strong>VS Code</strong><small>onde você escreve</small></div><span>+</span>
        <div><span>🧩</span><strong>Extensão Python</strong><small>integra os dois</small></div>
      </div>
      <div class="setup-block">
        <div class="setup-number">1</div>
        <div><h3>Instalar o Python no Windows</h3>
          <ol class="setup-steps">
            <li>Acesse o site oficial do Python e procure a área de downloads.</li>
            <li>Baixe o <strong>Python Install Manager</strong> para Windows. A documentação atual do Python recomenda esse gerenciador.</li>
            <li>Abra o arquivo baixado e escolha <strong>Install</strong>.</li>
            <li>Quando terminar, abra o <strong>Terminal</strong> ou <strong>PowerShell</strong>.</li>
            <li>Digite <code>python</code> e pressione Enter. Se o Python abrir sem erro, esta parte funcionou.</li>
          </ol>
          <a class="btn secondary" href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Abrir site oficial do Python</a>
        </div>
      </div>
      <div class="setup-block">
        <div class="setup-number">2</div>
        <div><h3>Instalar o Visual Studio Code</h3>
          <ol class="setup-steps">
            <li>Acesse o site oficial do VS Code.</li>
            <li>Baixe o instalador <strong>User Setup</strong> para Windows, recomendado para a maioria das pessoas.</li>
            <li>Abra o instalador e avance pelas telas mantendo as opções padrão.</li>
            <li>Conclua a instalação e abra o VS Code.</li>
          </ol>
          <a class="btn secondary" href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Abrir site oficial do VS Code</a>
        </div>
      </div>
      <div class="setup-block">
        <div class="setup-number">3</div>
        <div><h3>Instalar a extensão Python no VS Code</h3>
          <ol class="setup-steps">
            <li>No VS Code, clique no ícone de <strong>Extensions</strong> na barra lateral esquerda.</li>
            <li>Na busca, digite <strong>Python</strong>.</li>
            <li>Escolha a extensão <strong>Python</strong> publicada pela Microsoft e clique em <strong>Install</strong>.</li>
            <li>Depois, pressione <strong>Ctrl + Shift + P</strong>, procure <strong>Python: Select Interpreter</strong> e escolha o Python instalado.</li>
          </ol>
          <a class="btn secondary" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python" target="_blank" rel="noopener noreferrer">Abrir extensão Python</a>
        </div>
      </div>
      <div class="setup-block success-block">
        <div class="setup-number">4</div>
        <div><h3>Teste final: confirmar que tudo está pronto</h3>
          <p>Crie uma pasta chamada <strong>python-do-zero</strong>. No VS Code, abra essa pasta e crie um arquivo chamado <strong>teste.py</strong>.</p>
          <pre class="code"><code>print("Meu ambiente está funcionando!")</code></pre>
          <p>Execute o arquivo. Se a frase aparecer no terminal, você está pronta para seguir para a Aula 4.</p>
          <div class="setup-checklist"><label><input type="checkbox"> Python instalado</label><label><input type="checkbox"> VS Code instalado</label><label><input type="checkbox"> Extensão Python instalada</label><label><input type="checkbox"> teste.py executou</label></div>
        </div>
      </div>
      <div class="setup-help"><strong>Se algo der errado:</strong> não reinstale tudo de imediato. Confira qual passo falhou e repita somente ele. O curso continuará apresentando cada nova ferramenta antes de usá-la.</div>`;
    body.insertBefore(guide, first);
  }

  function decorateLessonSections() {
    const icons = {
      'O que você vai aprender':'🎯',
      'Por que isso é importante':'💡',
      'Antes de começar':'🧭',
      'Explicação':'📘',
      'Exemplo cotidiano':'🏠',
      'Exemplo em programação':'💻',
      'Código / pseudocódigo':'⌨️',
      'Explicação linha por linha':'🔍',
      'Prática guiada':'👣',
      'Agora é sua vez · Exercício':'✍️',
      'Desafio':'🚀',
      'Encontre o erro':'🧩',
      'Erros comuns':'⚠️',
      'Resumo':'🧠',
      'Checklist':'✅',
      'Tarefa':'📌',
      'Vídeo complementar':'▶️',
      'Referências':'📚'
    };
    document.querySelectorAll('.lesson-body .section-card > h2').forEach(h2 => {
      const title = h2.textContent.trim();
      const icon = icons[title];
      if (icon && !h2.querySelector('.section-icon')) {
        h2.innerHTML = `<span class="section-icon" aria-hidden="true">${icon}</span>${title}`;
      }
    });
  }

  function enhanceObsidianPage() {
    const preview = document.querySelector('#obsidian-preview');
    const select = document.querySelector('#lesson-note');
    if (!preview || !select || document.querySelector('#obsidian-editor')) return;
    const editor = document.createElement('textarea');
    editor.id = 'obsidian-editor';
    editor.className = 'obsidian-editor';
    editor.setAttribute('aria-label', 'Nota editável para o Obsidian');
    preview.replaceWith(editor);

    const selected = () => DATA.lessons.find(item => item.id === Number(select.value));
    const load = () => { const lesson = selected(); editor.value = noteFor(lesson); };
    load();
    select.addEventListener('change', load);
    editor.addEventListener('input', () => saveNote(selected().id, editor.value));

    const heading = editor.closest('.card')?.querySelector('h2');
    if (heading) heading.textContent = 'Editar nota antes de copiar';

    document.addEventListener('click', event => {
      const target = event.target.closest('#copy-md, #open-obsidian');
      if (!target) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const lesson = selected();
      saveNote(lesson.id, editor.value);
      if (target.id === 'copy-md') copyText(editor.value);
      else openInObsidian(lesson, editor.value);
    }, true);
  }

  function interceptLessonObsidian() {
    if (document.documentElement.dataset.lessonObsidianIntercept === '1') return;
    document.documentElement.dataset.lessonObsidianIntercept = '1';
    document.addEventListener('click', event => {
      const button = event.target.closest('#lesson-obsidian');
      if (!button) return;
      const lesson = getLessonFromHash();
      if (!lesson) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const textarea = document.querySelector(`#lesson-notes-${lesson.id}`);
      const content = textarea ? textarea.value : noteFor(lesson);
      saveNote(lesson.id, content);
      openInObsidian(lesson, content);
    }, true);
  }

  function enhanceCurrentScreen() {
    if (enhancing) return;
    enhancing = true;
    try {
      const lesson = getLessonFromHash();
      if (lesson && document.querySelector('.lesson-layout')) {
        addLessonMap(lesson);
        addLessonNotes(lesson);
        addInstallGuide(lesson);
        decorateLessonSections();
      }
      enhanceObsidianPage();
    } finally {
      enhancing = false;
    }
  }

  interceptLessonObsidian();
  const observer = new MutationObserver(() => queueMicrotask(enhanceCurrentScreen));
  observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
  window.addEventListener('hashchange', () => setTimeout(enhanceCurrentScreen, 0));
  enhanceCurrentScreen();
})();
