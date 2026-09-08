# PYTHON DO ZERO — CURRÍCULO OFICIAL

## 1. Sobre o curso

**Nome:** Python do Zero  
**Nível inicial:** absoluto iniciante  
**Total:** 120 aulas  
**Duração planejada:** 24 semanas  
**Ritmo sugerido:** 5 aulas por semana  
**Tempo médio:** aproximadamente 1 hora por aula

Este arquivo define a ordem oficial do curso.

Os agentes de IA que trabalham neste projeto NÃO devem:

- alterar a numeração das aulas;
- mudar uma aula de módulo sem autorização;
- substituir tecnologias por outras;
- remover conteúdos;
- antecipar assuntos avançados;
- inventar novos módulos;
- reorganizar o currículo por conta própria.

O conteúdo detalhado de cada módulo será definido nos arquivos:

`modulo-01.md`  
`modulo-02.md`  
`modulo-03.md`  
...  
`modulo-12.md`

---

# TRILHA DE APRENDIZAGEM

A progressão geral é:

Fundamentos
↓
Python
↓
Lógica de programação
↓
Python intermediário
↓
Terminal
↓
Git e GitHub
↓
HTML
↓
CSS
↓
JavaScript
↓
Internet e HTTP
↓
APIs
↓
FastAPI
↓
SQL
↓
PostgreSQL
↓
Full Stack
↓
Redes
↓
Linux
↓
Deploy
↓
Domínios e DNS
↓
Segurança
↓
Criptografia
↓
Projeto Full Stack Final

---

# MÓDULO 1
# FUNDAMENTOS DE PROGRAMAÇÃO E PYTHON

**Aulas:** 1–20

Objetivo:

Construir a base necessária para que uma pessoa que nunca programou consiga compreender os princípios da programação e criar pequenos programas em Python.

## Semana 1 — Primeiros conceitos

### Aula 1 — O que é programação?

Conteúdos principais:

- computador;
- hardware;
- software;
- programa;
- programação;
- código-fonte;
- linguagem de programação;
- algoritmo;
- entrada;
- processamento;
- saída.

### Aula 2 — Como o computador executa um programa

Conteúdos:

- CPU;
- memória RAM;
- armazenamento;
- sistema operacional;
- programa;
- processo;
- instrução;
- interpretador.

### Aula 3 — Preparando o Python

Conteúdos:

- Python;
- interpretador;
- VS Code;
- arquivo `.py`;
- terminal;
- execução de um programa.

### Aula 4 — Primeiro programa em Python

Conteúdos:

- `print()`;
- strings;
- aspas;
- comentários;
- sintaxe inicial;
- erros de sintaxe básicos.

### Aula 5 — Algoritmos e pensamento computacional

Conteúdos:

- decomposição de problemas;
- sequência;
- entrada;
- processamento;
- saída;
- pseudocódigo;
- resolução de problemas.

**Projeto da semana:** algoritmo para cálculo de média escolar.

---

## Semana 2 — Dados e operações

### Aula 6 — Variáveis

Conteúdos:

- variável;
- valor;
- atribuição;
- nomes de variáveis;
- boas práticas.

### Aula 7 — Tipos de dados

Conteúdos:

- `str`;
- `int`;
- `float`;
- `bool`;
- `None`;
- `type()`.

### Aula 8 — Entrada de dados

Conteúdos:

- `input()`;
- conversão de tipos;
- `int()`;
- `float()`;
- f-strings.

### Aula 9 — Operadores

Conteúdos:

- adição;
- subtração;
- multiplicação;
- divisão;
- divisão inteira;
- resto;
- potência;
- operadores de comparação;
- precedência básica.

### Aula 10 — Operadores lógicos

Conteúdos:

- `and`;
- `or`;
- `not`;
- expressões booleanas.

**Projeto da semana:** calculadora básica e calculadora de desconto.

---

## Semana 3 — Decisões e repetições

### Aula 11 — Condições com `if`

Conteúdos:

- condição;
- expressão booleana;
- `if`;
- blocos;
- indentação.

### Aula 12 — `elif` e `else`

Conteúdos:

