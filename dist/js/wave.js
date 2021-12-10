const hand = document.getElementById('hand-emoji');
const heroDiv = document.querySelector('.hero-copy');

function wave() {
  hand.style.animation = 'waver 0.65s alternate infinite';
}

heroDiv.addEventListener('mouseover', wave);
heroDiv.addEventListener('mouseout', () => {
  hand.style.animation = '';
});
