# MÓDULO 01 — FUNDAMENTOS DE PROGRAMAÇÃO E PYTHON

## Identificação

- Módulo: 1
- Aulas: 1–20
- Semanas: 1–4
- Nível: iniciante absoluto
- Linguagem principal: Python
- Tempo médio: 50–60 minutos por aula

Este documento define o conteúdo pedagógico detalhado do Módulo 1.

Antes de implementar qualquer aula deste módulo, o agente deve ler:

1. `docs/regras-do-app.md`
2. `docs/curriculo.md`
3. `docs/modulo-01.md`

Não antecipar conteúdos do Módulo 2.

---

# OBJETIVO DO MÓDULO

Ao final deste módulo, o estudante deverá conseguir:

- explicar o que é programação;
- compreender algoritmos;
- reconhecer entrada, processamento e saída;
- criar e executar programas Python;
- utilizar variáveis;
- trabalhar com tipos básicos;
- receber dados com `input()`;
- realizar cálculos;
- utilizar condições;
- utilizar repetições;
- trabalhar com listas, tuplas, conjuntos e dicionários;
- criar funções;
- desenvolver um pequeno sistema no terminal.

---

# FORMATO DAS AULAS

Sempre que aplicável, cada aula deve apresentar:

1. O que você vai aprender
2. Por que isso é importante
3. Antes de começar
4. Explicação
5. Exemplo cotidiano
6. Exemplo em programação
7. Código
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

- o estudante deve digitar o código sempre que possível;
- não presumir conhecimento de termos ainda não ensinados;
- exemplos com erro proposital devem ser claramente identificados;
- vídeos são complementares e nunca substituem a explicação da aula.

---

# SEMANA 1 — PRIMEIROS CONCEITOS

# AULA 1 — O QUE É PROGRAMAÇÃO?

## Ensinar

- computador;
- hardware;
- software;
- programa;
- programação;
- código-fonte;
- linguagem de programação;
- algoritmo;
- entrada;
- processamento;
- saída.

## Ideia central

Programar significa criar instruções que podem ser executadas pelo computador.

Utilizar inicialmente situações cotidianas para explicar sequência de instruções.

## Modelo fundamental

Entrada → Processamento → Saída

## Exemplo cotidiano

Preparo de café. Mostrar que alterar a ordem de determinados passos pode alterar ou impedir o resultado esperado.

## Exemplo de entrada, processamento e saída

Calculadora:

- Entrada: 10 e 5
- Processamento: 10 + 5
- Saída: 15

## Primeiro contato com código

Mostrar apenas como demonstração:

```python
print("Olá, mundo!")
```

Não exigir ainda que o estudante compreenda toda a sintaxe.

## Prática

Pedir que o estudante identifique entrada, processamento e saída em situações do cotidiano.

## Exercícios

Incluir exercícios conceituais sobre hardware, software, programa, algoritmo e entrada/processamento/saída.

## Desafio

Descrever em passos um algoritmo cotidiano simples.

## Encontre o erro

Apresentar uma sequência cotidiana fora de ordem para que o estudante identifique o problema.

## Revisão

O estudante deve conseguir explicar, com suas palavras, o que é programar e o que é um algoritmo.

---

# AULA 2 — COMO O COMPUTADOR EXECUTA UM PROGRAMA

## Ensinar

- CPU;
- memória RAM;
- armazenamento;
- sistema operacional;
- programa;
- processo;
- instrução;
- interpretador.

## Ideia central

O código-fonte precisa ser interpretado ou transformado em instruções que o computador consiga executar.

## Exemplo cotidiano

Comparar a execução de um programa a uma cozinha: receita como instruções, bancada como espaço de trabalho temporário e despensa como armazenamento persistente, deixando claro que é apenas uma analogia.

## Explicar

- CPU executa instruções;
- RAM guarda temporariamente dados em uso;
- armazenamento mantém arquivos mesmo após desligar;
- sistema operacional gerencia recursos e programas;
- um programa em execução é um processo;
- o interpretador Python lê e executa o código Python.

## Prática

Classificar exemplos como CPU, RAM, armazenamento ou sistema operacional.

## Exercícios

Questões de associação e explicação curta.

## Desafio

Explicar, em etapas simples, o que acontece entre clicar para executar um arquivo Python e ver uma saída na tela.

## Encontre o erro

Corrigir afirmações como “RAM é o local onde os arquivos ficam salvos permanentemente”.

---

# AULA 3 — PREPARANDO O PYTHON

## Ensinar

- Python;
- interpretador;
- VS Code;
- arquivo `.py`;
- terminal;
- execução de um programa.

## Objetivo prático

Preparar o ambiente para escrever e executar o primeiro arquivo Python.