- decisões alternativas;
- múltiplas condições;
- fluxo condicional.

### Aula 13 — Repetições com `for`

Conteúdos:

- repetição;
- `for`;
- `range()`;
- contador;
- iteração básica.

### Aula 14 — Repetições com `while`

Conteúdos:

- `while`;
- condição de repetição;
- contador;
- atualização de variável;
- loop infinito.

### Aula 15 — Desafio de lógica

Construção de uma:

**Calculadora com menu**

Utilizando:

- variáveis;
- `input`;
- operadores;
- `if`;
- `elif`;
- `else`;
- `while`.

---

## Semana 4 — Estruturas de dados e funções

### Aula 16 — Listas

Conteúdos:

- lista;
- elemento;
- índice;
- `append()`;
- `remove()`;
- `len()`;
- percorrer listas.

### Aula 17 — Tuplas e conjuntos

Conteúdos:

- tuple;
- imutabilidade;
- set;
- elementos únicos;
- diferenças básicas entre lista, tupla e conjunto.

### Aula 18 — Dicionários

Conteúdos:

- chave;
- valor;
- acesso;
- alteração;
- inclusão;
- lista de dicionários.

### Aula 19 — Funções

Conteúdos:

- `def`;
- função;
- parâmetro;
- argumento;
- `return`;
- escopo introdutório;
- diferença entre `print()` e `return`.

### Aula 20 — Projeto do Módulo 1

**Sistema Escolar no Terminal**

Funções:

- cadastrar aluno;
- listar alunos;
- buscar aluno;
- adicionar notas;
- calcular média;
- excluir aluno;
- menu interativo.

Tecnologias:

Python puro.

Não utilizar banco de dados, arquivos ou classes neste projeto.

---

# MÓDULO 2
# PYTHON INTERMEDIÁRIO, ARQUIVOS, POO, TERMINAL E GIT

**Aulas:** 21–35

Objetivo:

Aprender a organizar programas maiores, salvar dados, lidar com erros, compreender Programação Orientada a Objetos e começar a utilizar ferramentas profissionais de desenvolvimento.

---

## Semana 5 — Organização e persistência

### Aula 21 — Organizando programas com funções

Conteúdos:

- divisão de problemas;
- responsabilidade de funções;
- reutilização;
- organização do código;
- refatoração básica.

### Aula 22 — Módulos e `import`

Conteúdos:

- módulo;
- `import`;
- biblioteca padrão;
- criação de módulos próprios;
- organização em múltiplos arquivos.

### Aula 23 — Arquivos

Conteúdos:

- abrir arquivos;
- leitura;
- escrita;
- anexar conteúdo;
- `with`;
- `open()`;
- modos `r`, `w` e `a`;
- encoding.

### Aula 24 — JSON

Conteúdos:

- estrutura JSON;
- serialização;
- desserialização;
- `json.dump()`;
- `json.load()`;
- diferença entre dicionário Python e JSON.

### Aula 25 — Erros e exceções

Conteúdos:

- erro;
- exceção;
- traceback;
- `try`;
- `except`;
- `else`;
- `finally`;
- tratamento específico de erros.

**Projeto da semana:** gerenciador de contatos com persistência.

---

## Semana 6 — Programação Orientada a Objetos

### Aula 26 — Introdução à POO

Conteúdos:

- paradigma;
- objeto;
- classe;
- dados;
- comportamento;
- modelagem.

### Aula 27 — Classes e objetos

Conteúdos:

- `class`;
- instância;
- atributos;
- criação de objetos.

### Aula 28 — Atributos, métodos e `self`

Conteúdos:

- atributo;
- método;
- comportamento;
- `self`.

### Aula 29 — `__init__` e encapsulamento básico

Conteúdos:

- inicialização de objetos;
- `__init__`;
- atributos internos;
- convenção `_nome`;
- encapsulamento introdutório.

### Aula 30 — Projeto com POO

Transformar o sistema escolar utilizando classes.

Classes iniciais:

- `Aluno`;
- `Turma`;
- `Curso`.

---

## Semana 7 — Terminal e controle de versão

### Aula 31 — Introdução ao terminal

Conteúdos:

