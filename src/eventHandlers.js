import { addTask, clearCompletedTasks } from './todo.js';

export const handleAddButtonClick = () => {
  const valueInput = document.querySelector('.value');
  const description = valueInput.value.trim();
  if (description !== '') {
    addTask(description);
    valueInput.value = '';
  }
};
export const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleAddButtonClick();
  }
};
export const handleClearButtonClick = () => {
  clearCompletedTasks();
};