## Explicar

- Python é a linguagem principal do início do curso;
- o interpretador executa programas Python;
- VS Code é um editor de código;
- arquivos Python normalmente usam extensão `.py`;
- terminal é uma interface textual para executar comandos.

## Prática guiada

Orientar criação de uma pasta de estudos, criação de `aula03.py` e execução do arquivo.

Não introduzir comandos avançados de terminal nesta aula.

## Exercícios

Identificar qual ferramenta cumpre cada função: Python, interpretador, VS Code, arquivo `.py`, terminal.

## Desafio

Criar um arquivo Python e executá-lo sem copiar um nome de arquivo pronto.

## Encontre o erro

Exemplos com extensão incorreta ou tentativa de executar arquivo inexistente.

---

# AULA 4 — PRIMEIRO PROGRAMA EM PYTHON

## Ensinar

- `print()`;
- strings;
- aspas;
- comentários;
- sintaxe inicial;
- erros de sintaxe básicos.

## Código principal

```python
print("Olá, mundo!")
```

Explicar caractere por caractere apenas no nível necessário para iniciante.

## Strings

Mostrar textos entre aspas simples e duplas.

```python
print('Bom dia')
print("Python")
```

## Comentários

```python
# Este é um comentário
print("Olá")
```

## Erro proposital

EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO

```python
print("Olá)
```

Explicar que as aspas não foram fechadas.

## Prática guiada

Criar um programa que mostre nome, uma mensagem de boas-vindas e uma frase sobre o objetivo de aprender programação.

## Exercícios

Criar pequenas saídas com `print()` e identificar erros simples de aspas e parênteses.

## Vídeo complementar validado

Curso em Vídeo — primeiros comandos em Python: `https://www.youtube.com/watch?v=31llNGKWDdo`

---

# AULA 5 — ALGORITMOS E PENSAMENTO COMPUTACIONAL

## Ensinar

- decomposição de problemas;
- sequência;
- entrada;
- processamento;
- saída;
- pseudocódigo;
- resolução de problemas.

## Ideia central

Antes de programar, é útil dividir o problema e organizar uma sequência clara de passos.

## Exemplo cotidiano

Dividir a tarefa “preparar-se para sair de casa” em etapas menores.

## Exemplo de programação

Problema: calcular a média de duas notas.

Pseudocódigo:

```text
INÍCIO
  receber nota 1
  receber nota 2
  somar as notas
  dividir a soma por 2
  mostrar a média
FIM
```

Não utilizar ainda `input()` se isso exigir conhecimento não ensinado; o foco é o algoritmo.

## Projeto da semana

Criar o algoritmo para cálculo de média escolar usando entrada → processamento → saída.

## Revisão 1 — Aulas 1 a 5

Revisar:

- programação;
- hardware e software;
- CPU, RAM e armazenamento;
- Python e interpretador;
- `print()`;
- algoritmo;
- entrada, processamento e saída;
- pseudocódigo.

Incluir questões “Qual será a saída?” somente com sintaxe já ensinada e “Encontre o erro”.

---

# SEMANA 2 — DADOS E OPERAÇÕES

# AULA 6 — VARIÁVEIS

## Ensinar

- variável;
- valor;
- atribuição;
- nomes de variáveis;
- boas práticas.

## Exemplo

```python
nome = "Ana"
idade = 20
print(nome)
print(idade)
```

Explicar que `=` representa atribuição nesse contexto.

## Boas práticas

Usar nomes claros, sem espaços e sem começar por número.

## Prática

Criar variáveis para nome, cidade e idade.

## Exercícios

Identificar nomes válidos e inválidos e prever saídas simples.

## Encontre o erro

EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO

```python
2nome = "Ana"
```

---

# AULA 7 — TIPOS DE DADOS

## Ensinar

- `str`;
- `int`;
- `float`;
- `bool`;
- `None`;
- `type()`.

## Exemplos

```python
nome = "Ana"
idade = 20
altura = 1.65
matriculado = True
apelido = None
```

Explicar o significado de cada tipo com exemplos cotidianos.

## Prática

Usar `type()` para observar tipos de diferentes valores.

## Exercícios

Classificar valores e prever o resultado de `type()`.

---

# AULA 8 — ENTRADA DE DADOS

## Ensinar

- `input()`;
- conversão de tipos;
- `int()`;
- `float()`;
- f-strings.

## Exemplo

```python
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
print(f"Olá, {nome}! Você tem {idade} anos.")
```

Explicar que `input()` retorna texto e por que conversões podem ser necessárias.

## Prática

Programa simples que recebe nome e idade.

## Exercícios

Entradas de texto e número, conversões e f-strings.

---