- terminal;
- shell;
- diretório;
- caminho;
- `pwd`;
- `cd`;
- `ls`.

### Aula 32 — Arquivos pelo terminal

Conteúdos:

- `mkdir`;
- `touch`;
- `cp`;
- `mv`;
- `rm`;
- cuidados com exclusão.

### Aula 33 — Git e controle de versão

Conteúdos:

- Git;
- repositório;
- working tree;
- staging;
- commit;
- `git init`;
- `git status`;
- `git add`;
- `git commit`;
- `git log`.

### Aula 34 — GitHub

Conteúdos:

- Git versus GitHub;
- repositório local;
- repositório remoto;
- `origin`;
- `push`;
- `pull`;
- `clone`;
- `.gitignore`.

### Aula 35 — Branches e merge

Conteúdos:

- branch;
- `main`;
- criação de branch;
- troca de branch;
- merge;
- conflitos em nível introdutório.

**Projeto do módulo:** Sistema de Contatos versionado com Git e GitHub.

---

# MÓDULO 3
# DESENVOLVIMENTO FRONT-END

**Aulas:** 36–50

Objetivo:

Aprender como interfaces web são construídas utilizando HTML, CSS e JavaScript.

---

## Semana 8 — HTML

### Aula 36 — Como funciona uma página web

- navegador;
- página;
- site;
- aplicação web;
- front-end;
- HTML;
- CSS;
- JavaScript.

### Aula 37 — Estrutura de um documento HTML

- `DOCTYPE`;
- `html`;
- `head`;
- `meta`;
- `title`;
- `body`;
- tags;
- elementos;
- atributos.

### Aula 38 — Textos, listas, links e imagens

- headings;
- parágrafos;
- listas;
- links;
- imagens;
- `alt`.

### Aula 39 — HTML semântico

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `aside`;
- `footer`;
- acessibilidade.

### Aula 40 — Formulários HTML

- `form`;
- `label`;
- `input`;
- `select`;
- `textarea`;
- `button`;
- validação HTML básica.

**Mini-projeto:** formulário de cadastro de aluno.

---

## Semana 9 — CSS

### Aula 41 — Introdução ao CSS

- seletor;
- propriedade;
- valor;
- classe;
- ID;
- stylesheet externo.

### Aula 42 — Box Model

- content;
- padding;
- border;
- margin;
- `box-sizing`.

### Aula 43 — Tipografia, cores e unidades

- fontes;
- cores;
- `px`;
- `%`;
- `rem`;
- `vh`;
- `vw`;
- legibilidade.

### Aula 44 — Flexbox e Grid

- Flexbox;
- Grid;
- alinhamento;
- distribuição;
- layouts.

### Aula 45 — Responsividade

- viewport;
- largura flexível;
- `max-width`;
- media queries;
- mobile-first.

**Projeto:** interface responsiva.

---

## Semana 10 — JavaScript

### Aula 46 — JavaScript para quem conhece Python

- JavaScript;
- `let`;
- `const`;
- tipos;
- arrays;
- objetos;
- condições;
- loops;
- funções;
- diferenças iniciais entre Python e JavaScript.

### Aula 47 — DOM

- Document Object Model;
- `document`;
- elementos;
- `querySelector`;
- `textContent`.

### Aula 48 — Eventos

- `click`;
- `submit`;
- `input`;
- `addEventListener`;
- callback introdutório.

### Aula 49 — Formulários e validação

- leitura de campos;
- `value`;
- `trim()`;
- `preventDefault()`;
- validação no navegador.

### Aula 50 — Projeto Front-end

**Gerenciador de tarefas no navegador**

Funções:

- criar;
- listar;
- editar;
- concluir;
- excluir;
- filtrar tarefas.

Pode introduzir `localStorage`, deixando claro que não é um banco de dados de servidor.

---

# MÓDULO 4
# INTERNET, HTTP E APIs

**Aulas:** 51–60

## Semana 11 — Como a Internet funciona

### Aula 51 — Cliente e servidor

### Aula 52 — URL, domínio, IP e porta

### Aula 53 — Introdução ao HTTP

### Aula 54 — Request e Response

