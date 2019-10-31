const userInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');

const createTodoItem = text => {
  if (text) {
    const newTodo = document.createElement('li');
    const newTodoText = document.createElement('span');
    newTodoText.innerHTML = text;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'todo-delete';
    newTodo.appendChild(newTodoText);
    newTodo.appendChild(deleteButton);
    newTodo.className += 'todo-list-item';
    todoList.appendChild(newTodo);
  }
};

const deleteTodoItem = event => console.log(event);
addButton.addEventListener('click', () => createTodoItem(userInput.value));

todoList.addEventListener('click', event => {
  const target = event.target;
  if (target.className === 'todo-delete') {
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
});
