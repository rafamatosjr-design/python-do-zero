# Python do Zero

Plataforma pessoal de estudos de programação do absoluto zero ao desenvolvimento Full Stack.

## Estado atual

O currículo está completo com **120 aulas em 12 módulos**.

A base do aplicativo inclui:

- Início;
- Curso;
- Tarefas;
- Vídeos;
- Obsidian;
- Progresso;
- 12 módulos disponíveis;
- 120 aulas implementadas;
- progresso persistente no navegador;
- tarefas persistentes;
- dicas e soluções escondidas;
- integração básica com Obsidian por `obsidian://`;
- cópia de notas em Markdown como alternativa;
- layout responsivo e acessível.

O projeto está na fase de **revisão final antes da publicação**. A inspeção de código está sendo concluída, mas ainda é necessário executar teste real no navegador antes de considerar a versão publicada validada.

## Como abrir

O aplicativo é estático e não precisa instalar dependências.

1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador.

Para desenvolvimento, também pode ser servido por qualquer servidor HTTP local simples.

## Publicação planejada

A primeira versão será publicada gratuitamente como site estático. A opção escolhida é GitHub Pages, sem domínio pago.

A publicação só deve ser ativada depois da revisão e do teste real no navegador.

## Obsidian

A área **Obsidian** substitui o antigo bloco de anotações interno.

O aplicativo não guarda senha, token ou chave de API. O nome do Vault, quando informado, fica salvo apenas no `localStorage` do navegador.

A integração básica usa o protocolo local do Obsidian para abrir/criar uma nota. Se o protocolo não estiver disponível, use o botão **Copiar Markdown** e cole a nota manualmente no Vault.

Estrutura sugerida das notas:

```text
Python do Zero/
└── Módulo 01/
    ├── Aula 01 - O que é programação.md
    ├── Aula 02 - Como o computador executa um programa.md
    └── ...
```

## Fonte de verdade

Antes de alterar conteúdo ou código, consulte:

1. `docs/regras-do-app.md`
2. `docs/curriculo.md`
3. o arquivo do módulo correspondente em `docs/`
4. `docs/revisao-final.md` durante a etapa de revisão

O currículo oficial possui 120 aulas em 12 módulos. Não antecipar conteúdos nem inventar aulas fora da documentação.