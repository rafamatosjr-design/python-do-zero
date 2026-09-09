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

O conteúdo detalhado de cada módulo será definido em arquivos específicos dentro de `docs/`, por exemplo:

- `docs/modulo-01.md`
- `docs/modulo-02.md`
- `docs/modulo-03.md`
- ...
- `docs/modulo-12.md`

---

# 2. Trilha de aprendizagem

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

# MÓDULO 1 — FUNDAMENTOS DE PROGRAMAÇÃO E PYTHON

**Aulas:** 1–20

Objetivo: construir a base necessária para que uma pessoa que nunca programou compreenda os princípios da programação e crie pequenos programas em Python.

## Semana 1 — Primeiros conceitos

### Aula 1 — O que é programação?

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

- CPU;
- memória RAM;
- armazenamento;
- sistema operacional;
- programa;
- processo;
- instrução;
- interpretador.

### Aula 3 — Preparando o Python

- Python;
- interpretador;
- VS Code;
- arquivo `.py`;
- terminal;
- execução de um programa.

### Aula 4 — Primeiro programa em Python

- `print()`;
- strings;
- aspas;
- comentários;
- sintaxe inicial;
- erros de sintaxe básicos.

### Aula 5 — Algoritmos e pensamento computacional

- decomposição de problemas;
- sequência;
- entrada;
- processamento;
- saída;
- pseudocódigo;
- resolução de problemas.

**Projeto da semana:** algoritmo para cálculo de média escolar.

## Semana 2 — Dados e operações

### Aula 6 — Variáveis

- variável;
- valor;
- atribuição;
- nomes de variáveis;
- boas práticas.

### Aula 7 — Tipos de dados

- `str`;
- `int`;
- `float`;
- `bool`;
- `None`;
- `type()`.

### Aula 8 — Entrada de dados

- `input()`;
- conversão de tipos;
- `int()`;
- `float()`;
- f-strings.

### Aula 9 — Operadores

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

- `and`;
- `or`;
- `not`;
- expressões booleanas.

**Projeto da semana:** calculadora básica e calculadora de desconto.

## Semana 3 — Decisões e repetições

### Aula 11 — Condições com `if`

- condição;
- expressão booleana;
- `if`;
- blocos;
- indentação.

### Aula 12 — `elif` e `else`

- decisões alternativas;
- múltiplas condições;
- fluxo condicional.

### Aula 13 — Repetições com `for`

- repetição;
- `for`;
- `range()`;
- contador;
- iteração básica.

### Aula 14 — Repetições com `while`

- `while`;
- condição de repetição;
- contador;
- atualização de variável;
- loop infinito.

### Aula 15 — Desafio de lógica

Construção de uma calculadora com menu utilizando variáveis, `input()`, operadores, `if`, `elif`, `else` e `while`.

## Semana 4 — Estruturas de dados e funções

### Aula 16 — Listas

- lista;
- elemento;
- índice;
- `append()`;
- `remove()`;
- `len()`;
- percorrer listas.

### Aula 17 — Tuplas e conjuntos

- tuple;
- imutabilidade;
- set;
- elementos únicos;
- diferenças básicas entre lista, tupla e conjunto.

### Aula 18 — Dicionários

- chave;
- valor;
- acesso;
- alteração;
- inclusão;
- lista de dicionários.

### Aula 19 — Funções

- `def`;
- função;
- parâmetro;
- argumento;
- `return`;
- escopo introdutório;
- diferença entre `print()` e `return`.

### Aula 20 — Projeto do Módulo 1

**Sistema Escolar no Terminal** com cadastro, listagem, busca, notas, média, exclusão e menu interativo.

Usar Python puro e lista de dicionários. Não utilizar classes, arquivos, JSON, banco de dados, APIs ou frameworks.

---

# MÓDULO 2 — PYTHON INTERMEDIÁRIO, ARQUIVOS, POO, TERMINAL E GIT

**Aulas:** 21–35

Objetivo: organizar programas maiores, salvar dados, lidar com erros, compreender Programação Orientada a Objetos e iniciar ferramentas profissionais de desenvolvimento.

