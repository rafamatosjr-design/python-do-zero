const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const appPath = path.join(root, 'app.js');
const cssPath = path.join(root, 'styles.css');

function fail(message) {
  console.error(`ERRO: ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`OK: ${message}`);
}

for (const file of [indexPath, appPath, cssPath]) {
  if (!fs.existsSync(file)) fail(`arquivo obrigatório ausente: ${path.basename(file)}`);
}
if (process.exitCode) process.exit(process.exitCode);

const html = fs.readFileSync(indexPath, 'utf8');
const app = fs.readFileSync(appPath, 'utf8');

const requiredIds = ['main-nav', 'sidebar-progress-label', 'sidebar-progress-bar', 'conteudo', 'app', 'toast'];
for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) fail(`index.html não contém #${id}`);
}
if (!process.exitCode) ok('estrutura HTML mínima encontrada');

const scripts = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
if (!scripts.length) fail('nenhum script carregado no index.html');

for (const src of scripts) {
  const filePath = path.join(root, src);
  if (!fs.existsSync(filePath)) fail(`script referenciado não existe: ${src}`);
}

if (scripts[scripts.length - 1] !== 'app.js') fail('app.js precisa ser o último script carregado');
if (scripts[0] !== 'data.js') fail('data.js precisa ser o primeiro script de dados');

const expectedDataScripts = [
  'data.js',
  'data-11-15.js', 'data-16-20.js', 'data-21-25.js', 'data-26-30.js', 'data-31-35.js',
  'data-36-40.js', 'data-41-45.js', 'data-46-50.js', 'data-51-55.js', 'data-56-60.js',
  'data-61-65.js', 'data-66-70.js', 'data-71-75.js', 'data-76-80.js', 'data-81-85.js',
  'data-86-90.js', 'data-91-95.js', 'data-96-100.js', 'data-101-105.js', 'data-106-110.js',
  'data-111-115.js', 'data-116-120.js'
];

for (const dataScript of expectedDataScripts) {
  if (!scripts.includes(dataScript)) fail(`arquivo de aulas não carregado no index.html: ${dataScript}`);
}
if (!process.exitCode) ok('todos os arquivos de aulas estão carregados');

const requiredRoutes = ['inicio', 'curso', 'tarefas', 'videos', 'obsidian', 'progresso'];
for (const route of requiredRoutes) {
  if (!app.includes(route)) fail(`rota principal não encontrada no app.js: ${route}`);
}

const requiredStorageKeys = ['pdz.completed', 'pdz.tasks', 'pdz.lastLesson', 'pdz.obsidianVault'];
for (const key of requiredStorageKeys) {
  if (!app.includes(key)) fail(`chave de persistência ausente no app.js: ${key}`);
}

if (!app.includes('Não há vídeo complementar selecionado para esta aula.')) {
  fail('mensagem padrão para aula sem vídeo está ausente');
}
if (!app.includes('obsidian://new?')) fail('integração básica com Obsidian não encontrada');
if (!app.includes('aria-expanded')) fail('controle de dicas sem estado de acessibilidade aria-expanded');

if (!process.exitCode) {
  ok('rotas, persistência, Obsidian e elementos essenciais do app encontrados');
  console.log('Smoke test estático concluído com sucesso.');
} else {
  process.exit(process.exitCode);
}
