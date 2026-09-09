# MÓDULO 03 — DESENVOLVIMENTO FRONT-END

## Identificação

- Módulo: 3
- Aulas: 36–50
- Nível: iniciante em desenvolvimento web
- Tecnologias: HTML, CSS e JavaScript
- Tempo médio: 50–60 minutos por aula

Este documento define o conteúdo pedagógico detalhado do Módulo 3.

Antes de implementar qualquer aula deste módulo, o agente deve ler:

1. `docs/regras-do-app.md`
2. `docs/curriculo.md`
3. `docs/modulo-03.md`

Não antecipar conteúdos do Módulo 4.

---

# OBJETIVO DO MÓDULO

Ao final deste módulo, o estudante deverá conseguir:

- compreender como navegador, página, site e aplicação web se relacionam;
- diferenciar estrutura, apresentação e interatividade na web;
- criar documentos HTML bem estruturados;
- usar textos, listas, links, imagens e texto alternativo;
- aplicar HTML semântico com foco em acessibilidade;
- criar formulários acessíveis;
- compreender seletores, propriedades, valores e cascade em CSS;
- aplicar box model, tipografia, cores e unidades;
- construir layouts com Flexbox e Grid;
- criar interfaces responsivas com abordagem mobile-first;
- compreender as diferenças iniciais entre Python e JavaScript;
- manipular elementos do DOM;
- responder a eventos do usuário;
- validar formulários no navegador sem confundir validação com segurança;
- construir um gerenciador de tarefas no navegador usando apenas recursos estudados.

---

# FORMATO DAS AULAS

Sempre que aplicável, cada aula deve apresentar:

1. O que você vai aprender
2. Por que isso é importante
3. Antes de começar
4. Explicação
5. Exemplo cotidiano
6. Exemplo em programação
7. Código
8. Explicação linha por linha
9. Prática guiada
10. Agora é sua vez
11. Exercícios
12. Desafio
13. Encontre o erro
14. Erros comuns
15. Resumo
16. Checklist
17. Tarefa
18. Vídeo complementar
19. Referências

Para exercícios com solução:

`Ver uma dica → Ver segunda dica → Ver solução comentada`

A solução permanece escondida inicialmente.

Regras adicionais:

- explicar todo termo novo antes de utilizá-lo como conhecimento presumido;
- não tratar HTML como linguagem de programação;
- não apresentar CSS como linguagem de programação;
- JavaScript é a linguagem de programação usada no navegador neste módulo;
- exemplos propositalmente errados devem ser marcados como `EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO`;
- acessibilidade deve aparecer integrada às práticas, e não como detalhe opcional;
- não armazenar segredos em `localStorage`;
- vídeos são complementares e não substituem a aula.

---

# BLOCO 1 — FUNDAMENTOS DE HTML

# AULA 36 — COMO FUNCIONA UMA PÁGINA WEB

## Ensinar

- navegador;
- página web;
- site;
- aplicação web;
- front-end;
- HTML como estrutura;
- CSS como apresentação;
- JavaScript como interatividade.

## Ideia central

Uma interface web combina tecnologias com papéis diferentes: HTML estrutura o conteúdo, CSS controla a apresentação e JavaScript adiciona comportamento e interatividade.

## Exemplo

Comparar uma página simples com um documento estruturado: títulos, parágrafos e botões existem no HTML; sua aparência pode ser definida no CSS; a ação do botão pode ser controlada pelo JavaScript.

## Regra conceitual

Não dizer que HTML ou CSS são linguagens de programação.

---

# AULA 37 — ESTRUTURA DE UM DOCUMENTO HTML

## Ensinar

- `<!DOCTYPE html>`;
- `<html>`;
- `<head>`;
- `<meta>`;
- `<title>`;
- `<body>`;
- tag;
- elemento;
- atributo.

## Exemplo base

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Minha primeira página</title>
</head>
<body>
  <h1>Olá, web!</h1>
