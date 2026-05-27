// HEADER
fetch('/widget/header.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;
  });

// FOOTER
fetch('/widget/footer.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('footer-container').innerHTML = html;
  });