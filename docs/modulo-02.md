# MÓDULO 02 — PYTHON INTERMEDIÁRIO, ARQUIVOS, POO, TERMINAL E GIT

## Identificação

- Módulo: 2
- Aulas: 21–35
- Semanas: 5–7
- Nível: iniciante em progressão para intermediário
- Linguagem principal: Python
- Ferramentas: terminal, Git e GitHub
- Tempo médio: 50–60 minutos por aula

Este documento define o conteúdo pedagógico detalhado do Módulo 2.

Antes de implementar qualquer aula deste módulo, o agente deve ler:

1. `docs/regras-do-app.md`
2. `docs/curriculo.md`
3. `docs/modulo-02.md`

Não antecipar conteúdos do Módulo 3.

---

# OBJETIVO DO MÓDULO

Ao final deste módulo, o estudante deverá conseguir:

- organizar programas em funções menores e com responsabilidades claras;
- dividir código em módulos e arquivos Python;
- ler, escrever e acrescentar conteúdo em arquivos de texto;
- salvar e recuperar estruturas simples usando JSON;
- entender erros, exceções e traceback;
- usar `try`, `except`, `else` e `finally` com tratamento específico;
- compreender os fundamentos de Programação Orientada a Objetos;
- criar classes, instâncias, atributos e métodos;
- compreender o papel de `self` e `__init__`;
- aplicar encapsulamento em nível introdutório;
- usar comandos básicos de terminal com segurança;
- compreender controle de versão com Git;
- diferenciar Git de GitHub;
- criar commits, trabalhar com branches e entender merge;
- concluir um pequeno projeto versionado com Git e GitHub.

---

# FORMATO DAS AULAS

Sempre que aplicável, cada aula deve apresentar:

1. O que você vai aprender
2. Por que isso é importante
3. Antes de começar
4. Explicação
5. Exemplo cotidiano
6. Exemplo em programação
7. Código ou comandos
8. Explicação linha por linha
9. Prática guiada
10. Agora é sua vez
11. Exercícios
12. Desafio
13. Encontre o erro
14. Erros comuns
15. Resumo
16. Checklist
17. Tarefa
18. Vídeo complementar
19. Referências

Para exercícios com solução:

`Ver uma dica → Ver segunda dica → Ver solução comentada`

A solução permanece escondida inicialmente.

Regras adicionais:

- o estudante deve digitar o código e os comandos sempre que possível;
- explicar todo termo novo antes de utilizá-lo como conhecimento presumido;
- exemplos propositalmente errados devem ser marcados como `EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO`;
- comandos com potencial de apagar arquivos devem receber aviso claro;
- não incentivar uso indiscriminado de `sudo`;
- não usar credenciais reais, tokens, API keys ou segredos;
- vídeos são complementares e não substituem a aula.

---

# SEMANA 5 — ORGANIZAÇÃO, ARQUIVOS E PERSISTÊNCIA

# AULA 21 — ORGANIZANDO PROGRAMAS COM FUNÇÕES

## Ensinar

- divisão de problemas;
- responsabilidade de funções;
- reutilização;
- organização do código;
- refatoração básica.

## Ideia central

Programas maiores ficam mais claros quando são divididos em funções pequenas, cada uma com uma responsabilidade compreensível.

## Exemplo

Partir de um programa com várias tarefas misturadas e reorganizar em funções como `mostrar_menu()`, `calcular_media()` e `exibir_resultado()`.

## Limite

Não introduzir orientação a objetos ainda.

---

# AULA 22 — MÓDULOS E `import`

## Ensinar

- módulo;
- `import`;
- biblioteca padrão;
- módulos próprios;
- múltiplos arquivos.

## Exemplo

Separar funções de cálculo em `calculos.py` e utilizá-las em `main.py`.

Explicar a diferença entre um arquivo Python usado diretamente e um módulo importado, sem aprofundar em pacotes.

---

# AULA 23 — ARQUIVOS

## Ensinar

- arquivo de texto;
- abertura e fechamento;
- `with open(..., encoding="utf-8")`;
- leitura;
- escrita;
- anexar conteúdo;
- modos `r`, `w` e `a`.

## Exemplo base

