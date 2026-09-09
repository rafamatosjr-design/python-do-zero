# Módulo 6 — PostgreSQL e SQL

**Aulas:** 71–80

## Objetivo do módulo

Compreender persistência em banco de dados relacional, aprender fundamentos de PostgreSQL e praticar SQL antes de qualquer ORM. O estudante deve entender tabelas, chaves, relacionamentos e operações básicas de criação, leitura, atualização, exclusão, agregação e junções.

## Regras pedagógicas

- ensinar SQL antes de ORM;
- diferenciar SQL de PostgreSQL: SQL é linguagem; PostgreSQL é um SGBD relacional;
- explicar persistência antes de comandos SQL;
- não tratar chave primária como obrigatoriamente número inteiro sequencial;
- explicar chave estrangeira como referência entre tabelas;
- ensinar relacionamentos 1:1, 1:N e N:N, incluindo tabela associativa no N:N;
- alertar sobre UPDATE e DELETE sem WHERE;
- não incentivar `SELECT *` como padrão em consultas reais;
- usar exemplos simples com alunos, cursos e matrículas;
- quando não houver vídeo validado, mostrar: “Não há vídeo complementar selecionado para esta aula.”

## Aula 71 — Banco de dados, SGBD e persistência

Ensinar:
- dado;
- banco de dados;
- SGBD;
- persistência;
- memória temporária versus armazenamento persistente;
- por que aplicações usam banco de dados.

Ideia central: dados guardados apenas em memória desaparecem quando o programa encerra; um banco de dados permite persistência e organização estruturada.

## Aula 72 — PostgreSQL e SQL

Ensinar:
- PostgreSQL;
- SQL;
- SGBD relacional;
- servidor de banco de dados;
- cliente de banco de dados;
- diferença entre linguagem SQL e PostgreSQL.

Regra conceitual: PostgreSQL não é a linguagem SQL; ele é um sistema de gerenciamento de banco de dados que entende SQL e acrescenta seus próprios recursos.

## Aula 73 — Tabelas, linhas, colunas e tipos

Ensinar:
- tabela;
- linha/registro;
- coluna/campo;
- esquema;
- tipos básicos;
- `INTEGER`;
- `VARCHAR`/`TEXT`;
- `BOOLEAN`;
- `DATE`;
- `TIMESTAMP`.

## Aula 74 — Chave primária e chave estrangeira

Ensinar:
- primary key;
- foreign key;
- identidade de registro;
- referência entre tabelas;
- integridade referencial em nível introdutório.

Regra conceitual: chave primária não precisa ser obrigatoriamente um inteiro sequencial.

## Aula 75 — Relacionamentos entre tabelas

Ensinar:
- 1:1;
- 1:N;
- N:N;
- tabela associativa/de junção;
- exemplo `alunos`, `cursos`, `matriculas`.

## Aula 76 — CREATE TABLE e INSERT

Ensinar criação de tabelas e inserção de registros com SQL.

## Aula 77 — SELECT e WHERE

Ensinar seleção de colunas, filtros com `WHERE` e evitar uso indiscriminado de `SELECT *`.

## Aula 78 — UPDATE e DELETE

Ensinar atualização e exclusão com alerta explícito sobre ausência de `WHERE`.

## Aula 79 — Ordenação e funções de agregação

Ensinar:
- `ORDER BY`;
- `COUNT`;
- `SUM`;
- `AVG`;
- `MIN`;
- `MAX`;
- `GROUP BY`.

## Aula 80 — JOIN e projeto do módulo

Ensinar:
- `INNER JOIN`;
- `LEFT JOIN`;
- junção por chaves;
- projeto escolar com tabelas `alunos`, `cursos` e `matriculas`.

## Checkpoint final

Ao concluir a Aula 80, o estudante deve conseguir explicar persistência, diferenciar SQL de PostgreSQL, modelar tabelas simples com chaves e relacionamentos, criar registros, consultar, atualizar, excluir, agregar e combinar dados com JOIN.

## Vídeo validado

PostgreSQL/SQL: https://www.youtube.com/watch?v=9cAKQWodpvM
