// Custom JavaScript for Arconia Documentation

// Add arch background effect similar to the website
document.addEventListener('DOMContentLoaded', function() {
  // Create arch container
  const archContainer = document.createElement('div');
  archContainer.className = 'arch-container';
  
  // Create arch
  const arch = document.createElement('div');
  arch.className = 'arch';
  
  // Create arch inner
  const archInner = document.createElement('div');
  archInner.className = 'arch-inner';
  
  // Append elements
  arch.appendChild(archInner);
  archContainer.appendChild(arch);
  
  // Add to body as first child
  document.body.insertBefore(archContainer, document.body.firstChild);
  
  // Handle mobile menu toggle
  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (navbarBurger && navbarMenu) {
    navbarBurger.addEventListener('click', function() {
      navbarBurger.classList.toggle('is-active');
      navbarMenu.classList.toggle('is-active');
    });
  }
  
  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.navbar-item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && currentPath.includes(href) && href !== '/') {
      item.classList.add('is-active');
    }
  });
});
