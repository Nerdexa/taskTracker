function addTodoItem() {
  const getText = document.getElementById('todo-title-input');
  const inputValue = getText.value;

  if (inputValue.trim() !== '') {
    const todoElement = document.createElement('li');
    todoElement.classList.add('todo');
    const deleteElement = () => {
      todoElement.remove();
    };

    const todoTitleElement = document.createElement('span');
    todoTitleElement.classList.add('todo-title');
    todoTitleElement.textContent = inputValue;
    todoElement.appendChild(todoTitleElement);

    const todoButtonElement = document.createElement('button');
    todoButtonElement.classList.add('todo-button');
    todoButtonElement.textContent = 'Done';
    todoButtonElement.addEventListener('click', deleteElement);
    todoElement.appendChild(todoButtonElement);

    const todoListElement = document.getElementById('item-list');
    todoListElement.appendChild(todoElement);

    getText.value = '';
  }
}

function main() {
  const enterButtonElement = document.getElementById('create-todo-button');
  enterButtonElement.addEventListener('click', addTodoItem);
}
main();
