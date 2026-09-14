(() => {
  'use strict';

  const KEY = 'pdz.terminalProgress';
  const exercises = [
    {id:1,language:'Python',level:'Básico',title:'Primeiro comando',concept:'print() mostra uma informação no terminal. Textos ficam entre aspas.',command:'python main.py',file:'main.py',task:'Mostre exatamente: Olá, mundo!',starter:'# Escreva seu código aqui\n',checks:['print','Olá, mundo!'],hint:'Use print("seu texto").',success:'Você executou sua primeira instrução.'},
    {id:2,language:'Python',level:'Básico',title:'Variáveis',concept:'Uma variável guarda um valor usando nome = valor.',command:'python main.py',file:'main.py',task:'Crie a variável nome, guarde seu nome nela e mostre o resultado.',starter:'# Crie a variável nome\n',checks:['nome','=', 'print'],hint:'Primeiro guarde o texto; depois passe nome para print().',success:'Você guardou e recuperou um valor.'},
    {id:3,language:'Python',level:'Básico',title:'Entrada de dados',concept:'input() faz uma pergunta e recebe o texto digitado.',command:'python main.py',file:'main.py',task:'Pergunte a idade e guarde a resposta em uma variável chamada idade.',starter:'# Converse com o usuário\n',checks:['idade','=', 'input'],hint:'A estrutura começa com idade = input(...).',success:'Seu programa já recebe informações.'},
    {id:4,language:'Python',level:'Básico',title:'Decisões com if',concept:'if executa um bloco quando uma condição é verdadeira. A indentação faz parte da estrutura.',command:'python main.py',file:'main.py',task:'Se idade for maior ou igual a 18, mostre: Maior de idade.',starter:'idade = 20\n\n# Crie a condição\n',checks:['if','>=','18','print'],hint:'Termine a linha do if com dois-pontos e recue o print.',success:'Você criou uma decisão.'},
    {id:5,language:'Python',level:'Intermediário',title:'Repetições',concept:'for repete uma ação. range() cria uma sequência de números.',command:'python main.py',file:'main.py',task:'Mostre os números de 1 a 5 usando apenas um print dentro de uma repetição.',starter:'# Evite escrever cinco prints\n',checks:['for','range','print'],hint:'Experimente range(1, 6).',success:'Você automatizou uma repetição.'},
    {id:6,language:'Python',level:'Intermediário',title:'Funções',concept:'def cria um bloco reutilizável que pode receber dados e devolver um resultado.',command:'python main.py',file:'main.py',task:'Crie a função dobro(numero), que devolve o número multiplicado por 2.',starter:'# Defina a função e depois teste\n',checks:['def','dobro','return','* 2'],hint:'Comece com def dobro(numero):',success:'Você criou um código reutilizável.'},
    {id:7,language:'Python',level:'Avançado',title:'Classes e objetos',concept:'Uma classe funciona como um modelo para criar objetos com dados e comportamentos.',command:'python main.py',file:'main.py',task:'Crie uma classe chamada Aluno com um método estudar.',starter:'# Crie o modelo Aluno\n',checks:['class','Aluno','def','estudar'],hint:'Use class Aluno: e def estudar(self):',success:'Você montou a base da orientação a objetos.'},
    {id:8,language:'JavaScript',level:'Básico',title:'Primeiro console.log',concept:'Ao chegar ao módulo Web, o terminal muda para JavaScript. console.log() mostra uma informação.',command:'node app.js',file:'app.js',task:'Mostre exatamente: Comecei JavaScript!',starter:'// Seu primeiro código em JavaScript\n',checks:['console.log','Comecei JavaScript!'],hint:'Use console.log("seu texto");',success:'Você executou seu primeiro JavaScript.'},
    {id:9,language:'JavaScript',level:'Intermediário',title:'Arrays e map',concept:'map percorre um array e produz outro com os valores transformados.',command:'node app.js',file:'app.js',task:'Use map para criar uma lista com o dobro de [1, 2, 3].',starter:'const numeros = [1, 2, 3];\n',checks:['map','=>','* 2'],hint:'Pense em numeros.map(numero => ...).',success:'Você transformou uma coleção de dados.'},
    {id:10,language:'JavaScript',level:'Avançado',title:'Funções assíncronas',concept:'async/await permite esperar operações como buscas em APIs.',command:'node app.js',file:'app.js',task:'Crie uma função async chamada buscarDados e use await dentro dela.',starter:'// Simule uma busca de dados\n',checks:['async','buscarDados','await'],hint:'Comece com async function buscarDados() { ... }',success:'Você criou a estrutura de uma operação assíncrona.'}
  ];

  function state() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {done:[],drafts:{}}; }
    catch { return {done:[],drafts:{}}; }
  }
  function save(value) { localStorage.setItem(KEY, JSON.stringify(value)); }
  function escaped(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }

  window.renderTerminalPractice = function renderTerminalPractice() {
    const app = document.querySelector('#app');
    const saved = state();
    let selected = Math.min(Number(sessionStorage.getItem('pdz.terminalSelected')) || 1, exercises.length);
    const available = Math.min(exercises.length, Math.max(1, ...saved.done.map(id => id + 1)));
    if (selected > available) selected = available;

    app.innerHTML = `<div class="terminal-page">
      <header class="terminal-page-head">
        <div><div class="eyebrow">Laboratório prático</div><h1>Terminal de Exercícios</h1><p>Leia o comando, entenda a estrutura e pense na solução antes de abrir a dica.</p></div>
        <div class="terminal-progress"><strong><span id="terminal-done">${saved.done.length}</span>/${exercises.length}</strong><small>desafios concluídos</small><div><span style="width:${saved.done.length / exercises.length * 100}%"></span></div></div>
      </header>
      <div class="terminal-workspace">
        <aside class="terminal-exercises" aria-label="Exercícios do terminal">
          <div class="terminal-exercises-title">EXERCÍCIOS</div>
          ${['Básico','Intermediário','Avançado'].map(level => `<section><h2>${level}</h2>${exercises.filter(x => x.level === level).map(x => {
            const locked = x.id > available, done = saved.done.includes(x.id);
            return `<button data-exercise="${x.id}" ${locked ? 'disabled' : ''} class="${x.id === selected ? 'active' : ''}"><span>${locked ? '🔒' : done ? '✓' : String(x.id).padStart(2,'0')}</span><div><small>${x.language}</small><strong>${x.title}</strong></div></button>`;
          }).join('')}</section>`).join('')}
        </aside>
        <section id="terminal-challenge" class="terminal-challenge"></section>
      </div>
    </div>`;

    const renderExercise = (id) => {
      selected = id;
      sessionStorage.setItem('pdz.terminalSelected', id);
      const ex = exercises.find(item => item.id === id);
      const currentState = state();
      const draft = currentState.drafts[id] ?? ex.starter;
      document.querySelectorAll('[data-exercise]').forEach(btn => btn.classList.toggle('active', Number(btn.dataset.exercise) === id));
      document.querySelector('#terminal-challenge').innerHTML = `
        <div class="terminal-lesson">
          <div class="terminal-tags"><span class="${ex.language === 'Python' ? 'python' : 'javascript'}">${ex.language}</span><span>${ex.level}</span><span>Desafio ${String(ex.id).padStart(2,'0')}</span></div>
          <h2>${ex.title}</h2><p class="terminal-concept">${ex.concept}</p>
          <div class="terminal-guide">
            <div><small>COMANDO PARA EXECUTAR</small><code>$ ${ex.command}</code></div>
            <div><small>SEU DESAFIO</small><p>${ex.task}</p></div>
          </div>
          <details class="terminal-hint"><summary>💡 Preciso de uma dica</summary><p><strong>Pense na estrutura:</strong> ${ex.hint}</p></details>
        </div>
        <div class="vscode-simulator">
          <div class="vscode-title"><span>● ● ●</span><strong>Visual Studio Code</strong><small>${ex.file}</small></div>
          <div class="vscode-tab"><span>${ex.language === 'Python' ? '🐍' : 'JS'}</span> ${ex.file}<i>●</i></div>
          <div class="vscode-editor"><div class="editor-lines" aria-hidden="true">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12</div><textarea id="terminal-code" aria-label="Editor de código" spellcheck="false">${escaped(draft)}</textarea></div>
          <div class="vscode-actions"><button id="terminal-reset" class="btn ghost">↻ Recomeçar</button><button id="terminal-run" class="btn primary">▶ Executar código</button></div>
          <div class="vscode-terminal"><div><strong>TERMINAL</strong><small>${ex.command}</small></div><pre id="terminal-output"><span>➜</span> Terminal pronto. Agora é com você.</pre></div>
        </div>`;

      const input = document.querySelector('#terminal-code');
      input.addEventListener('input', () => { const next = state(); next.drafts[id] = input.value; save(next); });
      document.querySelector('#terminal-reset').addEventListener('click', () => {
        input.value = ex.starter; const next = state(); next.drafts[id] = ex.starter; save(next);
        document.querySelector('#terminal-output').innerHTML = '<span>➜</span> Código restaurado.';
      });
      document.querySelector('#terminal-run').addEventListener('click', () => {
        const missing = ex.checks.find(check => !input.value.includes(check));
        const output = document.querySelector('#terminal-output');
        if (missing) {
          output.className = 'wrong';
          output.innerHTML = `<span>✕</span> Ainda não passou. Revise sua estrutura e tente outra vez.\n\nPista: falta usar <strong>${escaped(missing)}</strong>.`;
          return;
        }
        const next = state();
        if (!next.done.includes(id)) next.done.push(id);
        next.drafts[id] = input.value; save(next);
        output.className = 'correct';
        output.innerHTML = `<span>✓</span> Teste aprovado!\n${ex.success}${id < exercises.length ? '\nO próximo desafio foi desbloqueado.' : '\nVocê concluiu o laboratório inicial!'}`;
        setTimeout(() => window.renderTerminalPractice(), 900);
      });
    };

    document.querySelectorAll('[data-exercise]').forEach(btn => btn.addEventListener('click', () => renderExercise(Number(btn.dataset.exercise))));
    renderExercise(selected);
  };
})();