# AULA 9 — OPERADORES

## Ensinar

- adição `+`;
- subtração `-`;
- multiplicação `*`;
- divisão `/`;
- divisão inteira `//`;
- resto `%`;
- potência `**`;
- comparação `==`, `!=`, `>`, `<`, `>=`, `<=`;
- precedência básica.

## Exemplos

```python
print(10 + 5)
print(10 / 2)
print(10 % 3)
print(2 ** 3)
print(10 > 5)
```

## Prática

Criar uma calculadora de duas entradas sem menu.

## Exercícios

Prever resultados e montar expressões.

---

# AULA 10 — OPERADORES LÓGICOS

## Ensinar

- `and`;
- `or`;
- `not`;
- expressões booleanas.

## Exemplos

```python
idade = 20
print(idade >= 18 and idade <= 60)
```

Explicar cada operador com situações simples.

## Projeto da semana

Calculadora básica e calculadora de desconto.

## Revisão 2 — Aulas 6 a 10

Revisar variáveis, tipos, entrada, conversão, operadores aritméticos, comparação e lógica.

Incluir “Qual será a saída?” e “Encontre o erro”.

---

# SEMANA 3 — DECISÕES E REPETIÇÕES

# AULA 11 — CONDIÇÕES COM `if`

## Ensinar

- condição;
- expressão booleana;
- `if`;
- blocos;
- indentação.

## Exemplo

```python
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Maior de idade")
```

Explicar que a indentação define o bloco associado à condição.

## Erro proposital

EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO

```python
if idade >= 18:
print("Maior de idade")
```

## Vídeo complementar validado

Curso em Vídeo — condições em Python: `https://www.youtube.com/watch?v=K10u3XIf1-Q`

---

# AULA 12 — `elif` E `else`

## Ensinar

- decisões alternativas;
- múltiplas condições;
- fluxo condicional.

## Exemplo

```python
nota = float(input("Digite a nota: "))

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
```

## Prática

Criar classificação simples por faixas.

## Vídeo complementar validado

Curso em Vídeo — condições em Python: `https://www.youtube.com/watch?v=K10u3XIf1-Q`

---

# AULA 13 — REPETIÇÕES COM `for`

## Ensinar

- repetição;
- `for`;
- `range()`;
- contador;
- iteração básica.

## Exemplo

```python
for numero in range(1, 6):
    print(numero)
```

Explicar início, limite e cada repetição.

## Prática

Mostrar números de 1 a 10 e uma pequena tabuada.

---

# AULA 14 — REPETIÇÕES COM `while`

## Ensinar

- `while`;
- condição de repetição;
- contador;
- atualização de variável;
- loop infinito.

## Exemplo

```python
contador = 1

while contador <= 5:
    print(contador)
    contador = contador + 1
```

Explicar por que esquecer de atualizar a variável pode criar loop infinito.

## Segurança didática

Sempre orientar como interromper um programa preso em repetição e não incentivar comandos destrutivos.

---

# AULA 15 — DESAFIO DE LÓGICA

## Projeto

Construir uma calculadora com menu utilizando apenas conceitos já ensinados:

- variáveis;
- `input()`;
- conversões;
- operadores;
- `if`;
- `elif`;
- `else`;
- `while`.

## Fluxo sugerido

```text
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
0 - Sair
```

## Revisão 3 — Aulas 11 a 15

Revisar decisões, indentação, `if`, `elif`, `else`, `for`, `range()`, `while` e prevenção de loop infinito.

---

# SEMANA 4 — ESTRUTURAS DE DADOS E FUNÇÕES

# AULA 16 — LISTAS

## Ensinar

- lista;
- elemento;
- índice;
- `append()`;
- `remove()`;
- `len()`;
- percorrer listas.

## Exemplo

```python
alunos = ["Ana", "Bruno", "Carla"]
alunos.append("Diego")

for aluno in alunos:
    print(aluno)
```

## Explicar

Índices começam em zero.

## Vídeo complementar validado

Curso em Vídeo — listas em Python: `https://www.youtube.com/watch?v=N1hTsbW50eM`

---

# AULA 17 — TUPLAS E CONJUNTOS

## Ensinar

- `tuple`;
- imutabilidade;
- `set`;
- elementos únicos;
- diferenças básicas entre lista, tupla e conjunto.

## Exemplos

```python
coordenada = (10, 20)
cores = {"azul", "verde", "azul"}
```

Explicar que conjuntos não são apropriados quando a ordem precisa ser preservada como parte principal do exemplo.

---

# AULA 18 — DICIONÁRIOS

## Ensinar

- chave;
- valor;
- acesso;
- alteração;
- inclusão;
- lista de dicionários.

## Exemplo

