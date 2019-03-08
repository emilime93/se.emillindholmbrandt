function initListeners() {
  document.querySelector('#welcome .subfooter i').addEventListener('click', () => {
    scrollToPage('skills');
  });
  document.querySelector('#skills .subfooter i').addEventListener('click', () => {
    scrollToPage('contact');
  });
  document.querySelector('#contact .subfooter i').addEventListener('click', () => {
    scrollToPage('welcome');
  })
}

function scrollToPage(name) {
  document.querySelector(`#${name}`).scrollIntoView({
    behavior: 'smooth'
  });
}

initListeners();