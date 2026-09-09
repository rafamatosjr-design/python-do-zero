# Módulo 5 — Back-end com FastAPI

**Aulas:** 61–70

## Objetivo do módulo

Apresentar o papel do back-end e construir uma API CRUD simples com FastAPI, ainda usando dados em memória. O estudante deve compreender rotas, parâmetros, corpo da requisição, validação, códigos de status e tratamento de erros antes de conectar banco de dados.

## Regras pedagógicas

- manter a mesma estrutura visual e pedagógica dos módulos anteriores;
- explicar todo termo técnico antes de utilizá-lo como conhecimento presumido;
- usar Python como linguagem do back-end;
- usar FastAPI conforme a documentação oficial atual;
- explicar ambiente virtual e isolamento de dependências;
- deixar claro que modelo Pydantic de entrada não é tabela de banco de dados;
- não antecipar PostgreSQL, ORM, autenticação ou deploy;
- usar dados em memória no projeto deste módulo;
- quando não houver vídeo validado, mostrar: “Não há vídeo complementar selecionado para esta aula.”

## Aula 61 — O papel do back-end

Ensinar:
- back-end;
- servidor;
- regra de negócio;
- validação;
- persistência como conceito;
- API;
- relação entre front-end e back-end.

Ideia central: o back-end processa regras e dados no servidor e expõe funcionalidades ao cliente, muitas vezes por uma API.

## Aula 62 — Primeiros passos com FastAPI

Ensinar:
- framework;
- FastAPI;
- projeto Python;
- ambiente virtual;
- dependências;
- instalação;
- arquivo `main.py`;
- instância `FastAPI`;
- servidor de desenvolvimento.

Referência atual: a documentação oficial recomenda `uv` como fluxo principal, com `uv add "fastapi[standard]"` e execução via `uv run fastapi dev`. Também é válido explicar `python -m venv` + `pip install "fastapi[standard]"` como alternativa manual.

## Aula 63 — Primeira rota GET

Ensinar:
- rota;
- path;
- operação de rota;
- decorator `@app.get()`;
- função de rota;
- retorno em dicionário Python convertido em resposta JSON.

Exemplo base:
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def inicio():
    return {"mensagem": "Olá, API!"}
```

## Aula 64 — Parâmetros de path e query

Ensinar:
- path parameter;
- query parameter;
- anotação de tipo;
- conversão/validação automática introdutória.

Exemplo base:
```python
@app.get("/alunos/{aluno_id}")
def buscar_aluno(aluno_id: int, ativo: bool = True):
    return {"id": aluno_id, "ativo": ativo}
```

## Aula 65 — Corpo da requisição e Pydantic

Ensinar:
- request body;
- modelo de dados;
- Pydantic;
- `BaseModel`;
- validação;
- tipos obrigatórios e opcionais em nível introdutório.

Exemplo base:
```python
from pydantic import BaseModel

class AlunoEntrada(BaseModel):
    nome: str
    idade: int

@app.post("/alunos")
def criar_aluno(aluno: AlunoEntrada):
    return aluno
```

Regra conceitual: um modelo Pydantic descreve e valida dados recebidos/enviados; ele não é automaticamente uma tabela de banco de dados.

## Aula 66 — POST e criação de recursos

Ensinar criação de recurso, `POST`, status `201 Created` e retorno adequado.

## Aula 67 — PUT e PATCH

Ensinar atualização completa versus parcial em nível introdutório, sem transformar a diferença em regra universal de banco de dados.

## Aula 68 — DELETE

Ensinar remoção de recurso e possíveis respostas, incluindo `204 No Content` quando apropriado.

## Aula 69 — Erros e códigos de status

Ensinar `HTTPException`, 400, 404 e outros códigos já estudados quando fizerem sentido.

## Aula 70 — Projeto CRUD em memória

Construir API de alunos com:
- `GET /alunos`;
- `GET /alunos/{id}`;
- `POST /alunos`;
- `PATCH /alunos/{id}`;
- `DELETE /alunos/{id}`.

Usar lista/dicionários em memória. Não usar banco de dados ainda.

## Checkpoint final

Ao concluir a Aula 70, o estudante deve conseguir explicar o papel do back-end, criar uma aplicação FastAPI, definir rotas, usar parâmetros de path/query, validar body com Pydantic, criar endpoints CRUD e retornar erros/status adequados.

## Vídeo validado

FastAPI: https://www.youtube.com/watch?v=R26iojTwUv8
