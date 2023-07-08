const listContainer = document.querySelector('.list-container');
let toDo = [];

export function loadFromLocalStorage() {
  const storedList = localStorage.getItem('toDoList');
  if (storedList) {
    toDo = JSON.parse(storedList);
  }
}

export function renderToDoList() {
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
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      saveToLocalStorage();
    });
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.classList.add('items');
    inputField.value = item.description;
    inputField.value = inputField.value.charAt(0).toUpperCase()
    + inputField.value.slice(1).toLowerCase();
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTask(item.index);
    });
    div3.appendChild(checkbox);
    div3.appendChild(inputField);
    div2.appendChild(deleteBtn);
    div2.appendChild(div3);
    div1.appendChild(div2);
    listContainer.appendChild(div1);
  });
}

function updateIndexes() {
  toDo.forEach((task, index) => {
    task.index = index + 1;
  });
}

export function saveToLocalStorage() {
  localStorage.setItem('toDoList', JSON.stringify(toDo));
}

export function addTask(description) {
  const task = {
    description,
    completed: false,
    index: toDo.length + 1,
  };
  toDo.push(task);
  saveToLocalStorage();
  renderToDoList();
}

export function deleteTask(index) {
  toDo.splice(index - 1, 1);
  updateIndexes();
  saveToLocalStorage();
  renderToDoList();
}

export function editTaskDescription(index, newDescription) {
  toDo[index - 1].description = newDescription;
  saveToLocalStorage();
}

export function clearCompletedTasks() {
  toDo = toDo.filter((task) => !task.completed);
  updateIndexes();
  saveToLocalStorage();
  renderToDoList();
}