```python
with open("anotacoes.txt", "w", encoding="utf-8") as arquivo:
    arquivo.write("Primeira anotação\n")
```

Explicar que `w` pode substituir conteúdo existente e que `a` acrescenta ao final.

## Segurança didática

Usar somente arquivos criados para exercício. Nunca orientar o estudante a testar exclusão ou sobrescrita em arquivos pessoais importantes.

---

# AULA 24 — JSON

## Ensinar

- estrutura JSON;
- serialização;
- desserialização;
- `json.dump()`;
- `json.load()`;
- diferença entre dicionário Python e JSON.

## Exemplo base

Salvar uma lista de dicionários em `dados.json` e depois carregá-la novamente.

Destacar: dicionário Python é uma estrutura da linguagem; JSON é um formato textual de intercâmbio de dados.

---

# AULA 25 — ERROS E EXCEÇÕES

## Ensinar

- erro;
- exceção;
- traceback;
- `try`;
- `except`;
- `else`;
- `finally`;
- tratamento específico de erros.

## Exemplo base

```python
try:
    numero = int(input("Digite um número: "))
except ValueError:
    print("Digite um número inteiro válido.")
else:
    print(f"Você digitou {numero}.")
finally:
    print("Fim da tentativa.")
```

## Regra

Evitar `except:` ou `except Exception:` como padrão didático quando é possível tratar uma exceção específica.

## Vídeo complementar validado

Curso em Vídeo — exceções em Python: `https://www.youtube.com/watch?v=xz2B3bfNjEk`

## Checkpoint 1 — Aulas 21 a 25

Revisar funções, módulos, arquivos, JSON e exceções. Incluir “Qual será a saída?” e “Encontre o erro”.

**Projeto da semana:** gerenciador de contatos com persistência simples em JSON, usando apenas conceitos já ensinados.

---

# SEMANA 6 — PROGRAMAÇÃO ORIENTADA A OBJETOS

# AULA 26 — INTRODUÇÃO À POO

## Ensinar

- paradigma;
- objeto;
- classe;
- dados;
- comportamento;
- modelagem.

## Ideia central

POO é uma forma de organizar programas modelando entidades com dados e comportamentos relacionados.

Não apresentar POO como a única forma “correta” de programar.

---

# AULA 27 — CLASSES E OBJETOS

## Ensinar

- `class`;
- instância;
- atributos;
- criação de objetos.

## Exemplo

Criar uma classe simples `Aluno` e duas instâncias diferentes.

---

# AULA 28 — ATRIBUTOS, MÉTODOS E `self`

## Ensinar

- atributo;
- método;
- comportamento;
- `self`.

## Exemplo

Adicionar um método `apresentar()` a `Aluno` e explicar que `self` referencia a própria instância em uso.

---

# AULA 29 — `__init__` E ENCAPSULAMENTO BÁSICO

## Ensinar

- inicialização de objetos;
- `__init__`;
- atributos internos;
- convenção `_nome`;
- encapsulamento introdutório.

## Regra conceitual

Explicar que `_nome` é uma convenção de atributo interno em Python, não uma barreira rígida de privacidade.

---

# AULA 30 — PROJETO COM POO

## Projeto

Transformar o Sistema Escolar do Módulo 1 usando classes iniciais:

- `Aluno`;
- `Turma`;
- `Curso`.

O projeto deve reutilizar os conhecimentos já estudados e demonstrar por que classes podem ajudar a organizar responsabilidades.

## Checkpoint 2 — Aulas 26 a 30

Revisar paradigma, classe, objeto, instância, atributo, método, `self`, `__init__` e encapsulamento introdutório.

## Vídeo complementar validado

Curso em Vídeo — POO em Python: `https://www.youtube.com/watch?v=dJyZmwLpxnE`

---

# SEMANA 7 — TERMINAL E CONTROLE DE VERSÃO

# AULA 31 — INTRODUÇÃO AO TERMINAL

## Ensinar

- terminal;
- shell;
- diretório;
- caminho;
- `pwd`;
- `cd`;
- `ls`.

## Prática

Navegar por uma pasta de estudos criada especificamente para o curso.

Não presumir Linux instalado; explicar que os comandos apresentados são comuns em ambientes Unix-like e que ferramentas/terminais podem variar no Windows.

---

