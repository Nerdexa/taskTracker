// TODO5: TODOの「Done」ボタンが押されたら、そのTODOは一覧から削除される

function alertButton() {
  alert('アラートです');
}
function removeTodoItem() {}

function addTodoItem() {
  const getText = document.getElementById('todo-title-input');
  const inputValue = getText.value;

  if (inputValue.trim() !== '') {
    const todoElement = document.createElement('li');
    todoElement.id = crypto.randomUUID();
    todoElement.classList.add('todo');
    const deleteElement = () => {
      const targetElement = document.getElementById(todoElement.id);
    };

    const todoTitleElement = document.createElement('span');
    todoTitleElement.classList.add('todo-title');
    todoTitleElement.textContent = inputValue;
    todoElement.appendChild(todoTitleElement);

    const todoButtonElement = document.createElement('button');
    todoButtonElement.classList.add('todo-button');
    todoButtonElement.textContent = 'Done';
    todoElement.appendChild(todoButtonElement);

    const todoListElement = document.getElementById('item-list');
    todoListElement.appendChild(todoElement);

    getText.value = '';
  }
}

function main() {
  console.log('jsが読み込まれています');

  const enterButtonElement = document.getElementById('create-todo-button');
  enterButtonElement.addEventListener('click', addTodoItem);
}
main();

// NOTE: constは定数。letは変数
// const alertElement = 'alertElement';
// let alertElement2 = 'alertElement2';
// const buttonElement = document.getElementById('alert');
// buttonElement.addEventListener('click', alertButton);