### Aula 21 — Organizando programas com funções

- divisão de problemas;
- responsabilidade de funções;
- reutilização;
- organização do código;
- refatoração básica.

### Aula 22 — Módulos e `import`

- módulo;
- `import`;
- biblioteca padrão;
- módulos próprios;
- múltiplos arquivos.

### Aula 23 — Arquivos

- `with open(..., encoding="utf-8")`;
- leitura;
- escrita;
- anexar conteúdo;
- modos `r`, `w` e `a`.

### Aula 24 — JSON

- estrutura JSON;
- serialização;
- desserialização;
- `json.dump()`;
- `json.load()`;
- dicionário Python ≠ JSON.

### Aula 25 — Erros e exceções

- erro;
- exceção;
- traceback;
- `try`;
- `except`;
- `else`;
- `finally`;
- tratamento específico de erros;
- evitar `except` genérico sem necessidade.

### Aula 26 — Introdução à POO

- paradigma;
- objeto;
- classe;
- dados;
- comportamento;
- modelagem.

### Aula 27 — Classes e objetos

- `class`;
- instância;
- atributos;
- criação de objetos.

### Aula 28 — Atributos, métodos e `self`

- atributo;
- método;
- comportamento;
- `self`.

### Aula 29 — `__init__` e encapsulamento básico

- inicialização de objetos;
- `__init__`;
- atributos internos;
- convenção `_nome`;
- encapsulamento introdutório.

### Aula 30 — Projeto com POO

Transformar o sistema escolar utilizando classes iniciais `Aluno`, `Turma` e `Curso`.

### Aula 31 — Introdução ao terminal

- terminal;
- shell;
- diretório;
- caminho;
- `pwd`;
- `cd`;
- `ls`.

### Aula 32 — Arquivos pelo terminal

- `mkdir`;
- `touch`;
- `cp`;
- `mv`;
- `rm`;
- cuidados com exclusão.

### Aula 33 — Git e controle de versão

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

- Git ≠ GitHub;
- repositório local;
- repositório remoto;
- `origin`;
- `push`;
- `pull`;
- `clone`;
- `.gitignore`.

### Aula 35 — Branches e merge

- branch;
- `main`;
- criação e troca de branch;
- merge;
- conflitos introdutórios.

**Projeto do módulo:** Sistema de Contatos versionado com Git e GitHub.

---

# MÓDULO 3 — DESENVOLVIMENTO FRONT-END

**Aulas:** 36–50

### Aula 36 — Como funciona uma página web

- navegador;
- página;
- site;
- aplicação web;
- front-end;
- HTML estrutura;
- CSS apresentação;
- JavaScript interatividade.

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
- acessibilidade;
- SEO introdutório sem exageros.

### Aula 40 — Formulários HTML

- `form`;
- `label`;
- `input`;
- `select`;
- `textarea`;
- `button`;
- placeholder não substitui label.

### Aula 41 — Introdução ao CSS

- seletor;
- propriedade;
- valor;
- classe;
- ID;
- cascade;
- stylesheet externo.

### Aula 42 — Box Model

- content;
- padding;
- border;
- margin;
- `box-sizing: border-box`.

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

- Flexbox como ferramenta principalmente unidimensional;
- Grid como ferramenta principalmente bidimensional;
- alinhamento;
- distribuição;
- layouts.

### Aula 45 — Responsividade

- viewport;
- largura flexível;
- `max-width`;
- media queries;
- mobile-first.

### Aula 46 — JavaScript para quem conhece Python

- `let` e `const` como base inicial;
- tipos;
- arrays;
- objetos;
- condições;
- loops;
- funções;
- diferenças iniciais entre Python e JavaScript;
- não usar `var` como abordagem principal.

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
- validação no navegador;
- validação front-end não é mecanismo de segurança suficiente.

### Aula 50 — Projeto Front-end

**Gerenciador de tarefas no navegador** com criar, listar, editar, concluir, excluir e filtrar tarefas. Pode introduzir `localStorage`, deixando claro que não é banco de dados de servidor e não deve armazenar segredos.

