# Módulo 9 — Linux

**Aulas:** 96–100

## Objetivo do módulo

Compreender a estrutura básica de um sistema Linux, navegar pelo sistema de arquivos, manipular arquivos e diretórios com segurança, entender permissões e usuários em nível introdutório, além de conhecer processos e variáveis de ambiente importantes para desenvolvimento e deploy.

## Regras pedagógicas

- explicar todo comando antes de usá-lo;
- não pressupor familiaridade com terminal;
- usar exemplos seguros e reversíveis;
- evitar `sudo` como solução automática;
- deixar claro que caminhos absolutos e relativos são conceitos diferentes;
- explicar `.` como diretório atual, `..` como diretório pai e `~` como diretório pessoal do usuário;
- explicar que permissão de execução em diretórios está relacionada à travessia/acesso ao diretório;
- ensinar permissões simbólicas antes de aprofundar a forma numérica;
- explicar `chmod 755` como leitura/escrita/execução do dono e leitura/execução para grupo e outros;
- apresentar `chown`, `ps`, `top` e `kill` apenas em laboratório seguro e introdutório;
- explicar variável de ambiente e `PATH` sem orientar armazenamento de segredos no código ou no repositório;
- não ensinar exclusões destrutivas ou comandos perigosos sem contexto e alerta;
- quando não houver vídeo validado, mostrar: “Não há vídeo complementar selecionado para esta aula.”

## Aula 96 — Estrutura de diretórios do Linux

Ensinar:
- diretório raiz `/`;
- `/home`;
- `/etc`;
- `/var`;
- `/usr`;
- `/tmp`;
- ideia de sistema de arquivos hierárquico.

Regra conceitual: `/` é a raiz do sistema de arquivos e não deve ser confundido com a pasta pessoal do usuário.

## Aula 97 — Caminhos absolutos e relativos

Ensinar:
- caminho absoluto;
- caminho relativo;
- `.`;
- `..`;
- `~`;
- mudança de diretório com `cd`.

Regra conceitual: um caminho absoluto começa a partir da raiz; um caminho relativo depende do diretório atual.

## Aula 98 — Navegação e manipulação de arquivos

Ensinar:
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

Regra de segurança: usar `rm` apenas em exemplos controlados e reforçar que exclusões podem não ir para uma lixeira.

## Aula 99 — Permissões no Linux

Ensinar:
- dono, grupo e outros;
- `r`, `w`, `x`;
- significado em arquivos e diretórios;
- `chmod` simbólico;
- `chmod` numérico;
- valores 4, 2 e 1;
- exemplo `chmod 755`.

Regra conceitual: em diretórios, `x` permite atravessar/acessar entradas quando as demais condições de permissão permitem.

## Aula 100 — Usuários, processos e ambiente

Ensinar:
- `chown` em nível introdutório;
- `ps`;
- `top`;
- `kill` em laboratório seguro;
- processo;
- PID;
- variável de ambiente;
- `PATH`;
- relação com desenvolvimento e deploy.

Regra de segurança: não incentivar uso indiscriminado de `sudo`, `kill -9` ou alteração de arquivos críticos do sistema.

## Checkpoint final

Ao concluir a Aula 100, o estudante deve conseguir explicar a estrutura básica do Linux, navegar por diretórios, manipular arquivos com comandos básicos, interpretar permissões, entender a forma simbólica e numérica de `chmod` e reconhecer processos e variáveis de ambiente essenciais para desenvolvimento.

## Vídeos

Não há vídeo complementar validado registrado para este módulo.
