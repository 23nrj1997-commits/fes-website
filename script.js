  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // optional: close menu when a link is clicked
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', false);
    });
  });