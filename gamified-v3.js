(() => {
  'use strict';
  const DATA = window.PDZ_DATA;
  if (!DATA) { console.error('Gamificação: PDZ_DATA não carregado.'); return; }
  const KEY = 'devquest.game.v3';
  const state = Object.assign({xp:0, hearts:5, streak:1, level:1, correct:0, answered:0}, JSON.parse(localStorage.getItem(KEY)||'{}'));
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  const MICRO_DONE_KEY='devquest.micro.done.v3';
  const microDoneSet=()=>new Set(JSON.parse(localStorage.getItem(MICRO_DONE_KEY)||'[]'));
  const topicCount=()=>microLessons.length;
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
    const done=new Set(JSON.parse(localStorage.getItem('pdz.completed.v3')||'[]')).size;
    return '<div class="game-stats"><span>🔥 '+state.streak+' dias</span><span>💎 '+state.xp+' XP</span><span>❤️ '+state.hearts+'</span><span>⭐ Nível '+state.level+'</span><span>'+done+'/'+total+' aulas</span></div>';
  }
  function injectNav(){
    const nav=document.querySelector('#main-nav'); if(!nav) return;
    const extra=[['trilha','🗺️','Trilha'],['aprender','📚','Aprender'],['praticar','🎯','Praticar'],['laboratorio','💻','Laboratório'],['tutor','🤖','Tutor IA'],['desafios','🏆','Desafios']];
    extra.reverse().forEach(([p,i,l])=>{ if(!nav.querySelector('[data-page="'+p+'"]')) nav.insertAdjacentHTML('afterbegin','<a class="nav-link" data-page="'+p+'" href="#/'+p+'"><span>'+i+'</span><span>'+l+'</span></a>'); });
  }
  function renderShell(content){ const root=document.querySelector('#app'); if(!root) return; root.innerHTML='<div class="page gamified">'+gameStats()+content+'</div>'; }
  function renderTrail(){
    const done=microDoneSet(), total=topicCount(), current=Math.min(total,Math.max(1,done.size+1));
    const groups=[
      ['Fundamentos','Lógica + Python',1,30,'🧠'],['Orientação a Objetos','Python intermediário',31,40,'🐍'],
      ['Java','Java no VS Code',41,60,'☕'],['Ferramentas','Git e GitHub',61,65,'🌿'],
      ['Web','HTML, CSS e JavaScript',66,80,'🌐'],['Front-end','React',81,88,'⚛️'],
      ['Back-end','HTTP, APIs e FastAPI',89,104,'🔌'],['Dados','SQL e Banco de Dados',105,114,'🗄️'],
      ['Infraestrutura','Redes, Linux e Deploy',115,132,'🚀'],['Segurança','Segurança, Criptografia e Projeto',133,total,'🛡️']
    ].filter(g=>g[2]<=total);
    const nodes=groups.map((g,gi)=>{
      const [label,title,from,to,icon]=g, capped=Math.min(to,total);
      const finished=[...done].filter(x=>x>=from&&x<=capped).length, count=capped-from+1;
      const unlocked=from===1||done.has(from-1), active=current>=from&&current<=capped;
      return '<section class="path-zone '+(unlocked?'':'locked')+'"><div class="path-zone-head"><span>'+icon+'</span><div><small>'+esc(label)+'</small><h2>'+esc(title)+'</h2><p>'+finished+'/'+count+' missões concluídas</p></div></div><div class="mission-line">'+Array.from({length:count},(_,k)=>{const id=from+k,isDone=done.has(id),isCurrent=id===current,isOpen=isDone||isCurrent||(id===1);return '<a class="mission-dot '+(isDone?'done ':isCurrent?'current ':'')+(isOpen?'':'locked')+'" '+(isOpen?'href="#/micro/'+id+'/0"':'aria-disabled="true"')+' title="Missão '+id+'">'+(isDone?'✓':id)+'</a>'}).join('')+'</div>'+(active?'<div class="next-mission"><div><small>PRÓXIMA MISSÃO</small><strong>'+esc(microLessons[current-1].title)+'</strong><span>3–7 min · aprender fazendo</span></div><a class="btn primary" href="#/micro/'+current+'/0">Continuar →</a></div>':'</section>').replace('</section></section>','</section>')+'</section>';
    }).join('');
    renderShell('<header class="hero-game"><div><div class="eyebrow">Trilha prática</div><h1>Aprenda fazendo, do zero ao Full Stack</h1><p>A trilha é o curso principal: conceito curto → exercício → código → desafio → projeto. Vídeos são apenas apoio opcional.</p></div><div class="level-orb">Lv.<strong>'+state.level+'</strong></div></header><div class="learning-loop"><span>⚡ Conceito rápido</span><b>→</b><span>🎯 Exercício</span><b>→</b><span>💻 Código</span><b>→</b><span>🏆 Projeto</span></div><div class="trail-progress"><strong>'+done.size+' de '+total+' missões</strong><div class="micro-bar"><span style="width:'+Math.round(done.size/total*100)+'%"></span></div><span>'+Math.round(done.size/total*100)+'%</span></div><section class="quest-path">'+nodes+'</section>');
  }
  function renderPractice(){
    const q=quizBank[state.answered%quizBank.length];
    renderShell('<header class="page-header"><div><div class="eyebrow">Prática rápida</div><h1>Escolha a resposta</h1><p class="muted">A dificuldade aumenta conforme você avança.</p></div></header><section class="quiz-card"><div class="quiz-progress"><span style="width:'+((state.answered%quizBank.length+1)/quizBank.length*100)+'%"></span></div><h2>'+esc(q.q)+'</h2><div class="quiz-options">'+q.a.map((x,i)=>'<button class="quiz-option" data-answer="'+i+'"><b>'+String.fromCharCode(65+i)+'</b>'+esc(x)+'</button>').join('')+'</div><div id="quiz-feedback"></div></section>');
    document.querySelectorAll('.quiz-option').forEach(b=>b.onclick=()=>{const ok=Number(b.dataset.answer)===q.c; state.answered++; if(ok){state.correct++;state.xp+=10;state.level=1+Math.floor(state.xp/100);b.classList.add('correct');}else{state.hearts=Math.max(0,state.hearts-1);b.classList.add('wrong');} save(); document.querySelectorAll('.quiz-option').forEach(x=>x.disabled=true); document.querySelector('#quiz-feedback').innerHTML='<div class="feedback '+(ok?'good':'bad')+'"><strong>'+(ok?'✓ Correto! +10 XP':'Ainda não. Tente aprender com o erro.')+'</strong><p>'+esc(q.e)+'</p><a class="btn primary" href="#/praticar" onclick="setTimeout(()=>location.reload(),0)">Próxima questão</a></div>';});
  }
  function renderLab(){
    const done=microDoneSet().size;
    const beginner=done<15, intermediate=done>=15&&done<40;
    const starter=beginner?'nome = input("Qual é seu nome? ")\\n# COMPLETE A LINHA ABAIXO\\nprint(____________________)':
      intermediate?'idade = int(input("Digite sua idade: "))\\n# COMPLETE AS DUAS LINHAS\\nif ____________________: \\n    ____________________':
      '';
    const task=beginner?'Complete apenas a linha que falta para mostrar uma saudação usando a variável nome.':
      intermediate?'Complete as duas linhas para verificar se a pessoa tem 18 anos ou mais e mostrar uma mensagem.':
      'Escreva todo o código sozinho. Crie um programa que receba dados do usuário, tome pelo menos uma decisão e mostre um resultado claro.';
    renderShell('<header class="page-header"><div><div class="eyebrow">Laboratório</div><h1>VS Code Simulator</h1><p class="muted"><strong>Você escreve o código.</strong> No início, complete 1 ou 2 linhas. Conforme avançar, o editor ficará vazio e você construirá a solução inteira.</p></div></header><section class="card"><h2>🎯 Sua tarefa</h2><p>'+esc(task)+'</p><p class="muted">Progresso usado para definir a dificuldade: '+done+' lições concluídas.</p></section><div class="vscode-lab"><div class="vscode-top"><span>● ● ●</span><strong>aula.py — Visual Studio Code</strong></div><div class="vscode-main"><aside><b>EXPLORER</b><span>▾ MEU-PROJETO</span><span>🐍 aula.py</span></aside><div class="editor"><div class="editor-tabs">aula.py ×</div><textarea id="game-code" spellcheck="false" placeholder="Escreva seu código aqui...">'+esc(starter)+'</textarea></div></div><div class="terminal-panel"><div><b>TERMINAL</b> <span>PROBLEMS OUTPUT</span></div><pre id="game-output">$ python aula.py\\nEscreva sua solução e clique em Executar.</pre></div><div class="lab-actions"><button id="run-code" class="btn success">▶ Executar meu código</button><button id="reset-code" class="btn ghost">↻ Reiniciar exercício</button><span class="muted">O laboratório não preenche a resposta por você.</span></div></div>');
    const ta=document.querySelector('#game-code'), out=document.querySelector('#game-output'), initial=ta.value;
    document.querySelector('#reset-code').onclick=()=>{ta.value=initial;out.textContent='$ python aula.py\\nEscreva sua solução e clique em Executar.'};
    document.querySelector('#run-code').onclick=()=>{
      const code=ta.value.trim();
      const incomplete=/_{3,}|COMPLETE/.test(code);
      if(!code||incomplete){out.textContent='$ python aula.py\\nAinda há uma parte para você completar. Escreva o código antes de executar.';return;}
      let notes=[];
      if(!/print\s*\(/.test(code)) notes.push('Dica: sua solução ainda não mostra um resultado com print().');
      if(!beginner&&!/input\s*\(/.test(code)) notes.push('Dica: tente receber um dado com input().');
      if(!beginner&&!intermediate&&!/if\s+.+:/.test(code)) notes.push('Dica: o desafio pede pelo menos uma decisão com if.');
      if(notes.length){out.textContent='$ python aula.py\\n'+notes.join('\\n');return;}
      state.xp+=2;save();out.textContent='$ python aula.py\\nCódigo enviado para teste. Boa: a solução foi escrita por você.\\n\\n+2 XP por praticar';
    };
  }
  
  function practicalSteps(x,i){
    const title=x[0], explanation=x[1], choices=x[3], correct=x[4];
    const right=choices[correct], token=(String(right).match(/[A-Za-z_][A-Za-z0-9_.]*/)||[String(right)])[0];
    const base=[{t:'learn',title,body:explanation},{t:'choice',q:x[2],a:choices,c:correct,why:explanation}];

    const qsets=[
      {q:'Você precisa usar '+title+' em um exercício novo. Antes de escrever a solução, o que deve identificar?',a:['O objetivo, os dados disponíveis e o resultado esperado','A maior quantidade possível de comandos','Um código pronto para copiar'],c:0,why:'Entender entradas, objetivo e saída evita programar sem direção.'},
      {q:'Uma solução com '+title+' funcionou uma vez. Como verificar se ela realmente está correta?',a:['Testar outros dados e comparar com resultados esperados','Executar apenas o mesmo caso novamente','Aumentar o tamanho do código'],c:0,why:'Casos diferentes revelam comportamentos que um único teste não mostra.'},
      {q:'Ao revisar um código que usa '+title+', qual sinal indica melhor que você compreendeu a solução?',a:['Você consegue explicar o papel de cada parte e prever o resultado','Você reconhece apenas o nome do comando','Você consegue copiar o código rapidamente'],c:0,why:'Explicar e prever o comportamento exige compreensão da lógica.'},
      {q:'Se a solução de '+title+' produz um resultado inesperado, qual investigação é mais útil?',a:['Localizar em qual etapa o valor deixa de ser o esperado','Trocar vários comandos ao mesmo tempo','Apagar tudo sem testar'],c:0,why:'Depurar é isolar a etapa em que o comportamento se desvia do esperado.'}
    ];
    base.push(qsets[i%4]);
    base.push(qsets[(i+1)%4]);

    if(i<15){
      base.push({t:'fill',q:'Agora sem alternativas: complete com o principal comando, operador ou estrutura desta lição.',before:'Resposta: ____',answer:token,hint:'Use o conceito central de '+title+'.'});
      base.push({t:'code',q:'Código guiado — '+title+': escreva somente uma linha curta aplicando o conceito. Não copie uma solução completa.',test:'',contains:''});
    }else if(i<40){
      base.push({t:'fill',q:'Recupere da memória o elemento principal usado em '+title+'.',before:'Resposta: ____',answer:token,hint:'Escreva apenas o elemento central.'});
      base.push({t:'code',q:'Código parcialmente guiado — '+title+': escreva duas ou três linhas para resolver uma situação diferente da pergunta anterior.',test:'',contains:''});
      base.push({t:'choice',q:'Ao adaptar '+title+' para outro problema, o que deve permanecer?',a:['A lógica necessária ao novo objetivo, não necessariamente o código literal','Todos os nomes e valores do exemplo anterior','Exatamente a mesma quantidade de linhas'],c:0,why:'O conceito é transferido; detalhes do exemplo podem e devem mudar.'});
    }else{
      base.push({t:'code',q:'Aplicação — '+title+': escreva sozinho uma pequena solução completa para um caso novo.',test:'',contains:''});
      base.push({t:'choice',q:'Duas soluções diferentes resolvem corretamente um problema com '+title+'. Qual comparação é mais útil?',a:['Clareza, correção e adequação ao problema','Qual tem mais linhas','Qual foi escrita primeiro'],c:0,why:'Soluções podem ser diferentes e ainda corretas; qualidade depende também de clareza e adequação.'});
      base.push({t:'code',q:'Depuração — '+title+': crie um exemplo, identifique um possível erro e escreva a versão corrigida.',test:'',contains:''});
      base.push({t:'code',q:'Transferência — '+title+': aplique o conceito em um contexto diferente do exercício anterior, escrevendo o código sem modelo pronto.',test:'',contains:''});
    }
    if((i+1)%5===0) base.push({t:'code',q:'Revisão acumulativa: combine '+title+' com um conceito das lições anteriores em uma solução escrita por você.',test:'',contains:''});
    if((i+1)%10===0) base.push({t:'code',q:'Desafio do bloco: escreva uma solução completa usando '+title+' e pelo menos dois conceitos anteriores. Teste mentalmente com dois conjuntos de dados.',test:'',contains:''});
    return base;
  }

  const generatedLessons=(window.DEVQUEST_TOPICS||[]).map((x,i)=>({id:i+1,title:x[0],icon:i<30?'🐍':i<50?'☕':i<54?'🌿':i<63?'🌐':i<69?'⚛️':i<77?'🔌':i<82?'🗄️':i<84?'🧩':i<86?'🌐':i<88?'🐧':i<90?'🚀':'🛡️',summary:x[1],steps:practicalSteps(x,i)}));
  const microLessons=[
    {id:1,title:'Pense como um programador',icon:'🧠',steps:[
      {t:'learn',title:'O que é lógica?',body:'Programar começa antes do código. Lógica é organizar passos claros para transformar uma entrada em um resultado.'},
      {t:'choice',q:'Qual sequência representa melhor um algoritmo?',a:['Resultado → problema → passos','Entrada → passos → saída','Código → computador → ideia'],c:1,why:'Um algoritmo recebe uma entrada, executa passos e produz uma saída.'},
      {t:'order',q:'Organize o raciocínio para calcular uma média:',items:['Mostrar o resultado','Somar as notas','Receber as notas','Dividir pela quantidade'],answer:['Receber as notas','Somar as notas','Dividir pela quantidade','Mostrar o resultado']},
      {t:'choice',q:'Antes de escrever Python, o mais importante é:',a:['Decorar comandos','Entender o problema e os passos','Instalar muitas extensões'],c:1,why:'A linguagem vem depois do raciocínio.'}
    ]},
    {id:2,title:'Seu primeiro Python',icon:'🐍',steps:[
      {t:'learn',title:'Dê uma instrução ao computador',body:'Em Python, print() envia uma informação para a tela. Strings são textos e ficam entre aspas.'},
      {t:'choice',q:'Qual código mostra Olá na tela?',a:['print("Olá")','input("Olá")','Olá.print()'],c:0,why:'print() é a função de saída que estamos usando.'},
      {t:'fill',q:'Complete o comando:',before:'____("Estou aprendendo Python!")',answer:'print',hint:'É a função usada para mostrar mensagens.'},
      {t:'code',q:'Escreva um print que mostre: Eu consigo programar!',test:'print',contains:'Eu consigo programar'}
    ]},
    {id:3,title:'Variáveis e dados',icon:'📦',steps:[
      {t:'learn',title:'Guarde informações',body:'Variáveis dão nomes aos valores. Exemplo: idade = 20. O sinal = faz atribuição.'},
      {t:'choice',q:'Em nome = "Ana", o que é nome?',a:['Uma variável','Um comando de repetição','Um erro'],c:0,why:'nome é o identificador que guarda o texto Ana.'},
      {t:'fill',q:'Complete para guardar 10 em pontos:',before:'pontos __ 10',answer:'=',hint:'Use o operador de atribuição.'},
      {t:'code',q:'Crie uma variável chamada linguagem com o valor "Python".',test:'var',contains:'linguagem'}
    ]},
    {id:4,title:'Decisões com if',icon:'🔀',steps:[
      {t:'learn',title:'Faça o programa decidir',body:'if significa “se”. Uma condição verdadeira permite executar um bloco de código.'},
      {t:'choice',q:'Qual palavra inicia uma condição em Python?',a:['when','if','case','check'],c:1,why:'Python usa if para decisões condicionais.'},
      {t:'fill',q:'Complete: __ idade >= 18:',before:'__ idade >= 18:',answer:'if',hint:'Pense em “se idade for maior ou igual a 18”.'},
      {t:'code',q:'Escreva uma condição usando if.',test:'if',contains:'if'}
    ]},
    {id:5,title:'Repetições',icon:'🔁',steps:[
      {t:'learn',title:'Repita sem copiar',body:'Laços evitam repetir código manualmente. for é útil para sequências e while repete enquanto uma condição for verdadeira.'},
      {t:'choice',q:'Para repetir algo 5 vezes, qual estrutura é uma boa escolha?',a:['for','if','import'],c:0,why:'for combina bem com uma quantidade conhecida de repetições.'},
      {t:'fill',q:'Complete: for i __ range(5):',before:'for i __ range(5):',answer:'in',hint:'Em Python percorremos uma sequência com “in”.'},
      {t:'code',q:'Crie um for usando range().',test:'for',contains:'range'}
    ]}
  ];
  if(generatedLessons.length) { microLessons.splice(0,microLessons.length,...generatedLessons); }
  function lessonProgress(){try{return JSON.parse(localStorage.getItem(MICRO_DONE_KEY)||'[]')}catch{return []}}
  function markMicroDone(id){const d=new Set(lessonProgress());d.add(id);localStorage.setItem(MICRO_DONE_KEY,JSON.stringify([...d]));state.xp+=30;state.level=1+Math.floor(state.xp/100);save();}
  function renderLearn(){
    const done=new Set(lessonProgress());
    renderShell('<header class="page-header"><div><div class="eyebrow">Microlições</div><h1>Aprender</h1><p class="muted">Lições curtas e práticas. No início você escolhe e ordena respostas; aos poucos passa a completar e escrever código sozinho.</p></div></header><div class="micro-grid">'+microLessons.map((l,i)=>{const locked=i>0&&!done.has(microLessons[i-1].id);return '<article class="micro-card '+(locked?'locked':'')+'"><span class="micro-icon">'+l.icon+'</span><div><small>Lição '+l.id+'</small><h3>'+esc(l.title)+'</h3><p>'+l.steps.length+' etapas · +30 XP</p></div>'+(locked?'<button class="btn ghost" disabled>🔒 Bloqueada</button>':'<a class="btn primary" href="#/micro/'+l.id+'">'+(done.has(l.id)?'Revisar':'Começar')+'</a>')+'</article>'}).join('')+'</div>');
  }
  function renderMicro(id,stepIndex=0){
    const lesson=microLessons.find(x=>x.id===id); if(!lesson){renderLearn();return}
    const safeIndex=Math.max(0,Math.min(Number(stepIndex)||0,lesson.steps.length-1));
    const s=lesson.steps[safeIndex], pct=Math.round(((safeIndex+1)/lesson.steps.length)*100);
    const study='<aside class="lesson-content card"><div class="eyebrow">Conteúdo da lição</div><h3>'+esc(lesson.title)+'</h3><p>'+esc(lesson.summary||lesson.steps[0]?.body||'Aprenda o conceito e aplique nas atividades.')+'</p><div class="lesson-content-grid"><div><strong>1. Entenda</strong><span>Leia o conceito e identifique para que ele serve.</span></div><div><strong>2. Observe</strong><span>Veja o problema e pense no resultado antes de responder.</span></div><div><strong>3. Aplique</strong><span>Resolva sem copiar e explique mentalmente sua escolha.</span></div><div><strong>4. Pratique</strong><span>Quando chegar ao código, escreva você mesmo.</span></div></div></aside>';
    let body='';
    if(s.t==='learn') body='<div class="micro-explain"><span class="big-icon">'+lesson.icon+'</span><h2>'+esc(s.title)+'</h2><p>'+esc(s.body)+'</p><button class="btn primary micro-next">Entendi, continuar</button></div>';
    if(s.t==='choice') body='<h2>'+esc(s.q)+'</h2><div class="quiz-options">'+s.a.map((a,i)=>'<button class="quiz-option micro-choice" data-i="'+i+'"><b>'+String.fromCharCode(65+i)+'</b>'+esc(a)+'</button>').join('')+'</div><div id="micro-feedback"></div>';
    if(s.t==='fill') body='<h2>'+esc(s.q)+'</h2><pre class="code-task">'+esc(s.before)+'</pre><input id="fill-answer" class="code-input" autocomplete="off" placeholder="Digite a parte que falta"><p class="muted">💡 '+esc(s.hint)+'</p><button class="btn primary check-fill">Verificar</button><div id="micro-feedback"></div>';
    if(s.t==='order') body='<h2>'+esc(s.q)+'</h2><p class="muted">Clique nos passos na ordem correta. Se mudar de ideia, clique em um item escolhido para devolvê-lo à lista.</p><div class="order-bank">'+s.items.map((x,i)=>'<button class="order-item" data-order-id="'+i+'">'+esc(x)+'</button>').join('')+'</div><div id="order-selected" class="order-selected"></div><div class="actions"><button class="btn secondary reset-order">↻ Recomeçar</button><button class="btn primary check-order">Verificar ordem</button></div><div id="micro-feedback"></div>';
    if(s.t==='code') body='<h2>'+esc(s.q)+'</h2><div class="mini-editor"><div>atividade.py</div><textarea id="micro-code" spellcheck="false"></textarea></div><button class="btn success check-code">▶ Executar teste</button><div id="micro-feedback"></div>';
    renderShell('<div class="micro-top"><a href="#/aprender">← Sair</a><div class="micro-bar"><span style="width:'+pct+'%"></span></div><strong>'+lesson.icon+' '+esc(lesson.title)+'</strong></div>'+study+'<section class="micro-stage">'+body+'</section>');
    const next=()=>{state.xp+=5;save();if(safeIndex+1<lesson.steps.length){const nextIndex=safeIndex+1;history.pushState(null,'','#/micro/'+id+'/'+nextIndex);renderMicro(id,nextIndex);window.scrollTo({top:0,behavior:'auto'});}else{markMicroDone(id);renderShell('<section class="lesson-win"><div>🏆</div><h1>Lição concluída!</h1><p>Você ganhou <strong>+30 XP</strong> e desbloqueou a próxima etapa.</p><a class="btn primary" href="#/trilha">Continuar trilha</a><a class="btn secondary" href="#/laboratorio">Praticar no VS Code</a></section>')}};
    const feedback=(ok,msg)=>{const el=document.querySelector('#micro-feedback');el.innerHTML='<div class="feedback '+(ok?'good':'bad')+'"><strong>'+(ok?'✓ Muito bem!':'✕ Tente novamente')+'</strong><p>'+esc(msg)+'</p>'+(ok?'<button class="btn primary continue-step">Continuar</button>':'')+'</div>';if(ok)el.querySelector('.continue-step').onclick=next;else{state.hearts=Math.max(0,state.hearts-1);save();}};
    const nb=document.querySelector('.micro-next');if(nb)nb.onclick=next;
    document.querySelectorAll('.micro-choice').forEach(b=>b.onclick=()=>{const ok=Number(b.dataset.i)===s.c;feedback(ok,ok?s.why:'Observe a explicação e tente outra opção.');});
    const cf=document.querySelector('.check-fill');if(cf)cf.onclick=()=>feedback(document.querySelector('#fill-answer').value.trim()===s.answer,s.hint);
    let selected=[];
    const orderButtons=[...document.querySelectorAll('.order-item')];
    const drawOrder=()=>{
      const chosen=document.querySelector('#order-selected'); if(!chosen)return;
      chosen.innerHTML=selected.map((idx,pos)=>'<button class="order-picked" data-pos="'+pos+'"><b>'+(pos+1)+'.</b> '+esc(s.items[idx])+' <span>×</span></button>').join('');
      orderButtons.forEach((b,idx)=>b.disabled=selected.includes(idx));
      chosen.querySelectorAll('.order-picked').forEach(b=>b.onclick=()=>{selected.splice(Number(b.dataset.pos),1);drawOrder();});
    };
    orderButtons.forEach((b,idx)=>b.onclick=()=>{if(!selected.includes(idx)){selected.push(idx);drawOrder();}});
    const resetOrder=()=>{selected=[];drawOrder();const el=document.querySelector('#micro-feedback');if(el)el.innerHTML='';};
    const ro=document.querySelector('.reset-order');if(ro)ro.onclick=resetOrder;
    const co=document.querySelector('.check-order');if(co)co.onclick=()=>{
      const expected=s.answer.map(answer=>s.items.indexOf(answer));
      const ok=selected.length===expected.length&&selected.every((v,n)=>v===expected[n]);
      if(ok){feedback(true,'Ordem correta.');return;}
      state.hearts=Math.max(0,state.hearts-1);save();
      const el=document.querySelector('#micro-feedback');
      el.innerHTML='<div class="feedback bad"><strong>✕ A sequência ainda não está correta</strong><p>Você pode retirar itens escolhidos ou recomeçar a lista e tentar outra ordem.</p><button class="btn secondary retry-order">↻ Reorganizar agora</button></div>';
      el.querySelector('.retry-order').onclick=resetOrder;
    };
    const cc=document.querySelector('.check-code');if(cc)cc.onclick=()=>{const v=document.querySelector('#micro-code').value;feedback(s.test==='' ? v.trim().length>=3 : (v.includes(s.test)&&v.includes(s.contains)),s.test===''?'Escreva um pequeno exemplo ou anotação antes de executar.':'Seu código precisa usar '+s.test+' e atender ao pedido da atividade.');};
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
  function route(){const parts=(location.hash.replace(/^#\/?/,'')||'inicio').split('/');const p=parts[0]; injectNav(); if(p==='trilha'){renderTrail();return true} if(p==='aprender'){renderLearn();return true} if(p==='micro'){renderMicro(Number(parts[1]),Number(parts[2])||0);return true} if(p==='praticar'){renderPractice();return true} if(p==='laboratorio'){renderLab();return true} if(p==='tutor'){renderTutor();return true} if(p==='desafios'){renderChallenges();return true} return false}
  window.addEventListener('hashchange',()=>setTimeout(route,0));
  function boot(){ injectNav(); if(location.hash==='#/inicio'||!location.hash){ location.hash='#/trilha'; setTimeout(route,0); } else route(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();