</body>
</html>
```

Explicar o papel de cada parte e a importância de `lang`, `charset` e `viewport`.

---

# AULA 38 — TEXTOS, LISTAS, LINKS E IMAGENS

## Ensinar

- headings `h1` a `h6`;
- parágrafos;
- listas ordenadas e não ordenadas;
- links com `a`;
- imagens com `img`;
- atributo `alt`.

## Regra de acessibilidade

O texto alternativo deve comunicar a informação relevante da imagem. Quando a imagem é decorativa, explicar o uso de `alt=""` quando apropriado.

## Regra estrutural

Usar headings por hierarquia do conteúdo, não apenas por tamanho visual.

---

# AULA 39 — HTML SEMÂNTICO

## Ensinar

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `aside`;
- `footer`;
- acessibilidade;
- SEO introdutório.

## Ideia central

Elementos semânticos ajudam a comunicar o papel das partes da página para pessoas, navegadores e tecnologias assistivas.

## Regra conceitual

Não prometer que usar HTML semântico sozinho “garante SEO”. Explicar apenas que a estrutura semântica pode contribuir para compreensão e organização do conteúdo.

---

# AULA 40 — FORMULÁRIOS HTML

## Ensinar

- `form`;
- `label`;
- `input`;
- `select`;
- `textarea`;
- `button`;
- associação entre `label` e campo;
- `placeholder` não substitui `label`.

## Exemplo base

```html
<form>
  <label for="nome">Nome</label>
  <input id="nome" name="nome" type="text">

  <label for="curso">Curso</label>
  <select id="curso" name="curso">
    <option>Python</option>
    <option>Front-end</option>
  </select>

  <label for="mensagem">Mensagem</label>
  <textarea id="mensagem" name="mensagem"></textarea>

  <button type="submit">Enviar</button>
