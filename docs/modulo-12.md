# MÓDULO 12 — CRIPTOGRAFIA E PROJETO FINAL

**Aulas:** 116–120

## Objetivo do módulo

Fechar o curso com fundamentos essenciais de criptografia aplicados à segurança de aplicações e integrar todo o percurso em um projeto Full Stack final. O foco é conceitual e defensivo, sem ensinar a criar algoritmos criptográficos próprios.

## Regras do módulo

- Diferenciar claramente criptografia, hash e codificação.
- Base64 não é criptografia.
- Não incentivar criação de algoritmos criptográficos caseiros.
- Criptografia simétrica e assimétrica devem ser apresentadas em nível conceitual.
- AES pode ser citado como exemplo moderno de criptografia simétrica.
- RSA e ECC podem ser citados como exemplos de criptografia assimétrica.
- Não ensinar a simplificação incorreta de que assinatura digital é apenas “criptografar com a chave privada”.
- Hashes de senha devem usar funções próprias para senhas, como Argon2id quando apropriado.
- Não usar MD5, SHA-1 ou SHA-256 puro como solução de armazenamento de senhas.
- Senhas nunca devem ser armazenadas em texto puro nem por criptografia reversível como padrão.
- Salt não é segredo.
- TLS/HTTPS deve ser explicado como proteção da comunicação em trânsito, com certificados digitais.
- Segredos devem ficar fora do repositório e ser fornecidos por variáveis de ambiente/plataforma.
- Todo exemplo de segurança é defensivo e educacional.
- Exemplos intencionalmente errados devem usar exatamente: `EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO`.
- Não inventar vídeos. Sem vídeo validado, usar o fallback do aplicativo.

### Aula 116 — Criptografia, hash e codificação

- plaintext;
- ciphertext;
- chave;
- criptografia;
- hash;
- codificação;
- Base64 não é criptografia.

### Aula 117 — Criptografia simétrica

- mesma chave para cifrar e decifrar;
- AES como exemplo conceitual;
- importância da proteção e distribuição da chave;
- não criar criptografia própria.

### Aula 118 — Criptografia assimétrica e assinaturas

- chave pública;
- chave privada;
- RSA;
- ECC;
- confidencialidade;
- assinatura digital;
- assinatura não deve ser reduzida a “criptografar com a chave privada”.

### Aula 119 — Hash de senhas, certificados e TLS

- função hash;
- salt;
- função própria para senhas;
- Argon2id como exemplo moderno;
- certificado digital;
- TLS;
- HTTPS;
- sem senha em texto puro, criptografia reversível, MD5, SHA-1 ou SHA-256 puro para armazenamento de senha.

### Aula 120 — Projeto Full Stack final

Construir conceitualmente um gerenciador de tarefas com:

- cadastro;
- login;
- logout;
- tarefas separadas por usuário;
- CRUD de tarefas;
- autorização no back-end;
- validação;
- hash seguro de senha;
- variáveis de ambiente;
- PostgreSQL;
- FastAPI;
- HTML/CSS/JavaScript;
- HTTPS;
- deploy;
- domínio/DNS quando aplicável;
- README;
- Git/GitHub.

Estrutura mínima de dados:

- `usuarios(id, nome, email, senha_hash, created_at)`
- `tarefas(id, usuario_id, titulo, descricao, status, created_at, updated_at)`

Endpoints conceituais mínimos:

- `POST /usuarios`
- `POST /login`
- `GET /tarefas`
- `POST /tarefas`
- `GET /tarefas/{id}`
- `PATCH /tarefas/{id}`
- `DELETE /tarefas/{id}`

O back-end deve garantir que cada pessoa só acesse as próprias tarefas. O projeto deve incluir tratamento seguro de erros, validação de entrada, consultas parametrizadas ou abstração segura equivalente, dependências atualizadas e segredos fora do código.

Arquitetura de encerramento:

`INTERNET → DOMÍNIO → DNS → HTTPS → SERVIDOR → FRONT-END/BACK-END → API → POSTGRESQL`