### Aula 55 — HTTP versus HTTPS

---

## Semana 12 — APIs

### Aula 56 — O que é uma API

### Aula 57 — REST e recursos

### Aula 58 — Métodos HTTP

- GET;
- POST;
- PUT;
- PATCH;
- DELETE.

### Aula 59 — JSON e códigos HTTP

Estudar inicialmente:

- 200;
- 201;
- 204;
- 400;
- 401;
- 403;
- 404;
- 422;
- 500.

### Aula 60 — Fetch API no JavaScript

- `fetch`;
- Promise introdutória;
- `async`;
- `await`;
- `response.ok`;
- consumo de API.

---

# MÓDULO 5
# BACK-END COM PYTHON E FASTAPI

**Aulas:** 61–70

## Semana 13

### Aula 61 — O que é Back-end

### Aula 62 — Introdução ao FastAPI

### Aula 63 — Criando uma rota GET

### Aula 64 — Path Parameters e Query Parameters

### Aula 65 — Request Body e validação

---

## Semana 14

### Aula 66 — Criando recursos com POST

### Aula 67 — Atualizações com PUT e PATCH

### Aula 68 — DELETE

### Aula 69 — Status codes e tratamento de erros

### Aula 70 — Projeto de API CRUD

Criar API de alunos:

- `GET /alunos`
- `GET /alunos/{id}`
- `POST /alunos`
- `PATCH /alunos/{id}`
- `DELETE /alunos/{id}`

Nesta etapa, os dados podem inicialmente permanecer em memória.

---

# MÓDULO 6
# BANCO DE DADOS, SQL E POSTGRESQL

**Aulas:** 71–80

## Semana 15

### Aula 71 — Introdução a banco de dados

### Aula 72 — SGBD e PostgreSQL

### Aula 73 — Tabelas, linhas e colunas

### Aula 74 — Primary Key e Foreign Key

### Aula 75 — Relacionamentos

- 1:1;
- 1:N;
- N:N.

---

## Semana 16

### Aula 76 — CREATE TABLE e INSERT

### Aula 77 — SELECT e WHERE

### Aula 78 — UPDATE e DELETE

### Aula 79 — ORDER BY, funções agregadas e GROUP BY

### Aula 80 — JOIN e projeto de banco de dados

Projeto:

Banco escolar com:

- alunos;
- cursos;
- matrículas.

Ensinar SQL antes de esconder operações atrás de ORM.

---

# MÓDULO 7
# DESENVOLVIMENTO FULL STACK

**Aulas:** 81–85

## Semana 17

### Aula 81 — Arquitetura Full Stack

Fluxo:

HTML/CSS/JavaScript
↓
HTTP
↓
FastAPI
↓
SQL
↓
PostgreSQL

### Aula 82 — Front-end consumindo API

### Aula 83 — FastAPI conectado ao PostgreSQL

### Aula 84 — CRUD completo

### Aula 85 — Projeto Full Stack v1

Criar sistema de tarefas utilizando:

- HTML;
- CSS;
- JavaScript;
- FastAPI;
- PostgreSQL.

---

# MÓDULO 8
# REDES DE COMPUTADORES

**Aulas:** 86–95

## Semana 18

### Aula 86 — Por que um programador precisa entender redes

### Aula 87 — Modelo OSI

Camadas:

7. Aplicação  
6. Apresentação  
5. Sessão  
4. Transporte  
3. Rede  
2. Enlace  
1. Física

O modelo OSI deve ser apresentado como modelo conceitual de referência.

### Aula 88 — TCP/IP e comparação com OSI

### Aula 89 — IPv4 e IPv6

### Aula 90 — IP público, IP privado, localhost, gateway e NAT

---

## Semana 19

### Aula 91 — Máscara, CIDR e sub-redes

### Aula 92 — Portas e sockets

Portas importantes como exemplos:

- 22 — SSH;
- 53 — DNS;
- 80 — HTTP;
- 443 — HTTPS.

### Aula 93 — TCP versus UDP

### Aula 94 — HTTP, HTTPS, DNS e ICMP

### Aula 95 — SSH, FTP, SFTP e Telnet

