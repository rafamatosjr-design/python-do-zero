(() => {
  function patchUI() {
    const total = window.PDZ_DATA?.lessons?.length || 140;
    const modules = window.PDZ_DATA?.modules?.length || 15;
    const completed = new Set(JSON.parse(localStorage.getItem('pdz.completed') || '[]')).size;
    const percent = total ? Math.round((completed / total) * 1000) / 10 : 0;

    document.querySelectorAll('body *').forEach((el) => {
      if (el.children.length === 0 && typeof el.textContent === 'string') {
        el.textContent = el.textContent
          .replace(/120 aulas/g, `${total} aulas`)
          .replace(/12 módulos/g, `${modules} módulos`)
          .replace(/\/120 aulas/g, `/${total} aulas`)
          .replace(/÷ 120 × 100/g, `÷ ${total} × 100`)
          .replace(/Aula (\d+)\/120/g, `Aula $1/${total}`)
          .replace(/Python do Zero/g, 'Programação do Zero ao Full Stack');
      }
    });

    const label = document.querySelector('#sidebar-progress-label');
    if (label) label.textContent = `${completed} de ${total} aulas`;
    const bar = document.querySelector('#sidebar-progress-bar');
    if (bar) bar.style.width = `${Math.min(percent, 100)}%`;

    document.querySelectorAll('.progress-bar').forEach((progressBar) => {
      if (progressBar.id !== 'sidebar-progress-bar' && progressBar.closest('.lesson-aside, .page > .grid, .page > .card')) {
        const text = progressBar.parentElement?.parentElement?.textContent || '';
        if (text.includes('Progresso') || text.includes('Curso')) progressBar.style.width = `${Math.min(percent, 100)}%`;
      }
    });
  }

  const run = () => setTimeout(patchUI, 0);
  window.addEventListener('hashchange', run);
  window.addEventListener('load', run);
  new MutationObserver(() => {
    clearTimeout(window.__pdzPatchTimer);
    window.__pdzPatchTimer = setTimeout(patchUI, 10);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();