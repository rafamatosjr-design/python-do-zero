# Módulo 11 — Segurança da Informação

**Aulas:** 111–115

## Objetivo

Apresentar fundamentos defensivos de segurança da informação para quem desenvolve aplicações. O foco é compreender riscos, controles, autenticação, autorização e boas práticas de desenvolvimento seguro, sem ensinar exploração ofensiva de sistemas reais.

## Regras do módulo

- Todo conteúdo deve ser defensivo e educacional.
- Explicar termos antes de usá-los como conhecimento presumido.
- Não ensinar exploração de sistemas reais, bypass de controles ou técnicas de ataque operacional.
- Diferenciar autenticação de autorização.
- Não ensinar autenticação caseira insegura como padrão.
- Reforçar validação no servidor, princípio do menor privilégio, proteção de segredos, atualização de dependências, logs, backups e tratamento seguro de erros.
- Exemplos SQL devem usar consultas parametrizadas ou abstrações seguras; nunca concatenar entrada de usuário em SQL.
- XSS deve ser abordado pela ótica de prevenção, codificação/escape de saída e uso seguro do DOM.
- Utilizar o OWASP Top 10:2025 como referência conceitual atual.
- Quando não houver vídeo validado na documentação, usar exatamente: “Não há vídeo complementar selecionado para esta aula.”

## Aula 111 — Tríade CIA

Conteúdos:

- segurança da informação;
- ativo;
- confidencialidade;
- integridade;
- disponibilidade;
- controles;
- incidentes.

Exemplo: um sistema escolar deve restringir notas a pessoas autorizadas, impedir alterações indevidas e continuar disponível quando necessário.

## Aula 112 — Ativo, ameaça, vulnerabilidade, risco e controle

Conteúdos:

- ativo;
- ameaça;
- vulnerabilidade;
- risco;
- controle;
- diferença entre vulnerabilidade e incidente.

Trabalhar raciocínio de risco sem fórmulas rígidas universais.

## Aula 113 — Autenticação e autorização

Conteúdos:

- autenticação: confirmar identidade;
- autorização: decidir o que a identidade autenticada pode fazer;
- sessão;
- token em nível conceitual;
- autorização deve ser verificada no servidor;
- princípio do menor privilégio.

Não construir mecanismo de autenticação próprio simplificado como padrão de produção.

## Aula 114 — Desenvolvimento seguro

Conteúdos:

- validação de entrada;
- autorização no servidor;
- menor privilégio;
- segredos fora do código e do Git;
- dependências atualizadas;
- logs sem expor dados sensíveis;
- backups;
- mensagens de erro seguras;
- consultas SQL parametrizadas;
- prevenção de XSS pela renderização segura de conteúdo.

## Aula 115 — OWASP Top 10:2025

Apresentar de forma conceitual e defensiva as categorias:

1. Broken Access Control;
2. Security Misconfiguration;
3. Software Supply Chain Failures;
4. Cryptographic Failures;
5. Injection;
6. Insecure Design;
7. Authentication Failures;
8. Software or Data Integrity Failures;
9. Security Logging and Alerting Failures;
10. Mishandling of Exceptional Conditions.

O objetivo é reconhecer classes de risco e pensar em prevenção. Não incluir procedimentos ofensivos contra sistemas reais.