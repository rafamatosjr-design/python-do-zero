# Módulo 4 — Internet, HTTP e APIs

**Aulas:** 51–60

## Objetivo do módulo

Compreender como aplicações web se comunicam pela Internet, o papel de cliente e servidor, a estrutura de URLs, os fundamentos de HTTP/HTTPS e o funcionamento conceitual de APIs REST antes de iniciar o back-end com FastAPI.

## Regras pedagógicas

- manter a mesma estrutura visual e pedagógica dos módulos anteriores;
- explicar todo termo técnico antes de utilizá-lo como conhecimento presumido;
- não antecipar FastAPI, banco de dados, autenticação ou deploy;
- usar exemplos locais e conceituais, sem depender de serviços externos reais;
- distinguir claramente URL, domínio, IP e porta;
- não apresentar HTTPS como garantia absoluta de segurança;
- REST deve ser apresentado como estilo arquitetural/conjunto de convenções, não como protocolo;
- métodos HTTP não determinam obrigatoriamente operações de banco de dados;
- diferenciar Python `dict`, objeto JavaScript e JSON;
- quando não houver vídeo validado, mostrar: “Não há vídeo complementar selecionado para esta aula.”

---

# AULA 51 — CLIENTE E SERVIDOR

## Ensinar

- cliente;
- servidor;
- requisição;
- resposta;
- comunicação em rede;
- front-end versus servidor.

## Ideia central

Um cliente inicia uma solicitação a um servidor. O servidor recebe, processa e devolve uma resposta. Cliente e servidor são papéis em uma comunicação; um mesmo computador pode executar software com papéis diferentes em situações diferentes.

## Exemplo base

Navegador → pedido de uma página → servidor → resposta → navegador exibe o conteúdo.

---

# AULA 52 — URL, DOMÍNIO, IP E PORTA

## Ensinar

- URL;
- scheme;
- host;
- domínio;
- IP;
- porta;
- path;
- query string.

## Exemplo base

`https://exemplo.com:443/cursos?modulo=4`

Explicar:

- `https` → scheme;
- `exemplo.com` → host/domínio;
- `443` → porta;
- `/cursos` → path;
- `modulo=4` → query.

## Regra conceitual

Domínio e IP não são a mesma coisa. Um domínio é um nome legível que pode ser resolvido para um endereço IP. A porta identifica um serviço/processo de rede no host.

---

# AULA 53 — INTRODUÇÃO AO HTTP

## Ensinar

- protocolo;
- HTTP;
- comunicação cliente-servidor;
- mensagem HTTP;
- método;
- recurso;
- stateless em nível introdutório.

## Ideia central

HTTP é um protocolo de aplicação usado para troca de mensagens entre clientes e servidores na Web.

Não aprofundar ainda métodos individuais; isso será tratado na Aula 58.

---

# AULA 54 — REQUEST E RESPONSE

## Ensinar

- request;
- response;
- headers;
- body;
- status code;
- separação entre metadados e conteúdo.

## Exemplo conceitual

Request:

```text
GET /alunos HTTP/1.1
Host: exemplo.com
Accept: application/json
```

Response:

```text
HTTP/1.1 200 OK
Content-Type: application/json

[{"id": 1, "nome": "Ana"}]
```

## Regra

Explicar que nem toda requisição ou resposta precisa ter body.

---

# AULA 55 — HTTP VERSUS HTTPS

## Ensinar

- HTTP;
- HTTPS;
- TLS;
- criptografia em trânsito;
- certificado em nível conceitual;
- integridade e autenticação do servidor em nível introdutório.

## Ideia central

HTTPS é HTTP protegido por TLS durante o transporte dos dados.

## Regra conceitual

Não dizer que “um site com HTTPS é totalmente seguro”. HTTPS protege a comunicação em trânsito, mas não corrige falhas da aplicação, senhas fracas, configurações ruins ou vulnerabilidades do servidor.

---

# AULA 56 — O QUE É UMA API

## Ensinar

- interface;
- API;
- contrato;
- cliente consumidor;
- servidor/provedor;
- endpoint.

---

# AULA 57 — REST E RECURSOS

## Ensinar

- REST;
- recurso;
- representação;
- endpoint;
- convenções de URLs;
- estilo arquitetural.

## Regra

REST não é protocolo.

---

# AULA 58 — MÉTODOS HTTP

## Ensinar

- GET;
- POST;
- PUT;
- PATCH;
- DELETE;
- semântica esperada de cada método.

## Regra

Não afirmar que um método HTTP determina obrigatoriamente uma operação de banco de dados.

---

# AULA 59 — JSON E CÓDIGOS DE STATUS

## Ensinar

- JSON;
- Python `dict` ≠ objeto JavaScript ≠ JSON;
- 200;
- 201;
- 204;
- 400;
- 401;
- 403;
- 404;
- 422;
- 500.

---

# AULA 60 — FETCH E CONSUMO DE API

## Ensinar

- `fetch()`;
- Promise em nível introdutório;
- `async`/`await`;
- `response.ok`;
- `response.json()`;
- tratamento básico de erros.

## Regra conceitual

Explicar que `fetch()` não rejeita a Promise apenas porque o servidor respondeu com HTTP 4xx ou 5xx. O código precisa verificar `response.ok` ou o status.

---

# CHECKPOINT FINAL DO MÓDULO 4

Ao terminar a Aula 60, o estudante deve conseguir marcar que:

- [ ] entendo os papéis de cliente e servidor;
- [ ] sei decompor uma URL em scheme, host, porta, path e query;
- [ ] diferencio domínio de endereço IP;
- [ ] entendo o papel básico de HTTP;
- [ ] sei diferenciar request e response;
- [ ] entendo headers, body e status code;
- [ ] sei explicar por que HTTPS usa TLS;
- [ ] sei explicar por que HTTPS não significa sistema totalmente seguro;
- [ ] entendo o que é uma API e um endpoint;
- [ ] entendo REST como estilo arquitetural;
- [ ] reconheço os principais métodos HTTP;
- [ ] diferencio Python dict, objeto JavaScript e JSON;
- [ ] reconheço os códigos de status estudados;
- [ ] consigo consumir conceitualmente uma API com `fetch`, `async`/`await` e `response.ok`.

# Regras de implementação no app

Para as Aulas 51–60:

- manter dicas e soluções escondidas inicialmente;
- incluir aula anterior e próxima;
- permitir marcar conclusão explicitamente;
- abrir a aula não altera progresso;
- incluir uma tarefa por aula;
- integrar cada aula ao Obsidian/Markdown;
- usar somente vídeos validados no currículo/repositório;
- não expor nem solicitar credenciais reais;
- não modificar o conteúdo pedagógico dos outros módulos durante esta implementação.
