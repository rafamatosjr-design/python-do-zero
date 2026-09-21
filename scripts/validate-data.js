/* Validação da versão gamificada. Execute com: node scripts/validate-data.js */
const path=require('path'); global.window=global; const root=path.resolve(__dirname,'..');
['data.js','data-11-15.js','data-16-20.js','data-21-25.js','data-26-30.js','data-31-35.js','data-36-40.js','data-41-45.js','data-46-50.js','data-51-55.js','data-56-60.js','data-61-65.js','data-66-70.js','data-71-75.js','data-76-80.js','data-81-85.js','data-86-90.js','data-91-95.js','data-96-100.js','data-101-105.js','data-106-110.js','data-111-115.js','data-116-120.js','data-module1-vscode.js','data-curriculum-v2.js','data-java-vscode.js','learning-path-v4.js'].forEach(f=>require(path.join(root,f)));
const errors=[]; const data=global.PDZ_DATA; const topics=global.DEVQUEST_TOPICS;
if(!data||!Array.isArray(data.modules)||!Array.isArray(data.lessons))errors.push('PDZ_DATA ausente.');
if(data&&data.modules.length!==15)errors.push('Esperados 15 módulos; encontrados '+data.modules.length+'.');
if(data&&data.lessons.length!==140)errors.push('Esperadas 140 aulas; encontradas '+data.lessons.length+'.');
if(data){const ids=data.lessons.map(x=>x.id),u=new Set(ids);if(u.size!==140)errors.push('IDs duplicados.');for(let i=1;i<=140;i++)if(!u.has(i))errors.push('Aula '+i+' ausente.');}
if(!Array.isArray(topics)||topics.length<90)errors.push('Trilha gamificada incompleta: '+(topics?topics.length:0)+' tópicos.');
if(errors.length){console.error(errors.join('\n'));process.exit(1)} console.log('OK: 15 módulos, 140 aulas e '+topics.length+' microlições gamificadas carregadas.');