---

# MÓDULO 4 — INTERNET, HTTP E APIs

**Aulas:** 51–60

### Aula 51 — Cliente e servidor

### Aula 52 — URL, domínio, IP e porta

Explicar scheme, host, path e query.

### Aula 53 — Introdução ao HTTP

### Aula 54 — Request e Response

- headers;
- body;
- status.

### Aula 55 — HTTP versus HTTPS

HTTPS é HTTP protegido por TLS; não apresentar HTTPS como garantia absoluta de segurança do sistema.

### Aula 56 — O que é uma API

### Aula 57 — REST e recursos

REST como estilo arquitetural/conjunto de convenções, sem tratá-lo como protocolo.

### Aula 58 — Métodos HTTP

- GET;
- POST;
- PUT;
- PATCH;
- DELETE;
- sem afirmar que o método determina obrigatoriamente uma operação de banco de dados.

### Aula 59 — JSON e códigos de status

- Python dict ≠ objeto JavaScript ≠ JSON;
- 200;
- 201;
- 204;
- 400;
- 401;
- 403;
- 404;
- 422;
- 500.

### Aula 60 — Consumindo APIs com `fetch`

- Promise introdutória;
- `async`/`await`;
- `response.ok`;
- explicar que `fetch` não rejeita uma Promise apenas por receber HTTP 4xx/5xx.

---

# MÓDULO 5 — BACK-END COM FASTAPI

**Aulas:** 61–70

### Aula 61 — O que faz o back-end

### Aula 62 — FastAPI e ambiente virtual

- documentação atual;
- ambiente virtual;
- instalação;
- execução inicial.

### Aula 63 — Criando rota GET

### Aula 64 — Path e Query Parameters

### Aula 65 — Request Body e Pydantic

- validação;
- modelo de request não é necessariamente tabela de banco de dados.

### Aula 66 — POST e status 201

### Aula 67 — PUT e PATCH

### Aula 68 — DELETE

### Aula 69 — Erros e códigos de status

### Aula 70 — Projeto API de alunos em memória

Endpoints:

- `GET /alunos`
- `GET /alunos/{id}`
- `POST /alunos`
- `PATCH /alunos/{id}`
- `DELETE /alunos/{id}`

Sem banco de dados neste projeto.

---

# MÓDULO 6 — POSTGRESQL E SQL

**Aulas:** 71–80

### Aula 71 — Banco de dados e SGBD

- persistência;
- banco de dados;
- sistema gerenciador de banco de dados.

### Aula 72 — PostgreSQL

Explicar que SQL é linguagem e PostgreSQL é um SGBD.

### Aula 73 — Tabelas, linhas, colunas e tipos

### Aula 74 — Chaves primárias e estrangeiras

Explicar que chave primária não precisa obrigatoriamente ser inteiro sequencial.

### Aula 75 — Relacionamentos

- 1:1;
- 1:N;
- N:N;
- tabela de junção.

### Aula 76 — `CREATE TABLE` e `INSERT`

### Aula 77 — `SELECT` e `WHERE`

Evitar ensinar `SELECT *` como padrão universal.

### Aula 78 — `UPDATE` e `DELETE`

Destacar risco de executar sem `WHERE`.

### Aula 79 — Ordenação e agregações

- `ORDER BY`;
- `COUNT`;
- `SUM`;
- `AVG`;
- `MIN`;
- `MAX`;
- `GROUP BY`.

### Aula 80 — JOINs

- `INNER JOIN`;
- `LEFT JOIN`;
- banco escolar com `alunos`, `cursos` e `matriculas`.

Ensinar SQL antes de ORM.

---

# MÓDULO 7 — FULL STACK

**Aulas:** 81–85

### Aula 81 — Arquitetura completa

HTML/CSS/JavaScript → HTTP → FastAPI → SQL → PostgreSQL.

### Aula 82 — Front-end consumindo a API

- CORS;
- explicar que CORS não é autenticação.

### Aula 83 — FastAPI + PostgreSQL

