
const animals = [
  { name: "Cow", img: "https://i.imgur.com/AcQH3C8.png" },
  { name: "Pig", img: "https://i.imgur.com/4xz2o1v.png" },
  { name: "Sheep", img: "https://i.imgur.com/HLz5FnM.png" },
  { name: "Chicken", img: "https://i.imgur.com/3XRYGV1.png" },
  { name: "Goat", img: "https://i.imgur.com/8tk4zB2.png" }
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
