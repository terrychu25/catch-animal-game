
const animals = [
  { name: "Cow", img: "cow.webp" },
  { name: "Pig", img: "pig.avif" },
  { name: "Sheep", img: "sheep.jpg" },
  { name: "Chicken", img: "chicken.jpg" },
  { name: "Goat", img: "goat.jpg" }
];

const farm = document.getElementById('farm');
const result = document.getElementById('result');

function createAnimal(animal) {
  const el = document.createElement('img');
  el.src = animal.img;
  el.className = 'animal';
  el.alt = animal.name;
  randomPosition(el);
  moveRandomly(el);
  el.onclick = () => catchAnimal(animal, el);
  farm.appendChild(el);
}

function randomPosition(el) {
  el.style.left = Math.random() * (window.innerWidth - 100) + 'px';
  el.style.top = Math.random() * (window.innerHeight - 200) + 'px';
}

function moveRandomly(el) {
  setInterval(() => {
    el.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    el.style.top = Math.random() * (window.innerHeight - 200) + 'px';
  }, 3000);
}

function catchAnimal(animal, el) {
  const net = document.createElement('div');
  net.className = 'net';
  net.style.left = el.style.left;
  net.style.top = el.style.top;
  farm.appendChild(net);
  setTimeout(() => net.remove(), 1000);
  result.textContent = `You caught a ${animal.name}!`;
}

animals.forEach(createAnimal);
