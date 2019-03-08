function initListeners() {
  document.querySelector('#welcome .subfooter i').addEventListener('click', () => {
    scrollToPage('about');
  });
  document.querySelector('#about .subfooter i').addEventListener('click', () => {
    scrollToPage('skills');
  })
  document.querySelector('#skills .subfooter i').addEventListener('click', () => {
    scrollToPage('welcome');
  });
}

function scrollToPage(name) {
  document.querySelector(`#${name}`).scrollIntoView({
    behavior: 'smooth'
  });
}

initListeners();