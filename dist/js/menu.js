const menuBtn = document.querySelector('.mobile-button');
const menuBtnArr = Array.from(menuBtn.children);
const mobileNav = document.querySelector('#mobile-nav');

menuBtn.addEventListener('click', function () {
  if (mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    document.body.style.overflow = 'auto';
    menuBtnArr.forEach((span) => {
      span.style.backgroundColor = '#000';
    });
  } else {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtnArr.forEach((span) => {
      span.style.backgroundColor = '#fff';
    });
  }
});