Deixar claro:

- SSH é utilizado para acesso remoto seguro;
- Telnet não deve ser apresentado como alternativa segura;
- SFTP não é a mesma coisa que FTPS.

---

# MÓDULO 9
# LINUX

**Aulas:** 96–100

## Semana 20

### Aula 96 — Linux e sistema de arquivos

Diretórios introdutórios:

- `/`;
- `/home`;
- `/etc`;
- `/var`;
- `/usr`;
- `/tmp`.

### Aula 97 — Caminhos absolutos e relativos

- `/`;
- `.`;
- `..`;
- `~`.

### Aula 98 — Manipulação de arquivos

- `pwd`;
- `ls`;
- `cd`;
- `mkdir`;
- `touch`;
- `cp`;
- `mv`;
- `rm`;
- `cat`;
- `less`.

### Aula 99 — Usuários, grupos e permissões

- proprietário;
- grupo;
- outros;
- leitura;
- escrita;
- execução.

### Aula 100 — chmod, chown, processos e variáveis de ambiente

- `chmod`;
- permissões simbólicas;
- permissões numéricas;
- `chown`;
- processos;
- `ps`;
- `top`;
- `PATH`;
- variáveis de ambiente.

---

# MÓDULO 10
# HOSPEDAGEM, DEPLOY, DOMÍNIOS E DNS

**Aulas:** 101–110

## Semana 21 — Deploy

### Aula 101 — Localhost versus Internet

### Aula 102 — Servidores e VPS

### Aula 103 — Cloud e plataformas gerenciadas

Introdução conceitual a:

- IaaS;
- PaaS;
- SaaS.

### Aula 104 — Desenvolvimento, teste e produção

### Aula 105 — Deploy

Conteúdos:

- dependências;
- comando de inicialização;
- logs;
- variáveis de ambiente;
- secrets;
- banco de produção.

---

## Semana 22 — Domínios e DNS

### Aula 106 — Domínios e registradores

### Aula 107 — Como funciona o DNS

### Aula 108 — Registros A e AAAA

- A → IPv4;
- AAAA → IPv6.

### Aula 109 — CNAME, MX, TXT e NS

- CNAME → alias para hostname;
- MX → servidores de e-mail;
- TXT → informações textuais e verificações;
- NS → nameservers.

### Aula 110 — TTL, subdomínios e HTTPS em produção

Explicar claramente:

DNS ≠ hospedagem

DNS ≠ HTTPS

Domínio ≠ URL completa

---

# MÓDULO 11
# SEGURANÇA DA INFORMAÇÃO E DESENVOLVIMENTO SEGURO

**Aulas:** 111–115

## Semana 23

### Aula 111 — Fundamentos de Segurança da Informação

Tríade CIA:

- Confidencialidade;
- Integridade;
- Disponibilidade.

### Aula 112 — Ameaça, vulnerabilidade e risco

Diferenciar:

- ativo;
- ameaça;
- vulnerabilidade;
- risco;
- controle.

### Aula 113 — Autenticação e autorização

Diferenciar claramente:

**Autenticação:** quem é você?

**Autorização:** o que você pode fazer?

### Aula 114 — Desenvolvimento seguro

Conteúdos:

- validação;
- menor privilégio;
- gerenciamento de secrets;
- dependências;
- logs;
- backups;
- autorização no servidor;
- tratamento seguro de erros.

### Aula 115 — Segurança Web e OWASP Top 10

Utilizar a versão atual do OWASP Top 10 definida na documentação oficial quando a aula for desenvolvida.

Abordagem:

DEFENSIVA.

Ensinar:

- causas;
- riscos;
- prevenção;
- boas práticas.

Não transformar a aula em treinamento de ataque contra sistemas reais.

---

# MÓDULO 12
# CRIPTOGRAFIA E PROJETO FINAL

**Aulas:** 116–120

## Semana 24

### Aula 116 — Introdução à criptografia

Ensinar diferenças:

- texto puro;
- texto cifrado;
- chave;
- criptografia;
- hash;
- codificação.

Destacar:

CRIPTOGRAFIA ≠ HASH ≠ CODIFICAÇÃO

