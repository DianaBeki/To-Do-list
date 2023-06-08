import './index.css';

const listContainer = document.querySelector('.list-container');
const toDo = [
  {
    description: 'Eat',
    completed: 'false',
    index: 1,
  },
  {
    description: 'sing',
    completed: 'false',
    index: 2,
  },
  {
    description: 'jump',
    completed: 'false',
    index: 3,
  },
  {
    description: 'sleep',
    completed: 'false',
    index: 4,
  },
];
listContainer.innerHTML = '';
toDo.forEach((item) => {
  const div1 = document.createElement('div');
  div1.classList.add('list-wrapper');
  const div2 = document.createElement('div');
  div2.classList.add('checkbox-value-icon');
  const div3 = document.createElement('div');
  div3.classList.add('checkbox-value');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  const paragraph = document.createElement('p');
  paragraph.textContent = `${item.description}`;
  div3.appendChild(checkbox);
  div3.appendChild(paragraph);
  const icon = document.createElement('span');
  icon.classList.add('material-symbols-outlined');
  icon.textContent = 'more_vert';
  div2.appendChild(div3);
  div2.appendChild(icon);
  const hr = document.createElement('hr');
  div1.appendChild(div2);
  div1.appendChild(hr);
  listContainer.appendChild(div1);
});