# AULA 32 — ARQUIVOS PELO TERMINAL

## Ensinar

- `mkdir`;
- `touch`;
- `cp`;
- `mv`;
- `rm`;
- cuidados com exclusão.

## Segurança didática

`rm` deve ser apresentado apenas em pasta de laboratório criada para a aula. Explicar que exclusões pelo terminal podem não ir para a lixeira e não usar opções destrutivas como demonstração para iniciante.

---

# AULA 33 — GIT E CONTROLE DE VERSÃO

## Ensinar

- Git;
- repositório;
- working tree;
- staging;
- commit;
- `git init`;
- `git status`;
- `git add`;
- `git commit`;
- `git log`.

## Ideia central

Git registra versões do projeto localmente e permite acompanhar mudanças de forma organizada.

## Vídeo complementar validado

Git: `https://www.youtube.com/watch?v=xEKo29OWILE`

---

# AULA 34 — GITHUB

## Ensinar

- Git versus GitHub;
- repositório local;
- repositório remoto;
- `origin`;
- `push`;
- `pull`;
- `clone`;
- `.gitignore`.

## Regra conceitual

Git é o sistema de controle de versão. GitHub é uma plataforma que hospeda e colabora sobre repositórios Git.

## Segurança

Nunca colocar senhas, tokens, chaves privadas, arquivos `.env` ou segredos no repositório. Mostrar o papel do `.gitignore`.

---

# AULA 35 — BRANCHES E MERGE

## Ensinar

- branch;
- `main`;
- criação de branch;
- troca de branch;
- `git switch` como comando principal;
- merge;
- conflitos em nível introdutório.

## Prática

Criar uma branch de exercício, fazer uma pequena alteração, criar commit e mesclar de volta em ambiente controlado.

## Projeto final do módulo

**Sistema de Contatos versionado com Git e GitHub**.

Requisitos pedagógicos:

- código organizado em funções e módulos;
- persistência em JSON;
- tratamento básico de exceções;
- versionamento com commits compreensíveis;
- repositório Git;
- remoto GitHub;
- `.gitignore` quando necessário;
- pelo menos uma branch de trabalho antes do merge final.

Não antecipar HTML, CSS, JavaScript, APIs web, FastAPI ou banco de dados.

---

# CHECKPOINT FINAL DO MÓDULO 2

Ao terminar a Aula 35, o estudante deve conseguir marcar que:

- [ ] consigo dividir um programa em funções menores;
- [ ] sei criar e importar um módulo Python simples;
- [ ] sei ler e escrever arquivos de texto com `with open`;
- [ ] entendo a diferença entre dicionário Python e JSON;
- [ ] sei salvar e carregar JSON;
- [ ] consigo interpretar um traceback simples;
- [ ] sei tratar exceções específicas;
- [ ] entendo classe, objeto e instância;
- [ ] sei criar atributos e métodos;
- [ ] entendo `self` e `__init__` no nível introdutório;
- [ ] sei navegar por diretórios no terminal;
- [ ] conheço os riscos de comandos de exclusão;
- [ ] entendo working tree, staging e commit;
- [ ] sei diferenciar Git de GitHub;
- [ ] entendo `push`, `pull`, `clone` e `origin`;
- [ ] sei por que segredos não devem ser versionados;
- [ ] entendo branch e merge em nível introdutório;
- [ ] concluí o projeto do módulo usando apenas conteúdos ensinados até aqui.

---

# REGRAS DE IMPLEMENTAÇÃO NO APP

Para as Aulas 21–35:

- manter a mesma estrutura visual e pedagógica do Módulo 1;
- manter dicas e soluções escondidas inicialmente;
- incluir botão de aula anterior e próxima;
- permitir marcar aula como concluída explicitamente;
- abrir a aula não pode alterar progresso;
- incluir tarefa por aula;
- integrar cada aula com a área Obsidian/Markdown;
- usar somente vídeos validados neste documento ou no currículo;
- quando não houver vídeo, mostrar: “Não há vídeo complementar selecionado para esta aula.”;
- exemplos de terminal devem ser seguros para iniciante;
- não expor nem solicitar credenciais reais;
- não modificar o conteúdo pedagógico dos Módulos 1 ou 3–12 durante esta implementação.
