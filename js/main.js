const nav = document.getElementById('nav');
const header = document.querySelector('header');
const backgroundGradient = document.querySelector('.background-gradient');

const burger = document.querySelector('.burger');
const navSubcontainer = document.querySelector('.nav-subcontainer');
const overlay = document.getElementById('overlay');

const buttons = document.querySelectorAll('div.nav-buttons button');
const icons = document.querySelectorAll('div.button-icon picture');

const headerOptions = {
  rootMargin: '-250px 0px 0px 0px',
};

const headerObserver = new IntersectionObserver((entries, headerObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      backgroundGradient.classList.add('active');
      nav.classList.add('box-shadow');
    } else {
      backgroundGradient.classList.remove('active');
      nav.classList.remove('box-shadow');
    }
  });
}, headerOptions);

headerObserver.observe(header);

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle-burger');
  navSubcontainer.classList.toggle('toggle-nav');
  overlay.classList.toggle('overlay');
  document.body.classList.toggle('disable-scroll');
});

for (const currentBtn of buttons) {
  currentBtn.addEventListener('click', () => {
    for (const otherBtn of buttons) {
      if (otherBtn === currentBtn) {
        otherBtn.parentElement.nextElementSibling.classList.toggle(
          'display-list'
        );
        otherBtn.nextElementSibling.children[1].classList.toggle(
          'toggle-arrow'
        );
      } else {
        otherBtn.parentElement.nextElementSibling.classList.remove(
          'display-list'
        );
        otherBtn.nextElementSibling.children[1].classList.remove(
          'toggle-arrow'
        );
      }
    }
  });
}
