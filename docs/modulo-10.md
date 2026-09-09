# Módulo 10 — Deploy, Domínios e DNS

**Aulas:** 101–110

## Objetivo
Compreender como uma aplicação sai do computador local e passa a ficar disponível na Internet, conhecer os papéis de servidores e serviços de nuvem, diferenciar ambientes de desenvolvimento, testes e produção e entender, em seguida, domínio e DNS.

## Regras do módulo
- Manter a progressão para iniciantes e explicar cada termo antes de pressupor conhecimento.
- Não tratar servidor apenas como “um computador especial”: servidor pode ser papel, software e infraestrutura.
- Diferenciar localhost de acesso por rede/Internet.
- Explicar cloud sem sugerir que “nuvem” significa ausência de infraestrutura física.
- Apresentar IaaS, PaaS e SaaS de forma introdutória.
- Distinguir claramente desenvolvimento, testes e produção.
- Em deploy, explicar dependências, comando de inicialização, logs, variáveis de ambiente, segredos e banco de produção.
- Nunca incluir segredos reais, senhas, tokens ou chaves em exemplos.
- Arquivos `.env` com segredos não devem ser versionados.
- Não sugerir banco local como banco de produção por padrão.
- Quando não houver vídeo validado, usar exatamente: “Não há vídeo complementar selecionado para esta aula.”

## Aula 101 — Localhost versus Internet
- localhost e loopback;
- aplicação executando apenas na própria máquina;
- diferença entre estar acessível localmente, na rede local e na Internet;
- noção de endereço de escuta/bind;
- relação com `127.0.0.1` e `0.0.0.0` em contexto introdutório;
- deixar claro que `0.0.0.0` como endereço de escuta não é um endereço público da Internet.

## Aula 102 — Servidores e VPS
- servidor como papel;
- software servidor;
- máquina/infraestrutura que hospeda serviços;
- cliente e servidor;
- VPS como servidor virtual privado;
- recursos como CPU, memória, armazenamento e rede;
- noção de processo sempre disponível;
- não tratar VPS como única forma de hospedar aplicações.

## Aula 103 — Cloud
- conceito de computação em nuvem;
- infraestrutura remota acessada sob demanda;
- IaaS;
- PaaS;
- SaaS;
- responsabilidade compartilhada em nível introdutório;
- diferenças conceituais entre os três modelos.

## Aula 104 — Ambientes
- desenvolvimento;
- testes;
- produção;
- dados e configurações separados por ambiente;
- evitar testes destrutivos em produção;
- bugs e mudanças devem ser validados antes de chegar ao ambiente produtivo.

## Aula 105 — Deploy
- deploy como processo de disponibilizar uma versão da aplicação em um ambiente de execução;
- dependências;
- comando de inicialização;
- logs;
- variáveis de ambiente;
- segredos;
- `.env` local e não versionado;
- banco de dados de produção;
- configuração diferente entre desenvolvimento e produção;
- noção de atualização/redeploy;
- nunca versionar credenciais.

## Aula 106 — Domínios
- registrador;
- domínio;
- TLD;
- subdomínio.

## Aula 107 — Como funciona o DNS
- resolver;
- root;
- TLD;
- servidor autoritativo;
- resolução de nomes em etapas.

## Aula 108 — Registros A e AAAA
- A → IPv4;
- AAAA → IPv6.

## Aula 109 — CNAME, MX, TXT e NS
- CNAME aponta para outro hostname, não diretamente para IP;
- MX para email;
- TXT;
- NS.

## Aula 110 — TTL, cache, subdomínios e HTTPS
- TTL;
- cache DNS;
- subdomínios;
- relação entre domínio e HTTPS;
- DNS e HTTPS resolvem problemas diferentes.
