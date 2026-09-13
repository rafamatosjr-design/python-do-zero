(() => {
  const module1 = window.PDZ_DATA.modules.find(module => module.id === 1);
  if (module1) {
    module1.title = 'Lógica e Python do Zero — VS Code';
    module1.description = 'Lógica de programação e fundamentos de Python 3 com prática direta no Visual Studio Code.';
  }

  const replacements = {
    1: {
      id: 1, module: 1, title: 'Lógica, programação e algoritmos', time: '50–60 min',
      learn: ['O que é programação', 'O que é algoritmo', 'Entrada, processamento e saída', 'Como transformar um problema em passos'],
      importance: 'Antes de decorar comandos, você precisa aprender a organizar uma solução em etapas que o computador consiga executar.',
      before: 'Nenhum conhecimento prévio é necessário.',
      explanation: 'Programar é criar instruções para resolver problemas. Um algoritmo é uma sequência organizada de passos. Em muitos programas podemos separar o raciocínio em entrada, processamento e saída. Primeiro entendemos o problema, depois organizamos a solução e só então escrevemos código.',
      everyday: 'Preparar café é um algoritmo: separar os itens, preparar, misturar quando necessário e servir. Se etapas importantes forem executadas fora de ordem, o resultado muda.',
      programming: 'Uma calculadora recebe números como entrada, realiza uma operação como processamento e mostra o resultado como saída.',
      code: 'print("Olá, mundo!")',
      lineByLine: 'Por enquanto, observe apenas que print() pede ao Python para mostrar uma informação na tela.',
      guided: 'No VS Code, crie uma pasta para o curso. Em um caderno ou comentário no código, escreva os passos de uma tarefa cotidiana e identifique entrada, processamento e saída.',
      exercise: 'Explique com suas palavras o que é algoritmo e identifique entrada, processamento e saída em uma calculadora.',
      challenge: 'Escreva um algoritmo de pelo menos seis passos para uma tarefa cotidiana.',
      findError: 'Sequência: 1) beber o café; 2) aquecer a água; 3) preparar o café. Reorganize os passos.',
      common: 'Pensar que algoritmo precisa ser código. Algoritmo é a lógica da solução; código é uma implementação.',
      summary: 'Programação transforma soluções em instruções. Algoritmos organizam passos. Entrada → processamento → saída ajuda a compreender programas.',
      task: 'Criar um algoritmo cotidiano e separar entrada, processamento e saída.',
      video: 'https://www.youtube.com/watch?v=M2Af7gkbbro&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&index=2',
      hint1: 'Escolha uma tarefa que você já saiba fazer.', hint2: 'Escreva um passo por linha.', solution: 'Exemplo: preparar um sanduíche → separar ingredientes → abrir o pão → colocar recheio → fechar → servir.'
    },
    2: {
      id: 2, module: 1, title: 'Seu primeiro algoritmo em Python', time: '60 min',
      learn: ['Algoritmo x programa', 'Execução sequencial', 'print()', 'Variáveis', 'Tipos básicos', 'Primeiro programa completo'],
      importance: 'Aqui a lógica começa a virar um programa real escrito diretamente em Python.',
      before: 'Você já sabe que um algoritmo é uma sequência lógica de passos.',
      explanation: 'Um algoritmo representa a ideia da solução. Um programa é a implementação dessa solução em uma linguagem. Em Python, as instruções normalmente são executadas de cima para baixo. Usaremos print() para mostrar informações e variáveis para guardar valores. Os primeiros tipos serão str, int, float e bool.',
      everyday: 'Imagine caixas etiquetadas: a etiqueta é o nome da variável e o conteúdo é o valor guardado.',
      programming: 'Problema: guardar informações de uma pessoa e exibi-las. Solução: criar variáveis e mostrar os valores.',
      code: 'nome = "Júlia"\nidade = 20\ncurso = "Python"\n\nprint("=== MEU PRIMEIRO PROGRAMA ===")\nprint(f"Nome: {nome}")\nprint(f"Idade: {idade}")\nprint(f"Curso: {curso}")',
      lineByLine: 'nome, idade e curso são variáveis. O sinal = atribui valores. Textos ficam entre aspas. print() mostra informações. Nas f-strings, o f permite inserir variáveis entre chaves.',
      guided: 'No VS Code, crie aula02.py, digite o código, salve e execute. Depois troque os valores e execute novamente.',
      exercise: 'Crie as variáveis nome, cidade e objetivo e mostre cada uma. Depois crie produto e preco e exiba os dois valores.',
      challenge: 'Crie uma ficha com pelo menos cinco variáveis e exiba tudo com f-strings.',
      findError: 'EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO\nprint("Olá, mundo!"',
      common: 'Esquecer aspas ou parênteses, confundir texto com variável e pensar que = é comparação.',
      summary: 'Algoritmo é a lógica; programa é a implementação. Variáveis guardam valores e print() mostra informações.',
      task: 'Criar aula02.py no VS Code com uma ficha pessoal de pelo menos cinco campos.',
      video: 'https://www.youtube.com/watch?v=M2Af7gkbbro&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&index=2',
      hint1: 'Crie uma variável por informação.', hint2: 'Use print(f"Campo: {variavel}").', solution: 'nome = "Júlia"\nidade = 20\ncidade = "Rio de Janeiro"\ncurso = "Python"\nnivel = "Iniciante"\nprint(f"Nome: {nome}")\nprint(f"Idade: {idade}")\nprint(f"Cidade: {cidade}")\nprint(f"Curso: {curso}")\nprint(f"Nível: {nivel}")'
    },
    3: {
      id: 3, module: 1, title: 'Preparando Python e VS Code', time: '50–60 min',
      learn: ['Python 3 e interpretador', 'Visual Studio Code', 'Arquivos .py', 'Terminal integrado', 'Executar um programa'],
      importance: 'O VS Code será o ambiente padrão de prática durante o curso.',
      before: 'Você já viu um primeiro programa em Python.',
      explanation: 'Python é a linguagem e o interpretador executa os arquivos. O Visual Studio Code é o editor usado para escrever e organizar o código. Arquivos Python normalmente terminam em .py. O terminal integrado permite executar o programa sem sair do editor.',
      everyday: 'O VS Code é sua mesa de trabalho, o arquivo .py guarda o código e o Python lê e executa as instruções.',
      programming: 'Fluxo padrão: abrir VS Code → abrir pasta do curso → criar .py → escrever → salvar → abrir terminal → executar.',
      code: 'python aula03.py',
      lineByLine: 'python chama o interpretador e aula03.py informa qual arquivo executar. Em alguns sistemas, use python3.',
      guided: 'Crie a pasta curso-python, abra no VS Code, crie aula03.py, escreva print("VS Code pronto!") e execute pelo terminal integrado.',
      exercise: 'Explique a função de Python, VS Code, arquivo .py e terminal.',
      challenge: 'Crie teste.py e faça aparecer três mensagens diferentes no terminal.',
      findError: 'O arquivo foi salvo como aula03.txt e o comando tenta executar aula03.py. Qual é o problema?',
      common: 'Salvar com extensão errada, abrir o terminal em outra pasta ou instalar apenas a extensão do VS Code sem ter o Python instalado.',
      summary: 'VS Code edita, .py guarda o código, terminal envia comandos e Python executa.',
      task: 'Deixar a pasta do curso organizada no VS Code.', video: 'https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6',
      hint1: 'Confira se o arquivo termina em .py.', hint2: 'Confira a pasta atual do terminal.', solution: 'Abra a pasta no VS Code, crie teste.py, salve e execute com python teste.py.'
    },
    4: {
      id: 4, module: 1, title: 'Saída de dados, strings e comentários', time: '50–60 min',
      learn: ['print()', 'Strings', 'Aspas simples e duplas', 'Comentários com #', 'Erros de sintaxe'],
      importance: 'Você aprende a controlar o que o programa mostra e a reconhecer erros simples.',
      before: 'Tenha o VS Code aberto na pasta do curso.',
      explanation: 'print() exibe informações. Textos são strings e ficam entre aspas. Comentários começam com # e não são executados. Sintaxe é o conjunto de regras de escrita da linguagem.',
      everyday: 'Comentários são anotações para explicar o código sem alterar sua execução.',
      programming: 'Podemos usar vários print() para montar uma pequena apresentação.',
      code: '# Minha apresentação\nprint("Olá!")\nprint(\'Estou estudando Python\')\nprint("Praticando no VS Code")',
      lineByLine: 'A primeira linha é comentário. As seguintes exibem textos. Aspas simples e duplas podem delimitar strings.',
      guided: 'Crie aula04.py no VS Code e faça uma apresentação com quatro mensagens e dois comentários.',
      exercise: 'Escreva três print() e depois retire uma aspa de propósito. Leia o erro e corrija.',
      challenge: 'Monte uma tela de boas-vindas usando somente print(), strings e comentários.',
      findError: 'EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO\nprint("Olá)',
      common: 'Não fechar aspas ou parênteses.',
      summary: 'print() gera saída, strings representam texto, comentários começam com # e a sintaxe precisa estar correta.',
      task: 'Criar aula04.py com uma apresentação em várias linhas.', video: 'https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6',
      hint1: 'Use um print() por linha.', hint2: 'Adicione comentários para organizar.', solution: '# Cabeçalho\nprint("Bem-vindo")\n# Objetivo\nprint("Estou aprendendo Python no VS Code")'
    },
    5: {
      id: 5, module: 1, title: 'Variáveis e tipos de dados', time: '50–60 min',
      learn: ['Variáveis', 'Atribuição', 'str, int, float e bool', 'type()', 'Boas práticas de nomes'],
      importance: 'Variáveis permitem guardar informações para reutilizá-las e modificá-las.',
      before: 'Você já sabe usar print() e strings.',
      explanation: 'Uma variável é um nome associado a um valor. Em Python, = atribui valor. str representa texto, int inteiros, float decimais e bool verdadeiro ou falso. type() permite observar o tipo.',
      everyday: 'É como usar caixas etiquetadas para guardar dados diferentes.',
      programming: 'Um programa pode guardar nome, idade, altura e uma informação booleana ao mesmo tempo.',
      code: 'nome = "Ana"\nidade = 20\naltura = 1.65\nestudando = True\n\nprint(type(nome))\nprint(type(idade))\nprint(type(altura))\nprint(type(estudando))',
      lineByLine: 'Cada variável recebe um valor. As aspas indicam texto. type() informa o tipo identificado pelo Python.',
      guided: 'No VS Code, crie aula05.py com uma variável de cada tipo e confira com type().',
      exercise: 'Explique a diferença entre print("nome") e print(nome). Classifique "10", 10, 10.0 e True.',
      challenge: 'Crie uma ficha com cinco variáveis de tipos diferentes.',
      findError: 'Afirmação: “O valor \"15\" é inteiro porque contém números.” Corrija.',
      common: 'Confundir números entre aspas com valores numéricos.',
      summary: 'Variáveis guardam valores. = faz atribuição. str, int, float e bool são tipos fundamentais.',
      task: 'Criar aula05.py e testar pelo menos seis variáveis.', video: null,
      hint1: 'Observe se há aspas.', hint2: 'Use type() para confirmar.', solution: '"10" é str, 10 é int, 10.0 é float e True é bool.'
    },
    6: {
      id: 6, module: 1, title: 'Entrada de dados com input()', time: '50–60 min',
      learn: ['input()', 'int()', 'float()', 'f-strings', 'Programas interativos'],
      importance: 'Com input(), o programa começa a interagir com quem está usando.',
      before: 'Você conhece variáveis e tipos.',
      explanation: 'input() recebe algo digitado pelo usuário e retorna texto. Para realizar cálculos, podemos converter com int() ou float(). F-strings inserem variáveis dentro de textos.',
      everyday: 'É como preencher um formulário: primeiro os dados entram; depois o sistema os trata.',
      programming: 'Podemos perguntar nome e idade e gerar uma resposta personalizada.',
      code: 'nome = input("Digite seu nome: ")\nidade = int(input("Digite sua idade: "))\nprint(f"Olá, {nome}! Você tem {idade} anos.")',
      lineByLine: 'O primeiro input() retorna texto. O segundo é convertido para int. A f-string usa os valores entre chaves.',
      guided: 'Crie aula06.py no VS Code e faça um cadastro simples com nome, cidade e idade.',
      exercise: 'Peça dois números inteiros e mostre a soma.',
      challenge: 'Peça nome de produto, preço e quantidade e mostre os dados em uma frase.',
      findError: 'EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO\nidade = input("Idade: ")\nprint(idade + 1)',
      common: 'Esquecer que input() retorna str.',
      summary: 'input() recebe texto; int() e float() convertem; f-strings ajudam a montar mensagens.',
      task: 'Criar aula06.py com um pequeno cadastro.', video: null,
      hint1: 'Converta entradas numéricas.', hint2: 'Use int() para inteiros e float() para decimais.', solution: 'n1 = int(input("Primeiro número: "))\nn2 = int(input("Segundo número: "))\nprint(f"Soma: {n1 + n2}")'
    },
    7: {
      id: 7, module: 1, title: 'Operadores aritméticos', time: '50–60 min',
      learn: ['+', '-', '*', '/', '//', '%', '**', 'Precedência'],
      importance: 'Operadores permitem transformar dados e construir cálculos.',
      before: 'Você já recebe e converte números.',
      explanation: 'Python possui operadores para soma, subtração, multiplicação, divisão, divisão inteira, resto e potência. Parênteses ajudam a controlar a ordem dos cálculos.',
      everyday: 'Calcular compras, médias, descontos e troco depende de operações aritméticas.',
      programming: 'Podemos receber dois números e calcular resultados diferentes.',
      code: 'a = 10\nb = 3\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(a ** 2)',
      lineByLine: '+ soma; - subtrai; * multiplica; / divide; // faz divisão inteira; % retorna o resto; ** calcula potência.',
      guided: 'Crie aula07.py no VS Code e teste todos os operadores com valores diferentes.',
      exercise: 'Calcule 2 + 3 * 4 e depois (2 + 3) * 4.',
      challenge: 'Crie uma calculadora que receba dois números e mostre quatro operações.',
      findError: 'Uma pessoa usa ^ esperando potência. Qual operador Python deve usar?',
      common: 'Confundir / com // e esquecer precedência.',
      summary: 'Operadores aritméticos transformam números e parênteses ajudam a controlar a ordem.',
      task: 'Criar aula07.py com uma calculadora básica.', video: null,
      hint1: 'Multiplicação é avaliada antes de soma.', hint2: 'Use ** para potência.', solution: '2 + 3 * 4 = 14; (2 + 3) * 4 = 20.'
    },
    8: {
      id: 8, module: 1, title: 'Manipulação de textos', time: '50–60 min',
      learn: ['len()', 'upper()', 'lower()', 'strip()', 'replace()', 'find()', 'Operações com strings'],
      importance: 'Grande parte dos programas precisa limpar, verificar e transformar textos.',
      before: 'Você já conhece strings, variáveis e input().',
      explanation: 'Strings possuem funções e métodos úteis. len() conta caracteres; upper() e lower() alteram caixa; strip() remove espaços das extremidades; replace() substitui trechos; find() procura uma ocorrência.',
      everyday: 'Formulários frequentemente precisam remover espaços extras ou padronizar textos antes de salvar.',
      programming: 'Podemos receber um nome e mostrar versões tratadas.',
      code: 'nome = input("Nome: ").strip()\nprint(nome.upper())\nprint(nome.lower())\nprint(len(nome))\nprint(nome.replace("a", "@"))',
      lineByLine: 'strip() remove espaços laterais. upper() e lower() mudam a caixa. len() conta caracteres. replace() cria uma nova string com substituições.',
      guided: 'Crie aula08.py no VS Code e teste os métodos com seu nome e uma frase.',
      exercise: 'Leia uma frase e mostre em maiúsculas, minúsculas e a quantidade de caracteres.',
      challenge: 'Receba um nome completo e mostre uma versão sem espaços nas extremidades e em formato de título.',
      findError: 'Uma pessoa espera que nome.upper() altere a variável nome sem fazer nova atribuição. Explique.',
      common: 'Esquecer que strings são imutáveis e que muitos métodos retornam uma nova string.',
      summary: 'Métodos de string ajudam a limpar, procurar e transformar textos.',
      task: 'Criar aula08.py com cinco transformações de texto.', video: null,
      hint1: 'Teste um método por vez.', hint2: 'Guarde o resultado em uma variável quando precisar reutilizá-lo.', solution: 'frase = input("Frase: ").strip()\nprint(frase.upper())\nprint(frase.lower())\nprint(len(frase))'
    },
    9: {
      id: 9, module: 1, title: 'Módulos e biblioteca padrão', time: '50–60 min',
      learn: ['import', 'from ... import ...', 'math', 'random', 'Biblioteca padrão'],
      importance: 'Nem todo recurso precisa ser escrito do zero. Python já oferece módulos prontos.',
      before: 'Você conhece variáveis, entrada e operadores.',
      explanation: 'Módulos agrupam funcionalidades reutilizáveis. import carrega um módulo; from permite importar partes específicas. math oferece funções matemáticas e random permite gerar escolhas e números pseudoaleatórios.',
      everyday: 'É como usar uma caixa de ferramentas pronta em vez de fabricar cada ferramenta antes de começar o trabalho.',
      programming: 'Podemos usar math.sqrt() para raiz quadrada e random.randint() para um inteiro aleatório.',
      code: 'import math\nimport random\n\nnumero = 25\nprint(math.sqrt(numero))\nprint(random.randint(1, 10))',
      lineByLine: 'As duas primeiras linhas importam módulos. math.sqrt() calcula raiz. random.randint(1, 10) sorteia um inteiro entre 1 e 10.',
      guided: 'Crie aula09.py no VS Code e teste math e random. Execute várias vezes para observar o sorteio.',
      exercise: 'Receba um número e mostre sua raiz quadrada usando math.',
      challenge: 'Crie um pequeno sorteio entre quatro nomes usando random.choice().',
      findError: 'O código chama math.sqrt() sem executar import math. O que falta?',
      common: 'Esquecer de importar o módulo ou confundir nome do módulo com nome da função.',
      summary: 'Módulos adicionam ferramentas prontas ao programa por meio de importações.',
      task: 'Criar aula09.py com um cálculo matemático e um sorteio.', video: null,
      hint1: 'Importe antes de usar.', hint2: 'Para escolher um item de uma lista, pesquise random.choice().', solution: 'import random\nnomes = ["Ana", "Bia", "Caio", "Davi"]\nprint(random.choice(nomes))'
    },
    10: {
      id: 10, module: 1, title: 'Condições simples com if', time: '50–60 min',
      learn: ['Comparações', 'Booleanos', 'if', 'Indentação', 'Fluxo de decisão'],
      importance: 'Condições fazem o programa tomar decisões com base nos dados.',
      before: 'Você já sabe receber dados, calcular e comparar valores.',
      explanation: 'Uma comparação produz True ou False. if executa um bloco somente quando sua condição é verdadeira. Em Python, a indentação define o bloco.',
      everyday: 'Se estiver chovendo, leve guarda-chuva. A ação depende de uma condição.',
      programming: 'Podemos verificar se uma pessoa tem 18 anos ou mais.',
      code: 'idade = int(input("Digite sua idade: "))\n\nif idade >= 18:\n    print("Maior de idade")',
      lineByLine: 'A entrada é convertida para int. idade >= 18 produz um valor booleano. Se for True, a linha indentada é executada.',
      guided: 'Crie aula10.py no VS Code e teste o programa com idades diferentes.',
      exercise: 'Receba um número e mostre uma mensagem apenas se ele for positivo.',
      challenge: 'Receba uma nota e mostre “Aprovado” apenas quando ela for maior ou igual a 7.',
      findError: 'EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO\nif idade >= 18:\nprint("Maior de idade")',
      common: 'Esquecer os dois-pontos ou errar a indentação.',
      summary: 'if executa um bloco quando a condição é verdadeira. Comparações produzem booleanos.',
      task: 'Criar aula10.py com três exemplos de condições simples.', video: null,
      hint1: 'Escreva primeiro a comparação.', hint2: 'Indente a ação com quatro espaços.', solution: 'numero = int(input("Número: "))\nif numero > 0:\n    print("Número positivo")'
    }
  };

  window.PDZ_DATA.lessons = window.PDZ_DATA.lessons.map(lesson => replacements[lesson.id] || lesson);

  window.PDZ_DATA.lessons.forEach(lesson => {
    if (lesson.module === 1 && lesson.id >= 11 && lesson.id <= 20) {
      if (!lesson.guided.includes('VS Code')) {
        lesson.guided = `No VS Code, crie aula${String(lesson.id).padStart(2, '0')}.py. ${lesson.guided}`;
      }
      lesson.before = `${lesson.before} Use o VS Code como ambiente padrão para escrever e executar o código.`;
    }
  });
})();