# Módulo 7 — Full Stack

**Aulas:** 81–85

## Objetivo do módulo

Conectar os conhecimentos de front-end, HTTP, FastAPI e PostgreSQL em uma aplicação full stack simples. O estudante deve compreender o caminho completo de uma ação feita na interface até a API e o banco de dados, além de construir um CRUD de tarefas sem autenticação nesta etapa.

## Regras pedagógicas

- conectar explicitamente HTML/CSS/JavaScript → HTTP → FastAPI → SQL → PostgreSQL;
- explicar que front-end e back-end são partes diferentes da mesma aplicação;
- usar `fetch()` no navegador para consumir a API;
- explicar CORS como política do navegador relacionada a origens diferentes;
- deixar claro que CORS não é autenticação nem autorização;
- ensinar conexão com PostgreSQL, consultas e transações em nível introdutório;
- explicar que ORM é uma camada opcional e não substitui banco de dados nem SQL;
- não introduzir login ou autenticação ainda;
- projeto final do módulo: gerenciador de tarefas full stack v1, sem login;
- tabela `tarefas` com `id`, `titulo`, `descricao`, `status` e `created_at`;
- quando não houver vídeo validado, mostrar: “Não há vídeo complementar selecionado para esta aula.”

## Aula 81 — Visão completa de uma aplicação full stack

Ensinar:
- full stack;
- front-end;
- back-end;
- API;
- banco de dados;
- fluxo de uma ação do usuário;
- caminho HTML/CSS/JS → HTTP → FastAPI → SQL → PostgreSQL.

Ideia central: ao clicar em um botão no navegador, o JavaScript pode enviar uma requisição HTTP para a API; o FastAPI processa a regra, conversa com o banco de dados e devolve uma resposta que o front-end usa para atualizar a tela.

## Aula 82 — Front-end consumindo API e CORS

Ensinar:
- `fetch()`;
- URL da API;
- requisições entre front-end e back-end;
- origem;
- CORS;
- configuração introdutória de CORS no FastAPI.

Regra conceitual: CORS controla quais origens podem fazer certas requisições pelo navegador. CORS não autentica usuários e não substitui autorização no servidor.

## Aula 83 — FastAPI conectado ao PostgreSQL

Ensinar:
- conexão com banco de dados;
- string de conexão como conceito;
- abrir e encerrar conexão;
- executar consultas;
- parâmetros em consultas;
- transação em nível introdutório;
- commit/rollback como conceitos;
- diferença entre SQL direto e ORM.

Regra conceitual: ORM é uma abstração para trabalhar com dados por objetos, mas não é o banco de dados e não elimina a necessidade de compreender SQL.

## Aula 84 — CRUD ponta a ponta

Ensinar o fluxo completo de:
- criar tarefa;
- listar tarefas;
- atualizar tarefa;
- excluir tarefa;
- atualizar a interface após a resposta da API.

O estudante deve conseguir seguir cada etapa: interface → JavaScript → HTTP → FastAPI → PostgreSQL → resposta → interface.

## Aula 85 — Projeto Full Stack: Gerenciador de tarefas v1

Construir uma aplicação sem login com:
- front-end em HTML/CSS/JavaScript;
- back-end FastAPI;
- PostgreSQL;
- tabela `tarefas(id, titulo, descricao, status, created_at)`;
- endpoints para listar, criar, editar e excluir tarefas;
- interface consumindo esses endpoints com `fetch()`;
- validação no back-end;
- mensagens de erro básicas;
- sem autenticação nesta versão.

## Checkpoint final

Ao concluir a Aula 85, o estudante deve conseguir explicar o fluxo full stack de ponta a ponta, consumir uma API pelo navegador, compreender CORS, conectar FastAPI ao PostgreSQL e construir um CRUD completo simples.

## Vídeos

Não há vídeo complementar validado especificamente para este módulo. Usar o fallback padrão nas aulas 81–85.
