window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll").style.width = `${scrolled}%`;
}
