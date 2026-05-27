fetch('/pages/privacy/componnent/sidebar.html')
  .then(r => {
    return r.text();
  })
  .then(html => {
    
    const container = document.getElementById('sidebar-container');

    if (!container) {
      return;
    }

    container.innerHTML = html;

    const links = document.querySelectorAll('.privacy-sidebar nav a');

    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();

      if (linkPage === currentPage) {
        link.classList.add('active-sidebar-link');
      }
    });
  })
  .catch(err => console.error("ERREUR FETCH:", err));