Base64 NÃO é criptografia.

### Aula 117 — Criptografia simétrica

Conteúdos:

- uma chave compartilhada;
- cifrar;
- decifrar;
- AES em nível conceitual;
- gerenciamento de chaves.

Não ensinar criação de algoritmos criptográficos próprios.

### Aula 118 — Criptografia assimétrica

Conteúdos:

- chave pública;
- chave privada;
- RSA em nível conceitual;
- ECC em nível conceitual;
- assinatura digital;
- troca segura de informações.

### Aula 119 — Hashes, senhas, certificados e TLS

Conteúdos:

- função hash;
- salt;
- armazenamento de senhas;
- password hashing;
- certificados digitais;
- TLS;
- HTTPS.

Nunca recomendar:

- senha em texto puro;
- criptografia reversível como armazenamento comum de senha;
- MD5 para senhas;
- SHA-1 para senhas;
- SHA-256 puro como mecanismo de armazenamento de senhas.

Utilizar algoritmos apropriados de password hashing conforme práticas atuais quando o conteúdo detalhado for produzido.

### Aula 120 — PROJETO FINAL FULL STACK

Criar um:

# SISTEMA FULL STACK DE GERENCIAMENTO DE TAREFAS

---

# PROJETO FINAL — REQUISITOS

O sistema deverá permitir:

- cadastro de usuário;
- login;
- logout;
- autenticação;
- criação de tarefas;
- listagem de tarefas;
- visualização;
- edição;
- conclusão;
- exclusão;
- isolamento das tarefas por usuário.

Tecnologias principais:

## Front-end

- HTML;
- CSS;
- JavaScript.

## Back-end

- Python;
- FastAPI.

## Banco de dados

- PostgreSQL.

## Infraestrutura

- Git;
- GitHub;
- servidor/hospedagem;
- domínio;
- DNS;
- HTTPS.

## Segurança

- password hashing;
- autenticação;
- autorização;
- validação de entrada;
- secrets fora do código;
- variáveis de ambiente;
- tratamento de erros;
- HTTPS em produção;
- isolamento de dados por usuário.

---

# ARQUITETURA FINAL

O estudante deverá compreender:

USUÁRIO
↓
NAVEGADOR
↓
HTML + CSS + JAVASCRIPT
↓
HTTPS
↓
API
↓
FASTAPI / PYTHON
↓
SQL
↓
POSTGRESQL

E, na infraestrutura:

DOMÍNIO
↓
DNS
↓
SERVIDOR
↓
APLICAÇÃO

---

# PROJETOS DO CURSO

Durante o curso serão desenvolvidos progressivamente:

## Projeto 1

Sistema Escolar no Terminal

Python básico.

## Projeto 2

Sistema de Contatos

Python + arquivos + JSON + POO + Git.

## Projeto 3

Gerenciador de tarefas Front-end

HTML + CSS + JavaScript.

## Projeto 4

API CRUD

Python + FastAPI.

## Projeto 5

Banco escolar

PostgreSQL + SQL.

## Projeto 6

Aplicação Full Stack v1

Front-end + FastAPI + PostgreSQL.

## Projeto Final

Sistema completo de gerenciamento de tarefas com usuários.

---

# PROGRESSÃO PEDAGÓGICA

No início do curso:

- fornecer mais orientação;
- explicar código linha por linha;
- apresentar exemplos pequenos;
- utilizar prática guiada.

Conforme o curso avançar:

reduzir progressivamente a quantidade de código entregue pronto.

O estudante deve passar de:

COPIAR E ENTENDER

para:

COMPLETAR

depois:

MODIFICAR

depois:

PLANEJAR

e finalmente:

CONSTRUIR.

---

# ROTINA SUGERIDA

Segunda-feira:

novo conteúdo.

Terça-feira:

prática.

Quarta-feira:

novo conteúdo.

Quinta-feira:

programação e exercícios.

Sexta-feira:

desafio e revisão.

---

# REVISÕES

Realizar revisões periódicas.

Ao final de cada módulo:

- 4 questões conceituais;
- 3 questões de leitura de código ou comandos;
- 2 exercícios práticos;
- 1 desafio.

