(() => {
  'use strict';

  const DATA = window.PDZ_DATA;
  const CTF_STATE_KEY = 'pdz.ctfState';

  function lessonFromHash() {
    const match = location.hash.match(/#\/aula\/(\d+)/);
    return match ? DATA.lessons.find(item => item.id === Number(match[1])) : null;
  }

  function readState() {
    try { return JSON.parse(localStorage.getItem(CTF_STATE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveState(value) {
    localStorage.setItem(CTF_STATE_KEY, JSON.stringify(value));
  }

  function toast(message) {
    const el = document.querySelector('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  function insertAfter(reference, node) {
    reference.parentNode.insertBefore(node, reference.nextSibling);
  }

  function addActiveRecall(lesson) {
    if (document.querySelector('.active-recall')) return;
    const sections = [...document.querySelectorAll('.lesson-body .section-card')];
    const summary = sections.find(section => section.querySelector('h2')?.textContent.includes('Resumo'));
    if (!summary) return;

    const box = document.createElement('section');
    box.className = 'section-card active-recall';
    box.innerHTML = `
      <div class="practice-title"><span>🧪</span><div><h2>Teste rápido — sem olhar a resposta</h2><p>Use para descobrir se você entendeu ou apenas reconheceu o conteúdo.</p></div></div>
      <div class="practice-grid">
        <article class="micro-test"><span class="micro-label">1 · Explique</span><h3>Fale com suas palavras</h3><p>Sem voltar ao texto, explique: <strong>${lesson.learn[0]}</strong>.</p><textarea aria-label="Minha resposta para explicar" placeholder="Escreva aqui o que você entendeu..."></textarea></article>
        <article class="micro-test"><span class="micro-label">2 · Aplique</span><h3>Dê um exemplo novo</h3><p>Crie um exemplo diferente do usado na aula para mostrar que você sabe aplicar a ideia.</p><textarea aria-label="Meu exemplo" placeholder="Meu exemplo é..."></textarea></article>
        <article class="micro-test"><span class="micro-label">3 · Confira</span><h3>O que pode dar errado?</h3><p>Descreva um erro comum relacionado ao conteúdo e como você perceberia esse erro.</p><textarea aria-label="Erro que eu reconheço" placeholder="Um erro possível é..."></textarea></article>
      </div>
      <details class="self-check"><summary>Ver critérios para eu mesma conferir</summary><ul><li>Usei minhas próprias palavras, sem copiar a definição.</li><li>Meu exemplo realmente usa o conceito da aula.</li><li>Consigo dizer por que o erro está errado.</li><li>Se travei em algum ponto, registrei a dúvida em “Minhas notas”.</li></ul></details>`;
    insertAfter(summary, box);
  }

  const ctfChallenges = {
    111: {
      title: 'CTF 01 · Tríade CIA',
      story: 'Uma escola perdeu acesso ao sistema de notas durante toda a manhã, mas nenhum dado foi alterado ou exposto.',
      question: 'Qual princípio foi afetado principalmente?',
      options: [['confidencialidade','Confidencialidade'],['integridade','Integridade'],['disponibilidade','Disponibilidade']],
      answer: 'disponibilidade',
      flag: 'FLAG{disponibilidade_em_primeiro_lugar}',
      explanation: 'O problema principal é que o serviço não estava acessível quando necessário. Isso corresponde à disponibilidade.'
    },
    112: {
      title: 'CTF 02 · Risco ou vulnerabilidade?',
      story: 'Um sistema usa uma versão antiga de uma biblioteca que possui uma falha conhecida, mas ainda não houve incidente.',
      question: 'O que essa falha conhecida representa?',
      options: [['ameaca','Ameaça'],['vulnerabilidade','Vulnerabilidade'],['incidente','Incidente']],
      answer: 'vulnerabilidade',
      flag: 'FLAG{vulnerabilidade_identificada}',
      explanation: 'Uma fraqueza que pode ser explorada é uma vulnerabilidade. Ameaça é algo que pode causar dano; incidente é quando algo efetivamente ocorre.'
    },
    113: {
      title: 'CTF 03 · Autenticação x autorização',
      story: 'Júlia entra com usuário e senha corretamente. Depois tenta abrir uma página reservada a administradores e o servidor bloqueia o acesso.',
      question: 'Qual controle bloqueou a página de administradores?',
      options: [['autenticacao','Autenticação'],['autorizacao','Autorização'],['criptografia','Criptografia']],
      answer: 'autorizacao',
      flag: 'FLAG{servidor_verifica_autorizacao}',
      explanation: 'Autenticação confirma quem é a pessoa. Autorização decide o que essa pessoa pode acessar.'
    },
    114: {
      title: 'CTF 04 · Segredo no código',
      story: 'Você revisa um projeto de treino e encontra: API_TOKEN = "meu-token-supersecreto" dentro de um arquivo que iria para o GitHub.',
      question: 'Qual é a correção mais segura?',
      options: [['comentario','Deixar o token e adicionar um comentário dizendo que é secreto'],['ambiente','Remover o segredo do código e carregá-lo por variável de ambiente'],['base64','Transformar o token em Base64 e manter no código']],
      answer: 'ambiente',
      flag: 'FLAG{segredo_fora_do_codigo}',
      explanation: 'Segredos não devem ser versionados. Variáveis de ambiente ou um gerenciador de segredos permitem separar configuração sensível do código.'
    },
    115: {
      title: 'CTF 05 · Defesa contra injeção',
      story: 'Um sistema precisa consultar um usuário por e-mail sem montar SQL concatenando diretamente o texto digitado pela pessoa.',
      question: 'Qual prática deve ser usada?',
      options: [['concatenar','Concatenar a entrada na consulta'],['parametrizar','Usar consulta parametrizada'],['ocultar','Esconder o formulário com CSS']],
      answer: 'parametrizar',
      flag: 'FLAG{consultas_parametrizadas}',
      explanation: 'Consultas parametrizadas separam os dados da estrutura do comando SQL e são uma defesa central contra injeção.'
    },
    116: {
      title: 'CTF 06 · Base64 não é criptografia',
      story: 'Uma aplicação transforma uma senha em Base64 e afirma que agora ela está criptografada.',
      question: 'Qual diagnóstico está correto?',
      options: [['seguro','Está seguro porque ninguém consegue desfazer Base64'],['encoding','Base64 é codificação e pode ser revertido facilmente'],['hash','Base64 é um hash de senha']],
      answer: 'encoding',
      flag: 'FLAG{base64_nao_e_criptografia}',
      explanation: 'Base64 é apenas uma codificação para representar bytes como texto. Não oferece sigilo.'
    },
    119: {
      title: 'CTF 07 · Senhas armazenadas corretamente',
      story: 'Você precisa escolher como armazenar senhas de usuários no projeto final.',
      question: 'Qual opção é apropriada?',
      options: [['texto','Guardar a senha em texto puro'],['reversivel','Criptografar de modo reversível e guardar a chave junto'],['hash','Usar algoritmo moderno de hash de senha, como Argon2id, com salt adequado']],
      answer: 'hash',
      flag: 'FLAG{senha_com_hash_moderno}',
      explanation: 'Senhas devem usar funções próprias para hashing de senhas. Não devem ser guardadas em texto puro nem de forma reversível.'
    }
  };

  function addCtf(lesson) {
    const challenge = ctfChallenges[lesson.id];
    if (!challenge || document.querySelector('.ctf-card')) return;
    const body = document.querySelector('.lesson-body');
    if (!body) return;
    const card = document.createElement('section');
    card.className = 'section-card ctf-card';
    card.innerHTML = `
      <div class="ctf-heading"><div class="ctf-badge">CTF</div><div><h2>${challenge.title}</h2><p>Laboratório simulado, local e seguro. Nenhum sistema real é atacado.</p></div></div>
      <div class="ctf-story"><span>📁 Cenário</span><p>${challenge.story}</p></div>
      <fieldset class="ctf-options"><legend>${challenge.question}</legend>${challenge.options.map(([value,label]) => `<label><input type="radio" name="ctf-${lesson.id}" value="${value}"> <span>${label}</span></label>`).join('')}</fieldset>
      <div class="actions"><button type="button" class="btn primary ctf-check">Verificar resposta</button><button type="button" class="btn ghost ctf-hint">Ver dica</button></div>
      <div class="ctf-feedback" aria-live="polite"></div>`;

    body.appendChild(card);
    const feedback = card.querySelector('.ctf-feedback');
    card.querySelector('.ctf-hint').addEventListener('click', () => {
      feedback.className = 'ctf-feedback hint';
      feedback.textContent = `Dica: volte ao conceito principal da Aula ${lesson.id} e procure a diferença entre as opções.`;
    });
    card.querySelector('.ctf-check').addEventListener('click', () => {
      const selected = card.querySelector(`input[name="ctf-${lesson.id}"]:checked`);
      if (!selected) { toast('Escolha uma resposta primeiro.'); return; }
      if (selected.value === challenge.answer) {
        const state = readState(); state[lesson.id] = true; saveState(state);
        feedback.className = 'ctf-feedback correct';
        feedback.innerHTML = `<strong>✓ Flag conquistada</strong><code>${challenge.flag}</code><p>${challenge.explanation}</p>`;
      } else {
        feedback.className = 'ctf-feedback wrong';
        feedback.innerHTML = '<strong>Ainda não.</strong><p>Releia o cenário e tente eliminar as alternativas que não combinam com o conceito.</p>';
      }
    });
  }

  const setupGuides = {
    33: ['Git', 'Antes da primeira aula prática de Git, instale o Git pelo site oficial e confirme no terminal com git --version.', 'https://git-scm.com/downloads'],
    62: ['FastAPI', 'Nesta etapa você não instala um programa separado: cria um ambiente virtual do Python e instala FastAPI dentro do projeto. A aula deve mostrar cada comando antes de usá-lo.', 'https://fastapi.tiangolo.com/'],
    72: ['PostgreSQL', 'Antes de escrever SQL no PostgreSQL, instale o banco de dados usando o instalador oficial e confirme que o serviço está funcionando.', 'https://www.postgresql.org/download/'],
    96: ['Linux', 'O curso apresenta Linux antes de exigir comandos. No Windows, você poderá praticar com WSL, máquina virtual ou ambiente de laboratório, sempre com instruções antes do uso.', 'https://learn.microsoft.com/windows/wsl/install']
  };

  function addToolPrep(lesson) {
    const guide = setupGuides[lesson.id];
    if (!guide || document.querySelector('.tool-prep')) return;
    const body = document.querySelector('.lesson-body');
    const first = body?.querySelector('.section-card');
    if (!first) return;
    const box = document.createElement('section');
    box.className = 'section-card tool-prep';
    box.innerHTML = `<div class="practice-title"><span>🛠️</span><div><h2>Antes de usar: ${guide[0]}</h2><p>${guide[1]}</p></div></div><a class="btn secondary" href="${guide[2]}" target="_blank" rel="noopener noreferrer">Abrir documentação oficial</a><p class="muted small-note">Regra do Python do Zero: nenhuma ferramenta nova será usada antes de você saber o que ela é, para que serve, como instalar e como conferir se funcionou.</p>`;
    body.insertBefore(box, first);
  }

  function addSecurityLabIntro() {
    const match = location.hash.match(/#\/modulo\/(11|12)/);
    if (!match || document.querySelector('.lab-intro')) return;
    const page = document.querySelector('.page');
    const list = page?.querySelector('.lesson-list')?.parentElement;
    if (!page || !list) return;
    const intro = document.createElement('section');
    intro.className = 'card lab-intro';
    intro.innerHTML = `<div class="practice-title"><span>🏁</span><div><h2>Trilha prática de segurança</h2><p>Inspirada no formato de plataformas profissionais de treinamento, com teoria + teste + laboratório + CTF, mas construída para este curso e sempre em ambiente simulado.</p></div></div><div class="lab-path"><div><span>📘</span><strong>Aprender</strong><small>conceito explicado</small></div><span>→</span><div><span>🧪</span><strong>Testar</strong><small>perguntas de recuperação</small></div><span>→</span><div><span>🧰</span><strong>Laboratório</strong><small>cenário seguro</small></div><span>→</span><div><span>🏁</span><strong>CTF</strong><small>conquistar a flag</small></div></div><p class="muted">Os desafios não pedem ataques a sites, redes ou contas reais. Todo exercício ofensivo, quando existir, será limitado a alvos de treino explicitamente criados para isso.</p>`;
    page.insertBefore(intro, list);
  }

  function enhance() {
    const lesson = lessonFromHash();
    if (lesson && document.querySelector('.lesson-body')) {
      addActiveRecall(lesson);
      addCtf(lesson);
      addToolPrep(lesson);
    }
    addSecurityLabIntro();
  }

  const app = document.querySelector('#app');
  if (app) new MutationObserver(() => queueMicrotask(enhance)).observe(app, { childList: true, subtree: true });
  window.addEventListener('hashchange', () => setTimeout(enhance, 0));
  enhance();
})();
