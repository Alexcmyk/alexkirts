const wd = document.defaultView;
const menuBtn = document.querySelector('.mobile-button');
const menuBtnArr = Array.from(menuBtn.children);
const mobileNav = document.querySelector('#mobile-nav');

menuBtn.addEventListener('click', function () {
  if (mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('close');
    document.body.style.overflow = 'auto';
    menuBtnArr.forEach((span) => {
      span.style.backgroundColor = '#000';
    });
  } else {
    mobileNav.classList.add('open');
    menuBtn.classList.add('close');
    document.body.style.overflow = 'hidden';
    menuBtnArr.forEach((span) => {
      span.style.backgroundColor = '#fff';
    });
  }
});

wd.addEventListener('resize', function () {
  if (window.innerWidth > 700) {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('close');
    document.body.style.overflow = 'auto';
    menuBtnArr.forEach((span) => {
      span.style.backgroundColor = '#000';
    });
  }
});
