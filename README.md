# Python do Zero

Plataforma pessoal de estudos de programação do absoluto zero ao desenvolvimento Full Stack.

## Estado atual

A base do aplicativo está pronta com:

- Início;
- Curso;
- Tarefas;
- Vídeos;
- Obsidian;
- Progresso;
- Módulo 1 visível;
- Aulas 1 a 5 implementadas;
- progresso persistente no navegador;
- tarefas persistentes;
- dicas e soluções escondidas;
- integração básica com Obsidian por `obsidian://`;
- cópia de notas em Markdown como alternativa;
- layout responsivo e acessível.

## Como abrir

O aplicativo é estático e não precisa instalar dependências.

1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador.

Para desenvolvimento, também pode ser servido por qualquer servidor HTTP local simples.

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

O currículo oficial possui 120 aulas em 12 módulos. Não antecipar conteúdos nem inventar aulas fora da documentação.
