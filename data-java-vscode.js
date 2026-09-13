(() => {
  const DATA = window.PDZ_DATA;

  function lesson(id, title, learn, explanation, code, task, video = null) {
    return {
      id, module: 3, title, time: '50–70 min',
      learn,
      importance: 'Esta aula amplia sua base de programação usando Java como segunda linguagem, sempre relacionando os conceitos ao que você já aprendeu em Python.',
      before: 'Use o VS Code como ambiente padrão. Compare a sintaxe com Python, mas concentre-se em entender como Java organiza tipos, classes e execução.',
      explanation,
      everyday: 'Pense em aprender um segundo idioma: muitas ideias já são conhecidas, mas a forma de escrever e algumas regras mudam.',
      programming: 'Você vai criar um arquivo Java no VS Code, executar pelo terminal integrado e comparar o resultado com a versão equivalente em Python quando isso ajudar.',
      code,
      lineByLine: 'Leia cada instrução identificando declaração, tipos, blocos entre chaves, ponto e vírgula e o fluxo de execução. Em Java, a estrutura costuma ser mais explícita do que em Python.',
      guided: 'Crie uma pasta exclusiva para esta aula no VS Code, digite o exemplo sem copiar automaticamente, execute e depois altere pelo menos um valor para observar o efeito.',
      exercise: `Reescreva o exemplo da Aula ${id} com valores escolhidos por você e explique o que cada parte faz.`,
      challenge: 'Crie uma pequena variação do programa sem consultar a solução primeiro.',
      findError: 'Procure por erros de tipo, chaves, parênteses, ponto e vírgula, nomes de variáveis e lógica antes de executar.',
      common: 'Tentar escrever Java exatamente como Python, esquecer ponto e vírgula, confundir tipos e ignorar mensagens do compilador.',
      summary: `A Aula ${id} introduz ${title.toLowerCase()} em Java, sempre com prática direta no VS Code.`,
      task,
      video,
      hint1: 'Comece pela estrutura mínima que já funcionou na prática guiada.',
      hint2: 'Leia a mensagem de erro do terminal e confira a linha indicada.',
      solution: code
    };
  }

  const lessons = [
    lesson(31, 'Java: visão geral e comparação com Python', ['O que é Java', 'JDK, JVM e compilação', 'Diferenças iniciais entre Java e Python'], 'Java é uma linguagem fortemente tipada e normalmente compilada para bytecode executado pela JVM. Você já conhece a lógica; agora aprenderá uma sintaxe mais explícita.', 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Olá, Java!");\n    }\n}', 'Instalar/configurar o JDK, abrir o VS Code e executar o primeiro programa Java.'),
    lesson(32, 'Preparando Java no VS Code', ['JDK', 'Extensões Java', 'Terminal integrado', 'Compilar e executar'], 'O VS Code será o ambiente central. Você precisa do JDK instalado e das extensões adequadas para editar, compilar e executar Java com conforto.', 'javac Main.java\njava Main', 'Confirmar no terminal java --version e javac --version e executar Main.java.'),
    lesson(33, 'Variáveis e tipos primitivos', ['int', 'double', 'boolean', 'char', 'String', 'Tipagem estática'], 'Em Java, o tipo da variável é declarado explicitamente. Isso é uma diferença importante em relação ao Python.', 'int idade = 20;\ndouble nota = 9.5;\nboolean ativo = true;\nchar turma = \'A\';\nString nome = "Júlia";', 'Criar um cadastro simples com nome, idade, nota e situação ativa.'),
    lesson(34, 'Entrada e saída de dados', ['System.out.println', 'Scanner', 'nextLine', 'nextInt', 'nextDouble'], 'A classe Scanner permite receber dados digitados pelo usuário no terminal.', 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Nome: ");\n        String nome = sc.nextLine();\n        System.out.println("Olá, " + nome);\n        sc.close();\n    }\n}', 'Criar um programa que leia nome e idade e mostre uma mensagem completa.'),
    lesson(35, 'Operadores em Java', ['Aritméticos', 'Comparação', 'Lógicos', 'Atribuição'], 'Os operadores seguem ideias que você já viu em Python, com pequenas diferenças de sintaxe, como &&, || e !.', 'int a = 10;\nint b = 3;\nSystem.out.println(a + b);\nSystem.out.println(a > b);\nSystem.out.println(a > 0 && b > 0);', 'Criar uma calculadora simples de dois números.'),
    lesson(36, 'Condições com if, else if e else', ['if', 'else if', 'else', 'Blocos com chaves'], 'Condições escolhem caminhos do programa. Em Java, os blocos são delimitados por chaves.', 'int nota = 8;\nif (nota >= 7) {\n    System.out.println("Aprovado");\n} else if (nota >= 5) {\n    System.out.println("Recuperação");\n} else {\n    System.out.println("Reprovado");\n}', 'Criar um programa de classificação de média escolar.'),
    lesson(37, 'switch', ['switch', 'case', 'break', 'default'], 'switch é útil quando uma variável pode assumir opções bem definidas, como itens de menu.', 'int opcao = 2;\nswitch (opcao) {\n    case 1 -> System.out.println("Cadastrar");\n    case 2 -> System.out.println("Listar");\n    default -> System.out.println("Opção inválida");\n}', 'Criar um menu com pelo menos quatro opções.'),
    lesson(38, 'Laço for', ['for', 'contador', 'incremento', 'Repetição controlada'], 'for é indicado quando você conhece ou controla a quantidade de repetições.', 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}', 'Criar uma tabuada usando for.'),
    lesson(39, 'Laços while e do while', ['while', 'do while', 'Condição de parada'], 'while verifica a condição antes; do while executa pelo menos uma vez antes da verificação.', 'int numero = 1;\nwhile (numero <= 5) {\n    System.out.println(numero);\n    numero++;\n}', 'Criar um menu que continue até o usuário escolher sair.'),
    lesson(40, 'Arrays', ['Array', 'Índice', 'length', 'Percorrer valores'], 'Arrays armazenam vários valores do mesmo tipo em uma estrutura de tamanho definido.', 'int[] notas = {8, 7, 10};\nfor (int nota : notas) {\n    System.out.println(nota);\n}', 'Guardar cinco notas em um array e calcular a média.'),
    lesson(41, 'Métodos', ['Métodos', 'Parâmetros', 'Retorno', 'static'], 'Métodos organizam responsabilidades e permitem reutilizar lógica, de forma parecida com funções em Python.', 'public static int somar(int a, int b) {\n    return a + b;\n}', 'Criar métodos para somar, subtrair, multiplicar e dividir.'),
    lesson(42, 'Classes e objetos', ['Classe', 'Objeto', 'Atributos', 'Instância'], 'Java é fortemente orientado a objetos. Uma classe define características e comportamentos; um objeto é uma instância dessa classe.', 'class Aluno {\n    String nome;\n    double nota;\n}\n\nAluno aluno = new Aluno();\naluno.nome = "Ana";', 'Criar uma classe Livro e instanciar dois livros.'),
    lesson(43, 'Construtores e encapsulamento', ['Construtor', 'private', 'getters', 'setters'], 'Encapsulamento controla o acesso ao estado do objeto e ajuda a proteger regras internas.', 'class Aluno {\n    private String nome;\n\n    public Aluno(String nome) {\n        this.nome = nome;\n    }\n\n    public String getNome() {\n        return nome;\n    }\n}', 'Criar uma classe Produto com construtor e atributos privados.'),
    lesson(44, 'Herança', ['extends', 'Superclasse', 'Subclasse', 'Reutilização'], 'Herança permite especializar uma classe a partir de outra quando existe uma relação coerente entre elas.', 'class Pessoa {\n    String nome;\n}\n\nclass Professor extends Pessoa {\n    String disciplina;\n}', 'Criar Pessoa e duas subclasses coerentes.'),
    lesson(45, 'Polimorfismo e sobrescrita', ['Override', 'Polimorfismo', 'Métodos sobrescritos'], 'Polimorfismo permite que objetos relacionados respondam de maneiras diferentes ao mesmo método.', 'class Animal {\n    void emitirSom() { System.out.println("Som"); }\n}\nclass Cachorro extends Animal {\n    @Override\n    void emitirSom() { System.out.println("Au au"); }\n}', 'Criar duas subclasses que sobrescrevam o mesmo método.'),
    lesson(46, 'Interfaces e abstração', ['interface', 'implements', 'Contratos'], 'Interfaces descrevem comportamentos que classes se comprometem a implementar.', 'interface Avaliavel {\n    double calcularNota();\n}\n\nclass Prova implements Avaliavel {\n    public double calcularNota() { return 10.0; }\n}', 'Criar uma interface simples e duas implementações.'),
    lesson(47, 'Coleções: ArrayList', ['ArrayList', 'add', 'get', 'remove', 'size'], 'ArrayList oferece uma lista dinâmica, mais flexível do que um array de tamanho fixo.', 'import java.util.ArrayList;\n\nArrayList<String> nomes = new ArrayList<>();\nnomes.add("Ana");\nnomes.add("Bruno");\nSystem.out.println(nomes);', 'Criar uma lista dinâmica de tarefas.'),
    lesson(48, 'Map, Set e coleções', ['HashMap', 'HashSet', 'chave e valor', 'Valores únicos'], 'Map associa chaves a valores; Set armazena elementos sem repetição.', 'import java.util.HashMap;\n\nHashMap<String, Integer> notas = new HashMap<>();\nnotas.put("Ana", 9);\nSystem.out.println(notas.get("Ana"));', 'Criar um cadastro simples usando HashMap.'),
    lesson(49, 'Exceções em Java', ['try', 'catch', 'finally', 'Exception'], 'Exceções permitem tratar problemas previsíveis de forma controlada.', 'try {\n    int numero = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Número inválido");\n}', 'Criar uma entrada numérica com tratamento de erro.'),
    lesson(50, 'Projeto Java: sistema escolar no terminal', ['Projeto integrado', 'POO', 'Coleções', 'Métodos', 'Validação'], 'O projeto final do módulo reúne fundamentos, POO, coleções e tratamento de erros em um sistema pequeno e organizado.', 'class Aluno {\n    private String nome;\n    private double nota;\n    // construtor, getters e métodos\n}', 'Construir no VS Code um sistema escolar em Java com cadastro de alunos, notas, listagem e cálculo de média.')
  ];

  DATA.lessons.push(...lessons);
  DATA.lessons.sort((a, b) => a.id - b.id);
})();