</form>
```

## Checkpoint 1 — Aulas 36 a 40

Revisar navegador, página, site, front-end, papéis de HTML/CSS/JavaScript, estrutura HTML, headings, listas, links, imagens, `alt`, semântica e formulários acessíveis.

**Projeto do bloco:** página de perfil/estudo em HTML contendo estrutura semântica, texto, lista, link, imagem com `alt` adequado e formulário acessível.

---

# BLOCO 2 — CSS E LAYOUT

# AULA 41 — INTRODUÇÃO AO CSS

## Ensinar

- seletor;
- propriedade;
- valor;
- classe;
- ID;
- cascade;
- stylesheet externo.

## Exemplo

Criar `styles.css`, vinculá-lo com `<link rel="stylesheet" href="styles.css">` e aplicar estilos simples a títulos, parágrafos e classes.

---

# AULA 42 — BOX MODEL

## Ensinar

- content;
- padding;
- border;
- margin;
- largura e altura;
- `box-sizing: border-box`.

## Ideia central

Todo elemento renderizado pode ser entendido como uma caixa com conteúdo, espaçamento interno, borda e espaçamento externo.

---

# AULA 43 — TIPOGRAFIA, CORES E UNIDADES

## Ensinar

- família de fontes;
- tamanho e altura de linha;
- cores;
- contraste e legibilidade;
- `px`;
- `%`;
- `rem`;
- `vh`;
- `vw`.

## Regra

Não apresentar uma única unidade como “sempre melhor”. Explicar contexto e uso.

---

# AULA 44 — FLEXBOX E GRID

## Ensinar

- Flexbox;
- eixo principal e transversal;
- alinhamento e distribuição;
- Grid;
- linhas e colunas;
- diferença geral entre as ferramentas.

## Regra conceitual

Apresentar Flexbox como ferramenta principalmente unidimensional e Grid como ferramenta principalmente bidimensional, sem transformá-las em regras absolutas.

---

# AULA 45 — RESPONSIVIDADE

## Ensinar

- viewport;
- largura flexível;
- `max-width`;
- media queries;
- abordagem mobile-first.

## Projeto do bloco

Transformar a página criada nas Aulas 36–40 em uma interface visualmente organizada e responsiva usando CSS.

## Checkpoint 2 — Aulas 41 a 45

Revisar seletores, cascade, box model, tipografia, cores, unidades, Flexbox, Grid e responsividade.

---

# BLOCO 3 — JAVASCRIPT NO NAVEGADOR

# AULA 46 — JAVASCRIPT PARA QUEM CONHECE PYTHON

## Ensinar

- JavaScript no navegador;
- `let` e `const`;
- tipos básicos;
- arrays;
- objetos;
- condições;
- loops;
- funções;
- diferenças iniciais entre Python e JavaScript.

## Regra

Não usar `var` como abordagem principal para iniciante. Pode ser citado apenas como sintaxe histórica/legada quando necessário.

---

# AULA 47 — DOM

## Ensinar

- Document Object Model;
- `document`;
- elementos;
- `querySelector`;
- `textContent`.

## Exemplo

Selecionar um título e alterar seu texto a partir do JavaScript.

---

# AULA 48 — EVENTOS

## Ensinar

- `click`;
- `submit`;
- `input`;
- `addEventListener`;
- callback introdutório.

## Exemplo

Responder ao clique de um botão sem usar atributos HTML de evento como abordagem principal.

---

# AULA 49 — FORMULÁRIOS E VALIDAÇÃO

## Ensinar

- leitura de campos;
- `value`;
- `trim()`;
- `preventDefault()`;
- validação no navegador;
- mensagens de erro compreensíveis.

## Regra de segurança

Validação front-end melhora experiência, mas não é mecanismo de segurança suficiente. Validação e autorização do lado do servidor serão estudadas posteriormente.

---

# AULA 50 — PROJETO FRONT-END

## Projeto

**Gerenciador de tarefas no navegador**.

Requisitos:

- criar tarefas;
- listar tarefas;
- editar tarefas;
- concluir tarefas;
- excluir tarefas;
- filtrar tarefas;
- usar HTML, CSS e JavaScript estudados;
- usar `localStorage` apenas para persistência local do exercício.

## Regra sobre `localStorage`

Explicar que `localStorage`:

- guarda dados no navegador daquele contexto;
- não é banco de dados de servidor;
- não deve ser usado para guardar segredos, senhas ou tokens sensíveis;
- pode ser limpo pelo usuário ou pelo navegador.

## Checkpoint final do Módulo 3

Ao terminar a Aula 50, o estudante deve conseguir marcar que:

- [ ] sei explicar o papel de HTML, CSS e JavaScript;
- [ ] consigo criar um documento HTML válido e organizado;
- [ ] uso headings por hierarquia;
- [ ] sei criar links, listas e imagens com `alt` adequado;
- [ ] conheço elementos semânticos principais;
- [ ] consigo criar formulário com `label` associado aos campos;
- [ ] entendo seletores e cascade em CSS;
- [ ] entendo o box model;
- [ ] consigo criar layout com Flexbox e Grid em nível introdutório;
- [ ] consigo tornar uma interface responsiva;
- [ ] reconheço diferenças iniciais entre Python e JavaScript;
- [ ] consigo selecionar e alterar elementos com DOM;
- [ ] consigo responder a eventos com `addEventListener`;
- [ ] entendo por que validação front-end não substitui segurança no servidor;
- [ ] concluí o projeto do módulo sem armazenar segredos em `localStorage`.

---

# VÍDEOS COMPLEMENTARES VALIDADOS

- HTML/CSS: `https://www.youtube.com/watch?v=jgQjeqGRdgA`
- JavaScript: `https://www.youtube.com/watch?v=vEwPnjqWQ-g`

Não inventar outros vídeos. Quando não houver vídeo selecionado para uma aula, mostrar:

“Não há vídeo complementar selecionado para esta aula.”

---

# REGRAS DE IMPLEMENTAÇÃO NO APP

Para as Aulas 36–50:

- manter a mesma estrutura visual e pedagógica dos módulos anteriores;
- manter dicas e soluções escondidas inicialmente;
- incluir botão de aula anterior e próxima;
- permitir marcar aula como concluída explicitamente;
- abrir a aula não pode alterar progresso;
- incluir tarefa por aula;
- integrar cada aula com a área Obsidian/Markdown;
- usar somente vídeos validados na documentação;
- não expor nem solicitar credenciais reais;
- não antecipar HTTP, APIs, FastAPI ou banco de dados;
- não modificar conteúdos pedagógicos dos Módulos 1, 2 ou 4–12 durante esta implementação.