- conexão;
- consultas;
- transações;
- ORM pode ser apresentado como abstração, não como substituto conceitual de SQL ou do banco.

### Aula 84 — CRUD de ponta a ponta

### Aula 85 — Projeto Full Stack v1

Gerenciador de tarefas sem login.

Tabela inicial:

`tarefas(id, titulo, descricao, status, created_at)`

---

# MÓDULO 8 — REDES

**Aulas:** 86–95

### Aula 86 — Por que programadores precisam entender redes

### Aula 87 — Modelo OSI

Sete camadas como modelo conceitual de referência; não ensinar como se cada camada fosse um programa separado.

### Aula 88 — TCP/IP versus OSI

### Aula 89 — IPv4 e IPv6

- IPv4: 32 bits;
- IPv6: 128 bits.

### Aula 90 — IP público, privado, localhost, gateway e NAT

- `10.0.0.0/8`;
- `172.16.0.0/12`;
- `192.168.0.0/16`;
- `127.0.0.1` e `::1`;
- NAT não é sinônimo de firewall.

### Aula 91 — Máscara, CIDR e sub-redes

- introdução;
- exemplo `/24`.

### Aula 92 — Portas e sockets

Portas comuns:

- 22 SSH;
- 53 DNS;
- 80 HTTP;
- 443 HTTPS.

DNS pode usar UDP e TCP.

### Aula 93 — TCP versus UDP

Não ensinar “UDP é sempre mais rápido” como regra absoluta.

### Aula 94 — HTTP, HTTPS, DNS e ICMP

Explicar que `ping` usa ICMP, não TCP.

### Aula 95 — SSH, FTP, SFTP e Telnet

- SFTP funciona sobre SSH e não é o mesmo que FTPS;
- Telnet é inseguro para administração remota sensível.

---

# MÓDULO 9 — LINUX

**Aulas:** 96–100

### Aula 96 — Estrutura de diretórios Linux

- `/`;
- `/home`;
- `/etc`;
- `/var`;
- `/usr`;
- `/tmp`.

### Aula 97 — Caminhos absolutos e relativos

- `.`;
- `..`;
- `~`.

### Aula 98 — Comandos básicos

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

### Aula 99 — Permissões

- owner;
- group;
- others;
- read;
- write;
- execute;
- explicar nuance do bit `x` em diretórios.

### Aula 100 — `chmod`, `chown`, processos e ambiente

- modo simbólico antes do numérico;
- valores 4, 2 e 1;
- `chmod 755`;
- `chown`;
- `ps`;
- `top`;
- `kill` em laboratório seguro;
- variáveis de ambiente;
- `PATH`;
- não incentivar uso indiscriminado de `sudo`.

---

# MÓDULO 10 — DEPLOY, DOMÍNIOS E DNS

**Aulas:** 101–110

### Aula 101 — Localhost versus Internet

### Aula 102 — Servidores e VPS

Explicar servidor como papel/software/infraestrutura, não apenas como “um computador especial”.

### Aula 103 — Cloud

- IaaS;
- PaaS;
- SaaS introdutório.

### Aula 104 — Ambientes

- desenvolvimento;
- testes;
- produção.

### Aula 105 — Deploy

- dependências;
- comando de inicialização;
- logs;
- variáveis de ambiente;
- segredos;
- `.env` não versionado;
- banco de produção.

### Aula 106 — Domínios

- registrador;
- TLD;
- subdomínio.

### Aula 107 — Como funciona o DNS

- resolver;
- root;
- TLD;
- servidor autoritativo.

### Aula 108 — Registros A e AAAA

- A → IPv4;
- AAAA → IPv6.

### Aula 109 — CNAME, MX, TXT e NS

- CNAME aponta para outro hostname, não diretamente para IP;
- MX para email;
- TXT;
- NS.

### Aula 110 — TTL, cache, subdomínios e HTTPS

Explicar que DNS e HTTPS resolvem problemas diferentes.

---

# MÓDULO 11 — SEGURANÇA DA INFORMAÇÃO

**Aulas:** 111–115

Todo conteúdo de segurança deste curso é defensivo e educacional.

