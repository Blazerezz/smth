
  
  window.addEventListener('scroll', function() {
    let hero = document.getElementById('hero');
    let scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      hero.style.opacity = 1 - scrollPosition / 500;
    }
  });
  function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  }
  