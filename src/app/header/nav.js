window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const isHome = window.location.pathname === '/';
    const navbar = document.querySelector('nav');
    console.log(scrollPosition);
  
    if (navbar) {
        if (scrollPosition > 200) { // Adjusted condition to trigger at 200px
          navbar.classList.remove('absolute');
          navbar.classList.add('active');
        } else {
          navbar.classList.remove('active');
          if (isHome) {
            navbar.classList.add('absolute');
          } else {
            navbar.classList.remove('absolute');
          }
        }
      }
  });