```python
aluno = {
    "nome": "Ana",
    "idade": 20,
    "nota": 8.5
}

print(aluno["nome"])
```

## Evolução

Mostrar uma lista de dicionários somente depois que o dicionário simples estiver compreendido.

---

# AULA 19 — FUNÇÕES

## Ensinar

- `def`;
- função;
- parâmetro;
- argumento;
- `return`;
- escopo introdutório;
- diferença entre `print()` e `return`.

## Exemplo

```python
def calcular_media(nota1, nota2):
    media = (nota1 + nota2) / 2
    return media

resultado = calcular_media(8, 6)
print(resultado)
```

Explicar claramente diferença entre parâmetro e argumento e entre retornar um valor e apenas mostrá-lo na tela.

---

# AULA 20 — PROJETO DO MÓDULO 1

## Projeto final

**Sistema Escolar no Terminal**

## Funcionalidades

- cadastrar aluno;
- listar alunos;
- buscar aluno;
- adicionar notas;
- calcular média;
- excluir aluno;
- menu interativo.

## Estrutura de dados

Utilizar lista de dicionários.

Exemplo conceitual:

```python
alunos = [
    {
        "nome": "Ana",
        "notas": [8.0, 7.5]
    }
]
```

## Limites do projeto

Usar somente Python puro e conceitos do Módulo 1.

Não utilizar:

- classes;
- arquivos;
- JSON;
- banco de dados;
- APIs;
- frameworks.

## Revisão final do Módulo 1

Revisar todos os conceitos das Aulas 1–20, com foco em conexão entre os assuntos e resolução de problemas.

Incluir:

- questões conceituais;
- “Qual será a saída?”;
- “Encontre o erro”;
- pequenos exercícios de código;
- desafio integrador.

---

# VÍDEOS COMPLEMENTARES VALIDOS NO MÓDULO 1

- Aula 4 — primeiros comandos em Python: `https://www.youtube.com/watch?v=31llNGKWDdo`
- Aulas 11 e 12 — condições em Python: `https://www.youtube.com/watch?v=K10u3XIf1-Q`
- Aula 16 — listas em Python: `https://www.youtube.com/watch?v=N1hTsbW50eM`

Para as demais aulas:

> Não há vídeo complementar selecionado para esta aula.

Nunca inventar outro link sem validação posterior.

---

# REFERÊNCIA TÉCNICA

A documentação oficial do Python pode ser utilizada como referência técnica. Ela não deve ser copiada como voz pedagógica principal, porque parte do pressuposto de algum conhecimento de programação.

---

# CHECKPOINT DO MÓDULO 1

Antes de avançar para o Módulo 2, verificar se o estudante consegue:

- explicar o que é programação e algoritmo;
- reconhecer entrada, processamento e saída;
- criar e executar um arquivo `.py`;
- utilizar `print()`;
- criar variáveis;
- reconhecer `str`, `int`, `float`, `bool` e `None`;
- utilizar `input()` e conversões;
- realizar operações;
- usar comparações e operadores lógicos;
- criar condições com `if`, `elif` e `else`;
- usar `for` e `while`;
- trabalhar com listas;
- compreender tuplas e conjuntos;
- trabalhar com dicionários;
- criar funções simples;
- explicar `return`;
- construir o Sistema Escolar no Terminal com os conceitos do módulo.

---

# REGRAS DE IMPLEMENTAÇÃO NO APLICATIVO

- As Aulas 1–20 devem aparecer no Módulo 1 e manter sua numeração.
- Abrir uma aula não significa concluí-la.
- A conclusão só ocorre pela ação explícita de marcar como concluída.
- Cada aula deve exibir aproximadamente 50–60 minutos como tempo estimado.
- Dicas e soluções começam ocultas.
- A navegação deve permitir aula anterior e próxima aula.
- A última aula estudada pode ser destacada como continuação recomendada.
- Anotações por aula devem ser persistentes quando essa funcionalidade estiver implementada.
- Não bloquear artificialmente aulas futuras.
- Não alterar módulos 2–12 durante a implementação deste documento.

---

# VERIFICAÇÃO PARA O AGENTE

Antes de finalizar qualquer implementação relacionada ao Módulo 1:

1. conferir `docs/regras-do-app.md`;
2. conferir `docs/curriculo.md`;
3. conferir este arquivo;
4. verificar se só o escopo solicitado foi alterado;
5. testar navegação;
6. testar conclusão e progresso quando aplicável;
7. testar persistência quando aplicável;
8. confirmar que nenhuma aula futura foi modificada indevidamente;
9. confirmar que nenhum conteúdo avançado foi antecipado;
10. informar resumidamente arquivos alterados e testes realizados.