### Aula 111 — Tríade CIA

- confidencialidade;
- integridade;
- disponibilidade;
- ativos;
- controles;
- incidentes.

### Aula 112 — Risco

- ativo;
- ameaça;
- vulnerabilidade;
- risco;
- controle.

### Aula 113 — Autenticação e autorização

- autenticação ≠ autorização;
- sessões;
- tokens em nível conceitual;
- evitar ensinar autenticação caseira insegura como padrão.

### Aula 114 — Segurança no desenvolvimento

- validação;
- menor privilégio;
- segredos;
- dependências;
- logs;
- backups;
- autorização no servidor;
- mensagens de erro seguras.

### Aula 115 — OWASP Top 10 atual

Usar a edição oficial mais recente disponível, incluindo conceitos como:

- Broken Access Control;
- Security Misconfiguration;
- Software Supply Chain Failures;
- Cryptographic Failures;
- Injection;
- Insecure Design;
- Authentication Failures;
- categorias relacionadas a integridade, logging e tratamento de condições excepcionais conforme versão vigente.

Ensinar consultas parametrizadas e prevenção de XSS em nível defensivo. Não incluir exploração ofensiva de sistemas reais.

---

# MÓDULO 12 — CRIPTOGRAFIA E PROJETO FINAL

**Aulas:** 116–120

### Aula 116 — Conceitos fundamentais de criptografia

- plaintext;
- ciphertext;
- chave;
- criptografia ≠ hash ≠ encoding;
- Base64 não é criptografia.

### Aula 117 — Criptografia simétrica

- conceito;
- AES em nível conceitual;
- não criar algoritmos criptográficos caseiros.

### Aula 118 — Criptografia assimétrica

- chave pública;
- chave privada;
- RSA;
- ECC;
- assinaturas digitais;
- evitar simplificação incorreta de “assinatura = criptografar com chave privada”.

### Aula 119 — Hash, salt, senhas, certificados e TLS

- não armazenar senha em texto puro;
- não armazenar senha com criptografia reversível;
- não usar MD5, SHA-1 ou SHA-256 puro como mecanismo de armazenamento de senha;
- utilizar algoritmo moderno de password hashing, como Argon2id quando apropriado;
- salt não é segredo;
- certificados;
- TLS.

### Aula 120 — Projeto Full Stack Final

**Gerenciador de tarefas com usuários**.

Funcionalidades:

- cadastro;
- login;
- logout;
- CRUD de tarefas;
- cada usuário acessa somente seus próprios dados;
- autorização verificada no back-end.

Estrutura conceitual:

`usuarios(id, nome, email, senha_hash, created_at)`

`tarefas(id, usuario_id, titulo, descricao, status, created_at, updated_at)`

Endpoints mínimos:

- `POST /usuarios`
- `POST /login`
- `GET /tarefas`
- `POST /tarefas`
- `GET /tarefas/{id}`
- `PATCH /tarefas/{id}`
- `DELETE /tarefas/{id}`

Requisitos:

- password hashing seguro;
- autenticação;
- autorização;
- validação;
- consultas parametrizadas ou abstração segura equivalente;
- segredos em variáveis de ambiente;
- tratamento de erros;
- HTTPS em produção;
- dependências atualizadas;
- isolamento de dados por usuário;
- deploy;
- domínio;
- DNS;
- README;
- versionamento Git.

Arquitetura final:

Internet → Domínio → DNS → HTTPS → Servidor → Front-end/Back-end → API → PostgreSQL

---

# 3. Estrutura pedagógica oficial

Sempre que aplicável, cada aula deve seguir:

Conceito  
→ Explicação  
→ Exemplo cotidiano  
→ Exemplo de programação  
→ Código  
→ Explicação linha por linha  
→ Prática guiada  
→ Exercícios  
→ Desafio  
→ Revisão

As aulas devem durar aproximadamente 50–60 minutos e reduzir gradualmente a quantidade de ajuda fornecida.

O estudante deve digitar o código sempre que possível.

Nenhum termo técnico deve ser presumido antes de ser explicado.

---

