(() => {
  'use strict';
  const DATA = window.PDZ_DATA;
  if (!DATA) return;
  const KEY = 'devquest.game.v1';
  const state = Object.assign({xp:0, hearts:5, streak:1, level:1, correct:0, answered:0}, JSON.parse(localStorage.getItem(KEY)||'{}'));
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const quizBank=[
    {q:'Qual é a primeira etapa da sua trilha?',a:['React','Lógica de Programação','Banco de Dados','Java'],c:1,e:'A lógica vem primeiro: ela ensina a organizar soluções antes de depender de uma linguagem.'},
    {q:'Em Python, qual comando mostra uma mensagem na tela?',a:['input()','print()','show()','echo()'],c:1,e:'print() envia a informação para a saída do programa.'},
    {q:'Qual operador verifica igualdade em Python?',a:['=','==','!=','=>'],c:1,e:'= atribui um valor. == compara dois valores.'},
    {q:'Qual estrutura é usada para tomar decisões?',a:['if','import','print','def'],c:0,e:'if executa um bloco quando uma condição é verdadeira.'},
    {q:'No VS Code, onde você pode executar python aula.py?',a:['Painel de extensões','Terminal integrado','Explorador de temas','Minimapa'],c:1,e:'O terminal integrado permite executar os arquivos sem sair do VS Code.'}
  ];
  function gameStats(){
    const total=DATA.lessons.length||140;
    const done=new Set(JSON.parse(localStorage.getItem('pdz.completed')||'[]')).size;
    return '<div class="game-stats"><span>🔥 '+state.streak+' dias</span><span>💎 '+state.xp+' XP</span><span>❤️ '+state.hearts+'</span><span>⭐ Nível '+state.level+'</span><span>'+done+'/'+total+' aulas</span></div>';
  }
  function injectNav(){
    const nav=document.querySelector('#main-nav'); if(!nav) return;
    const extra=[['trilha','🗺️','Trilha'],['praticar','🎯','Praticar'],['laboratorio','💻','Laboratório'],['tutor','🤖','Tutor IA'],['desafios','🏆','Desafios']];
    extra.reverse().forEach(([p,i,l])=>{ if(!nav.querySelector('[data-page="'+p+'"]')) nav.insertAdjacentHTML('afterbegin','<a class="nav-link" data-page="'+p+'" href="#/'+p+'"><span>'+i+'</span><span>'+l+'</span></a>'); });
  }
  function renderShell(content){ document.querySelector('#app').innerHTML='<div class="page gamified">'+gameStats()+content+'</div>'; }
  function renderTrail(){
    const modules=DATA.modules;
    renderShell('<header class="hero-game"><div><div class="eyebrow">Sua jornada</div><h1>Aprenda programação jogando</h1><p>Microlições, desafios e prática no laboratório. Comece pela lógica e desbloqueie cada etapa.</p></div><div class="level-orb">Lv.<strong>'+state.level+'</strong></div></header><section class="quest-path">'+modules.map((m,i)=>'<a class="quest-node '+(i===0?'active':'')+'" href="#/modulo/'+m.id+'"><span class="node-icon">'+(i===0?'🧠':i===1?'🐍':i===2?'☕':'⚡')+'</span><span><small>Módulo '+m.id+'</small><strong>'+esc(m.title)+'</strong><em>Aulas '+m.lessons+'</em></span><b>→</b></a>').join('')+'</section>');
  }
  function renderPractice(){
    const q=quizBank[state.answered%quizBank.length];
    renderShell('<header class="page-header"><div><div class="eyebrow">Prática rápida</div><h1>Escolha a resposta</h1><p class="muted">A dificuldade aumenta conforme você avança.</p></div></header><section class="quiz-card"><div class="quiz-progress"><span style="width:'+((state.answered%quizBank.length+1)/quizBank.length*100)+'%"></span></div><h2>'+esc(q.q)+'</h2><div class="quiz-options">'+q.a.map((x,i)=>'<button class="quiz-option" data-answer="'+i+'"><b>'+String.fromCharCode(65+i)+'</b>'+esc(x)+'</button>').join('')+'</div><div id="quiz-feedback"></div></section>');
    document.querySelectorAll('.quiz-option').forEach(b=>b.onclick=()=>{const ok=Number(b.dataset.answer)===q.c; state.answered++; if(ok){state.correct++;state.xp+=10;state.level=1+Math.floor(state.xp/100);b.classList.add('correct');}else{state.hearts=Math.max(0,state.hearts-1);b.classList.add('wrong');} save(); document.querySelectorAll('.quiz-option').forEach(x=>x.disabled=true); document.querySelector('#quiz-feedback').innerHTML='<div class="feedback '+(ok?'good':'bad')+'"><strong>'+(ok?'✓ Correto! +10 XP':'Ainda não. Tente aprender com o erro.')+'</strong><p>'+esc(q.e)+'</p><a class="btn primary" href="#/praticar" onclick="setTimeout(()=>location.reload(),0)">Próxima questão</a></div>';});
  }
  function renderLab(){
    renderShell('<header class="page-header"><div><div class="eyebrow">Laboratório</div><h1>VS Code Simulator</h1><p class="muted">Escreva, execute, erre, corrija e teste. Aqui a prática vale mais que copiar.</p></div></header><div class="vscode-lab"><div class="vscode-top"><span>● ● ●</span><strong>aula.py — Visual Studio Code</strong></div><div class="vscode-main"><aside><b>EXPLORER</b><span>▾ MEU-PROJETO</span><span>🐍 aula.py</span></aside><div class="editor"><div class="editor-tabs">aula.py ×</div><textarea id="game-code" spellcheck="false">nome = input("Qual é seu nome? ")\nprint(f"Olá, {nome}!")</textarea></div></div><div class="terminal-panel"><div><b>TERMINAL</b> <span>PROBLEMS OUTPUT</span></div><pre id="game-output">$ python aula.py\nPronto para executar seu código.</pre></div><div class="lab-actions"><button id="run-code" class="btn success">▶ Executar</button><button id="reset-code" class="btn ghost">↻ Reiniciar</button><span class="muted">Simulador educativo: exercícios Python seguros no navegador.</span></div></div>');
    const ta=document.querySelector('#game-code'), out=document.querySelector('#game-output'), initial=ta.value;
    document.querySelector('#reset-code').onclick=()=>{ta.value=initial;out.textContent='$ python aula.py\nPronto para executar seu código.'};
    document.querySelector('#run-code').onclick=()=>{const code=ta.value; let result=[]; const prints=[...code.matchAll(/print\((?:f)?["']([^"']*)["']\)/g)]; if(code.includes('input(')) result.push('Entrada simulada: Júlia'); prints.forEach(m=>result.push(m[1].replace('{nome}','Júlia'))); if(!result.length) result.push('Código recebido. Este laboratório libera mais testes conforme as lições.'); state.xp+=2;save();out.textContent='$ python aula.py\n'+result.join('\n')+'\n\n+2 XP por praticar';};
  }
  function renderTutor(){
    const weak = state.answered ? (state.correct/state.answered < .7 ? 'Vamos reforçar a base antes de aumentar a dificuldade.' : 'Seu desempenho está bom. Posso aumentar o desafio aos poucos.') : 'Faça algumas práticas para eu adaptar as próximas atividades.';
    renderShell('<header class="page-header"><div><div class="eyebrow">Tutor adaptativo</div><h1>Tutor IA</h1><p class="muted">Peça explicações, dicas e novos exercícios sem receber a solução imediatamente.</p></div></header><div class="grid two"><section class="card"><h2>Como você está indo</h2><p>'+esc(weak)+'</p><p><strong>Acertos:</strong> '+state.correct+' de '+state.answered+'</p><div class="actions"><button class="btn secondary tutor-prompt" data-prompt="Não entendi este conceito. Explique de um jeito mais simples.">Explicar mais simples</button><button class="btn secondary tutor-prompt" data-prompt="Me dê uma dica sem revelar a resposta.">Só uma dica</button><button class="btn secondary tutor-prompt" data-prompt="Crie um exercício parecido, mas um pouco mais fácil.">Exercício mais fácil</button></div></section><section class="card tutor-chat"><h2>Converse com o tutor</h2><div id="tutor-messages"><p class="tutor-bubble ai">Olá! Eu vou ajudar você a pensar. Se você errar, primeiro explico a ideia e depois proponho uma nova tentativa.</p></div><div class="tutor-compose"><input id="tutor-input" placeholder="Ex.: não entendi o while"><button id="tutor-send" class="btn primary">Enviar</button></div></section></div>');
    const input=document.querySelector('#tutor-input'), box=document.querySelector('#tutor-messages');
    function answer(msg){const m=msg.toLowerCase(); let a='Vamos dividir isso em partes menores. Diga qual trecho ou conceito está causando dúvida e eu preparo uma pista e um exercício.'; if(m.includes('while')) a='while repete um bloco enquanto uma condição for verdadeira. Pense: “enquanto ainda houver algo para fazer, continue”. Tente criar um contador que começa em 1 e para em 3.'; else if(m.includes('for')) a='for é ótimo quando você quer percorrer uma sequência ou repetir uma quantidade conhecida de vezes. Em Python, experimente: for i in range(1, 4):'; else if(m.includes('if')) a='if significa “se”. O programa verifica uma condição e só executa o bloco quando ela é verdadeira. Exemplo mental: se estiver chovendo, leve guarda-chuva.'; else if(m.includes('erro')) a='Cole ou descreva o erro. Primeiro vamos identificar a linha, depois o tipo do erro e só então corrigir. Não vou pular direto para a resposta.'; box.insertAdjacentHTML('beforeend','<p class="tutor-bubble user">'+esc(msg)+'</p><p class="tutor-bubble ai">'+esc(a)+'</p>'); box.scrollTop=box.scrollHeight;}
    document.querySelector('#tutor-send').onclick=()=>{if(input.value.trim()){answer(input.value.trim());input.value='';}};
    input.onkeydown=e=>{if(e.key==='Enter')document.querySelector('#tutor-send').click();};
    document.querySelectorAll('.tutor-prompt').forEach(b=>b.onclick=()=>answer(b.dataset.prompt));
  }
  function renderChallenges(){
    renderShell('<header class="page-header"><div><div class="eyebrow">Missões</div><h1>Desafios</h1><p class="muted">Pequenas tarefas que evoluem junto com seu aprendizado.</p></div></header><div class="grid three"><article class="card challenge"><span>🧠</span><h3>Lógica diária</h3><p>Resolva 3 perguntas sem perder um coração.</p><a class="btn primary" href="#/praticar">Começar</a></article><article class="card challenge"><span>🐍</span><h3>Primeiro programa</h3><p>Crie uma saudação no laboratório e execute.</p><a class="btn secondary" href="#/laboratorio">Abrir laboratório</a></article><article class="card challenge"><span>🔥</span><h3>Sequência</h3><p>Complete uma atividade por dia para manter sua sequência.</p><button class="btn ghost" disabled>Em andamento</button></article></div>');
  }
  function route(){const p=(location.hash.replace(/^#\/?/,'')||'inicio').split('/')[0]; injectNav(); if(p==='trilha'){renderTrail();return true} if(p==='praticar'){renderPractice();return true} if(p==='laboratorio'){renderLab();return true} if(p==='tutor'){renderTutor();return true} if(p==='desafios'){renderChallenges();return true} return false}
  window.addEventListener('hashchange',()=>setTimeout(route,0));
  setTimeout(()=>{injectNav(); if(location.hash==='#/inicio'||!location.hash) location.hash='#/trilha'; else route();},0);
})();