window.onscroll = () => {
  let scrollY = document.documentElement.scrollTop;
  const header = document.querySelector('header');

  (scrollY > 20) ? header.classList.add('header__scroll') : header.classList.remove('header__scroll')
}

const body = document.querySelector('body');

window.addEventListener("click", ({ target }) => {
  ( target.className == "menu" ) && body.classList.toggle("nav--visible");
});
