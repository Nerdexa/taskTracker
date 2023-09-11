// TODO3: TODO Listにテキストが追加されたら入力フォームの中身は空になる
// TODO4: 入力フォームが値が空の場合はボタンは押せないようにする
// TODO5: TODOの「Done」ボタンが押されたら、そのTODOは一覧から削除される

function alertButton() {
  alert('アラートです');
}

// 関数：コンソールへの入力テキストの出力、リストへの入力テキストの追加
function addItem() {
  const getText = document.getElementById('text');
  const inputValue = getText.value;

  if (inputValue.trim() !== '') {
    console.log(inputValue);
    const createTodo = document.createElement('li');
    createTodo.classList.add('todo');

    const createTodoTitle = document.createElement('span');
    createTodoTitle.classList.add('todo-title');
    createTodoTitle.textContent = inputValue;
    createTodo.appendChild(createTodoTitle);

    const createTodoButton = document.createElement('button');
    createTodoButton.classList.add('todo-button');
    createTodoButton.textContent = 'Done';
    createTodo.appendChild(createTodoButton);

    const addList = document.getElementById('itemList');
    itemList.appendChild(createTodo);

    getText.value = '';
  }
}

function main() {
  console.log('jsが読み込まれています');

  // TODO1:入力フォームにテキストが書き込まれて「enter」ボタンが押されると検証ツールのコンソールにテキストが表示される
  // TODO2: enterが押されると入力されたテキストがTODO Listの中に追加される
  const buttonElement = document.getElementById('enter');
  buttonElement.addEventListener('click', addItem);
}

main();

// NOTE: constは定数。letは変数
// const alertElement = 'alertElement';
// let alertElement2 = 'alertElement2';
// const buttonElement = document.getElementById('alert');
// buttonElement.addEventListener('click', alertButton);
