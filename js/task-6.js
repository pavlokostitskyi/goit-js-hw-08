const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  clearBoxes();

  const fragment = document.createDocumentFragment(); 

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box); 
    size += 10;
  }

  boxesContainer.appendChild(fragment); 
  input.value = ''; 
}

function destroyBoxes() {
  clearBoxes();
  input.value = ''; 
}

function clearBoxes() {
  boxesContainer.innerHTML = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
