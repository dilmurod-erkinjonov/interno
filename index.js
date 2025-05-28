const burger = document.getElementById('burger-btn');
const navList = document.getElementById('nav-list');
const backdrop = document.getElementById('backdrop');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
  backdrop.classList.toggle('active');
});

backdrop.addEventListener('click', () => {
  navList.classList.remove('active');
  backdrop.classList.remove('active');
});
