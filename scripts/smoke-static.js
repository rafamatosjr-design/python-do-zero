const fs=require('fs'),path=require('path');const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');let bad=[];
['main-nav','sidebar-progress-label','sidebar-progress-bar','conteudo','app','toast'].forEach(id=>{if(!html.includes('id="'+id+'"'))bad.push('HTML sem #'+id)});
const scriptSrcs=[...html.matchAll(/<script\s+src="([^"]+)"/g)].map(m=>m[1]);
const scripts=scriptSrcs.map(x=>x.split('?')[0]);
scripts.forEach(x=>{if(!fs.existsSync(path.join(root,x)))bad.push('Script ausente: '+x)});
['learning-path-v4.js','gamified-v3.js'].forEach(x=>{if(!scripts.includes(x))bad.push('Não carregado: '+x)});
if(scripts.indexOf('learning-path-v4.js')>scripts.indexOf('gamified-v3.js'))bad.push('learning-path-v4.js deve carregar antes do motor gamificado.');
const game=fs.readFileSync(path.join(root,'gamified-v3.js'),'utf8');['trilha','aprender','praticar','laboratorio','tutor','desafios'].forEach(r=>{if(!game.includes(r))bad.push('Rota gamificada ausente: '+r)});
if(bad.length){console.error(bad.join('\n'));process.exit(1)}console.log('OK: estrutura estática da experiência gamificada.');