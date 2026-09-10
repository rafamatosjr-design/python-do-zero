/* Validação simples do conteúdo do Python do Zero.
   Não depende de pacotes externos. Execute com: node scripts/validate-data.js */

const path = require('path');

global.window = global;

const root = path.resolve(__dirname, '..');
const lessonFiles = [
  'data.js',
  'data-11-15.js',
  'data-16-20.js',
  'data-21-25.js',
  'data-26-30.js',
  'data-31-35.js',
  'data-36-40.js',
  'data-41-45.js',
  'data-46-50.js',
  'data-51-55.js',
  'data-56-60.js',
  'data-61-65.js',
  'data-66-70.js',
  'data-71-75.js',
  'data-76-80.js',
  'data-81-85.js',
  'data-86-90.js',
  'data-91-95.js',
  'data-96-100.js',
  'data-101-105.js',
  'data-106-110.js',
  'data-111-115.js',
  'data-116-120.js'
];

for (const file of lessonFiles) {
  require(path.join(root, file));
}

const data = global.PDZ_DATA;
const errors = [];
const requiredFields = [
  'id','module','title','time','learn','importance','before','explanation','everyday',
  'programming','code','lineByLine','guided','exercise','challenge','findError','common',
  'summary','task','hint1','hint2','solution'
];

function fail(message) { errors.push(message); }

if (!data || !Array.isArray(data.modules) || !Array.isArray(data.lessons)) {
  fail('window.PDZ_DATA não foi carregado corretamente.');
} else {
  if (data.modules.length !== 12) fail(`Esperados 12 módulos; encontrados ${data.modules.length}.`);
  if (data.lessons.length !== 120) fail(`Esperadas 120 aulas; encontradas ${data.lessons.length}.`);

  const ids = data.lessons.map(lesson => lesson.id);
  const uniqueIds = new Set(ids);
  if (uniqueIds.size !== ids.length) fail('Existem IDs de aula duplicados.');

  for (let id = 1; id <= 120; id += 1) {
    if (!uniqueIds.has(id)) fail(`Aula ${id} está ausente.`);
  }

  for (const lesson of data.lessons) {
    for (const field of requiredFields) {
      const value = lesson[field];
      if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
        fail(`Aula ${lesson.id}: campo obrigatório “${field}” vazio ou ausente.`);
      }
    }
    if (!Number.isInteger(lesson.module) || lesson.module < 1 || lesson.module > 12) {
      fail(`Aula ${lesson.id}: módulo inválido (${lesson.module}).`);
    }
    if (!Array.isArray(lesson.learn)) fail(`Aula ${lesson.id}: “learn” precisa ser uma lista.`);
    if (lesson.video && !/^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]+$/.test(lesson.video)) {
      fail(`Aula ${lesson.id}: URL de vídeo fora do formato validado.`);
    }
  }

  for (const module of data.modules) {
    const match = String(module.lessons).match(/^(\d+)–(\d+)$/);
    if (!match) {
      fail(`Módulo ${module.id}: intervalo de aulas inválido (“${module.lessons}”).`);
      continue;
    }
    const expected = Number(match[2]) - Number(match[1]) + 1;
    const actual = data.lessons.filter(lesson => lesson.module === module.id).length;
    if (actual !== expected) fail(`Módulo ${module.id}: esperadas ${expected} aulas; encontradas ${actual}.`);
  }

  for (const lesson of data.lessons.filter(item => item.id >= 66)) {
    if (!lesson.findError.startsWith('EXEMPLO COM ERRO — NÃO COPIE COMO SOLUÇÃO')) {
      fail(`Aula ${lesson.id}: aviso de exemplo com erro não segue o padrão obrigatório.`);
    }
  }
}

if (errors.length) {
  console.error(`Validação falhou com ${errors.length} problema(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Validação concluída: 12 módulos, 120 aulas, IDs, campos, intervalos e vídeos estão consistentes.');
