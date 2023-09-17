// TODO3: TODO Listにテキストが追加されたら入力フォームの中身は空になる
// TODO4: 入力フォームが値が空の場合はボタンは押せないようにする
// TODO5: TODOの「Done」ボタンが押されたら、そのTODOは一覧から削除される

const addTodoItem = () => {
  const getText = document.getElementById('todo-title-input');
  const inputValue = getText.value;

  if (inputValue.trim() !== '') {
    const todoElement = document.createElement('li');
    todoElement.classList.add('todo');

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
};

const main = () => {
  console.log('jsが読み込まれています');

  const todoButtonElement = document.getElementById('create-todo-button');
  todoButtonElement.addEventListener('click', addTodoItem);
};

main();

// NOTE: constは定数。letは変数
// const alertElement = 'alertElement';
// let alertElement2 = 'alertElement2';
// const buttonElement = document.getElementById('alert');
// buttonElement.addEventListener('click', alertButton);
