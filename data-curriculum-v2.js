(() => {
  const DATA = window.PDZ_DATA;

  // Abre espaço para Java (20 aulas) depois de Python sem perder o conteúdo existente.
  DATA.lessons.forEach((lesson) => {
    if (lesson.id >= 31) lesson.id += 20;
  });

  DATA.lessons.forEach((lesson) => {
    if (lesson.id >= 1 && lesson.id <= 20) lesson.module = 1;
    else if (lesson.id >= 21 && lesson.id <= 30) lesson.module = 2;
    else if (lesson.id >= 51 && lesson.id <= 55) lesson.module = 4;
    else if (lesson.id >= 56 && lesson.id <= 70) lesson.module = 5;
    else if (lesson.id >= 71 && lesson.id <= 80) lesson.module = 7;
    else if (lesson.id >= 81 && lesson.id <= 90) lesson.module = 8;
    else if (lesson.id >= 91 && lesson.id <= 100) lesson.module = 9;
    else if (lesson.id >= 101 && lesson.id <= 105) lesson.module = 10;
    else if (lesson.id >= 106 && lesson.id <= 115) lesson.module = 11;
    else if (lesson.id >= 116 && lesson.id <= 120) lesson.module = 12;
    else if (lesson.id >= 121 && lesson.id <= 130) lesson.module = 13;
    else if (lesson.id >= 131 && lesson.id <= 135) lesson.module = 14;
    else if (lesson.id >= 136 && lesson.id <= 140) lesson.module = 15;
  });

  DATA.modules = [
    { id: 1, title: 'Lógica de Programação + Python do Zero', lessons: '1–20', description: 'Base absoluta: lógica, algoritmos, pensamento computacional e fundamentos de Python 3 no VS Code.' },
    { id: 2, title: 'Python Intermediário e POO', lessons: '21–30', description: 'Funções, módulos, arquivos, JSON, exceções, orientação a objetos e organização de projetos Python.' },
    { id: 3, title: 'Java do Zero no VS Code', lessons: '31–50', description: 'Java como segunda linguagem: sintaxe, estruturas de controle, métodos, arrays, POO, coleções, exceções e projeto.' },
    { id: 4, title: 'Terminal, Git e GitHub', lessons: '51–55', description: 'Terminal integrado do VS Code, controle de versão, repositórios, branches, merge e fluxo com GitHub.' },
    { id: 5, title: 'Desenvolvimento Web: HTML, CSS e JavaScript', lessons: '56–70', description: 'Fundamentos do front-end e JavaScript no VS Code para construir interfaces web.' },
    { id: 6, title: 'ReactJS', lessons: '—', description: 'Etapa planejada para componentes, JSX, props, state, hooks, rotas, formulários e consumo de APIs.' },
    { id: 7, title: 'Internet, HTTP e APIs', lessons: '71–80', description: 'Cliente, servidor, HTTP, JSON, REST e fundamentos para conectar front-end e back-end.' },
    { id: 8, title: 'Back-end com Python e FastAPI', lessons: '81–90', description: 'APIs REST em Python com FastAPI, validação, rotas, CRUD, tratamento de erros e organização de projeto.' },
    { id: 9, title: 'Banco de Dados e SQL', lessons: '91–100', description: 'Modelagem relacional, SQL, PostgreSQL/MySQL, consultas, relacionamentos e integração com aplicações.' },
    { id: 10, title: 'Full Stack', lessons: '101–105', description: 'Integração entre front-end, API Python e banco de dados em aplicações completas.' },
    { id: 11, title: 'Redes de Computadores', lessons: '106–115', description: 'OSI, TCP/IP, IP, sub-redes, portas e protocolos essenciais para desenvolvimento e infraestrutura.' },
    { id: 12, title: 'Linux', lessons: '116–120', description: 'Sistema de arquivos, comandos, permissões, processos e uso do terminal em ambientes Linux.' },
    { id: 13, title: 'Deploy, Domínios e DNS', lessons: '121–130', description: 'Publicação de aplicações, servidores, hospedagem, domínio, DNS e funcionamento de produção.' },
    { id: 14, title: 'Segurança da Informação e Aplicações', lessons: '131–135', description: 'Princípios defensivos, autenticação, proteção de dados, vulnerabilidades comuns e boas práticas.' },
    { id: 15, title: 'Criptografia e Projeto Final', lessons: '136–140', description: 'Fundamentos de criptografia e construção do projeto final integrando toda a formação.' }
  ];
})();