# 4. Exercícios, dicas e soluções

Quando houver solução, usar esta progressão:

1. Ver uma dica
2. Ver segunda dica
3. Ver solução comentada

A solução começa escondida e deve explicar raciocínio, não apenas exibir o código final.

Incluir periodicamente:

- “Qual será a saída?”;
- “Encontre o erro”.

Exemplos propositalmente incorretos devem conter claramente:

> EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO

---

# 5. Vídeos complementares validados

Somente utilizar vídeos registrados na documentação.

IDs validados atualmente:

- Python — primeiros comandos: `31llNGKWDdo`
- Python — condições: `K10u3XIf1-Q`
- Python — listas: `N1hTsbW50eM`
- Python — exceções: `xz2B3bfNjEk`
- Python — POO: `dJyZmwLpxnE`
- Git: `xEKo29OWILE`
- HTML/CSS: `jgQjeqGRdgA`
- JavaScript: `vEwPnjqWQ-g`
- FastAPI: `R26iojTwUv8`
- PostgreSQL/SQL: `9cAKQWodpvM`
- OSI: `bmgvIlvVAlc`
- OSI versus TCP/IP: `c5vfwNBbl4g`

Quando não houver vídeo validado:

> Não há vídeo complementar selecionado para esta aula.

Nunca inventar link, URL, ID ou nome de vídeo.

---

# 6. Progresso

O curso possui 120 aulas.

Fórmula principal:

`aulas concluídas / 120 × 100`

Abrir uma aula não significa concluí-la.

A conclusão só acontece quando o estudante usa a ação explícita de marcar a aula como concluída.

Não bloquear artificialmente aulas futuras; destacar apenas a próxima recomendada.

---

# 7. Checkpoints

Realizar revisões periódicas dentro dos módulos.

No Módulo 1, prever revisões após as Aulas 5, 10, 15 e uma revisão final após a Aula 20.

Projetos devem utilizar apenas conhecimentos já ensinados até aquele ponto.

---

# 8. Distinções conceituais que devem ser preservadas

- Python não substitui JavaScript no navegador.
- Git não é GitHub.
- SQL não é PostgreSQL.
- Python dict não é JSON.
- Objeto JavaScript não é JSON.
- Request model não é automaticamente tabela de banco.
- ORM não é banco de dados e não substitui o entendimento de SQL.
- CORS não é autenticação.
- NAT não é firewall.
- DNS não é HTTPS.
- SFTP não é FTPS.
- Encoding não é criptografia.
- Hash não é criptografia reversível.
- HTTPS protege o transporte com TLS, mas não torna toda a aplicação automaticamente segura.

---

# 9. Fora do escopo principal

Não adicionar por iniciativa própria:

- marketplace;
- pagamentos;
- ranking;
- moedas;
- comunidade;
- chat público;
- feed social;
- certificados;
- IA interna;
- execução remota arbitrária de código;
- exploração ofensiva de sistemas reais.

---

# 10. Caminhos pós-curso

Após concluir as 120 aulas, possíveis aprofundamentos incluem:

- Python avançado;
- frameworks back-end;
- front-end avançado;
- testes automatizados;
- Docker e containers;
- DevOps;
- cloud;
- bancos NoSQL;
- arquitetura de software;
- cibersegurança defensiva;
- ciência de dados;
- automação.

Esses assuntos não devem ser antecipados de modo a prejudicar a progressão do curso principal.

---

# 11. Regra final para agentes de IA

Antes de criar ou alterar conteúdo pedagógico:

1. Ler `docs/regras-do-app.md`.
2. Ler `docs/curriculo.md`.
3. Ler o arquivo específico do módulo dentro de `docs/`.
4. Examinar a implementação existente.
5. Verificar quais conceitos o estudante já estudou.
6. Não utilizar como pré-requisito algo que ainda não foi ensinado.
7. Alterar somente o escopo solicitado.
8. Testar o que foi alterado.
9. Confirmar que funcionalidades existentes continuam funcionando.
10. Em caso de conflito, preservar o projeto e sinalizar o problema em vez de inventar uma solução.
