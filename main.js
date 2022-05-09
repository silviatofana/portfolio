const menuIconMobile = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__menu');
const viewport = document.querySelector('body');
const menuLinks = document.querySelectorAll('.navbar__menu__link');

function isActiveClassExisted(element) {
  return element.classList.contains('active');
}

function refreshIcon() {
  if (isActiveClassExisted(menu)) {
    menuIconMobile.setAttribute('src', 'images/hamburguer-close.png');
  } else {
    menuIconMobile.setAttribute('src', 'images/hamburguer.png');
  }
}
function openMenu() {
  menu.classList.toggle('active');
  viewport.classList.add('blockover');
  refreshIcon();
}

function closeMenu() {
  menu.classList.remove('active');
  viewport.classList.remove('blockover');
  refreshIcon();
}

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});