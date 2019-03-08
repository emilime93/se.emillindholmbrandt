function initListeners() {
  document.querySelector('#welcome .subfooter img').addEventListener('click', () => {
    scrollToPage('about');
  });
  document.querySelector('#about .subfooter img').addEventListener('click', () => {
    scrollToPage('skills');
  })
  document.querySelector('#skills .subfooter img').addEventListener('click', () => {
    scrollToPage('welcome');
  });
}

function scrollToPage(name) {
  document.querySelector(`#${name}`).scrollIntoView({
    behavior: 'smooth'
  });
}

initListeners();