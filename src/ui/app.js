import TravelSystem from '../system/TravelSystem.js';
import Flight from '../models/Flight.js';
import Hotel from '../models/Hotel.js';
import Activity from '../models/Activity.js';

const system = new TravelSystem();

// Referencias correctas al DOM
const form = document.getElementById('itemForm');
const nameInput = document.getElementById('name');
const locationInput = document.getElementById('location');
const typeSelect = document.getElementById('type');
const list = document.getElementById('itemList');
const stats = document.getElementById('stats');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');

function render(items) {
  list.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.getInfo()}`;
    list.appendChild(li);
  });

  const s = system.getStats();
  stats.textContent = `Total: ${s.total} | Activos: ${s.active}`;
}

// Crear elemento (CRUD - CREATE)
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = nameInput.value;
  const location = locationInput.value;
  const type = typeSelect.value;

  let item;

  if (type === 'Flight') item = new Flight(name, location);
  if (type === 'Hotel') item = new Hotel(name, location);
  if (type === 'Activity') item = new Activity(name, location);

  system.addItem(item);
  render(system.filterByType('All'));

  form.reset();
});

// Búsqueda
searchInput.addEventListener('input', () => {
  render(system.searchByName(searchInput.value));
});

// Filtro por tipo
filterSelect.addEventListener('change', () => {
  render(system.filterByType(filterSelect.value));
});