Total:

10 questões.

A cada três módulos, realizar também uma revisão cumulativa.

---

# REGRAS SOBRE SOLUÇÕES

As respostas dos exercícios não devem aparecer automaticamente.

Fluxo:

EXERCÍCIO
↓
VER UMA DICA
↓
VER SEGUNDA DICA
↓
VER SOLUÇÃO COMENTADA

A solução deve explicar o raciocínio.

---

# VÍDEOS

Vídeos são complementares.

Eles NÃO substituem o conteúdo escrito.

Não é obrigatório assistir ao vídeo para concluir uma aula.

Nunca inventar URLs ou IDs.

Quando não existir vídeo validado:

“Não há vídeo complementar selecionado para esta aula.”

---

# PROGRESSO

O curso possui exatamente:

120 aulas.

Fórmula principal:

aulas concluídas / 120 × 100

Exemplos:

1 aula concluída:

1 / 120

20 aulas concluídas:

20 / 120

60 aulas concluídas:

60 / 120

120 aulas concluídas:

120 / 120 = 100%

Abrir uma aula não deve marcá-la como concluída.

---

# CHECKPOINTS

Ao final de cada módulo, mostrar ao estudante uma lista:

EU CONSIGO...

com as principais competências desenvolvidas naquele módulo.

O estudante pode utilizar o checklist como autoavaliação.

---

# DIFERENÇAS CONCEITUAIS IMPORTANTES

Ao longo do curso, destacar:

Git ≠ GitHub

HTML ≠ linguagem de programação tradicional

JavaScript ≠ Java

HTTP ≠ HTTPS

API ≠ banco de dados

JSON ≠ objeto JavaScript

JSON ≠ dicionário Python

SQL ≠ PostgreSQL

ORM ≠ banco de dados

IP ≠ domínio

Domínio ≠ URL completa

DNS ≠ hospedagem

DNS ≠ HTTPS

TCP ≠ IP

TCP ≠ UDP

SSH ≠ Telnet

SFTP ≠ FTPS

NAT ≠ firewall

Autenticação ≠ autorização

Hash ≠ criptografia

Base64 ≠ criptografia

HTTPS ≠ aplicação completamente segura

---

# CONTEÚDOS FORA DO ESCOPO INICIAL

Não adicionar ao currículo básico sem solicitação:

- React;
- Vue;
- Angular;
- Next.js;
- Django;
- Flask;
- Kubernetes;
- Terraform;
- microserviços;
- Kafka;
- Redis;
- GraphQL;
- Machine Learning;
- Data Science;
- programação de malware;
- exploração ofensiva de sistemas reais;
- engenharia reversa avançada;
- Assembly;
- C;
- C++;
- criação de algoritmos criptográficos próprios.

Esses assuntos podem ser estudados futuramente depois da conclusão da base.

---

# APÓS O CURSO

Depois das 120 aulas, possíveis caminhos de aprofundamento:

- Python avançado;
- estruturas de dados e algoritmos;
- testes automatizados;
- FastAPI avançado;
- PostgreSQL avançado;
- Docker;
- Cloud;
- DevOps;
- segurança;
- Front-end avançado;
- frameworks JavaScript.

Esses caminhos NÃO fazem parte das 120 aulas iniciais.

---

# REGRA FINAL PARA AGENTES DE IA

Este arquivo é o MAPA OFICIAL do curso.

Antes de criar ou alterar conteúdo pedagógico:

1. Ler `documentos/regras-do-app.md`.
2. Ler `documentos/curriculo.md`.
3. Ler o arquivo específico do módulo.
4. Examinar a implementação existente.
5. Verificar quais conceitos o estudante já estudou.
6. Não utilizar como pré-requisito algo que ainda não foi ensinado.
7. Alterar somente o escopo solicitado.
8. Testar a implementação.
9. Não inventar informações técnicas.
10. Não modificar a ordem oficial das 120 aulas.

O objetivo não é apenas terminar 120 aulas.

O objetivo é fazer com que o estudante desenvolva uma base sólida para compreender programação e continuar aprendendo desenvolvimento de software de maneira progressiva.
