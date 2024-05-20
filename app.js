const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});

const changecolors = () => {
  const randomCode = Math.floor(Math.random() * 16777215);
  const randomColor = "#" + randomCode.toString(16);
  body.style.backgroundColor = randomColor;
};
changecolors();
