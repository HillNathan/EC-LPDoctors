// NAV BAR TOGGLE 
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
// end of Nav bar toggle

var s = skrollr.init({
    smoothScrolling: false,
    forceHeight: false
  });