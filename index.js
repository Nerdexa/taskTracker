// TODO1:入力フォームにテキストが書き込まれて「enter」ボタンが押されると検証ツールのコンソールにテキストが表示される
// TODO2: enterが押されると入力されたテキストがTODO Listの中に追加される
// TODO3: TODO Listにテキストが追加されたら入力フォームの中身は空になる
// TODO4: 入力フォームが値が空の場合はボタンは押せないようにする
// TODO5: TODOの「Done」ボタンが押されたら、そのTODOは一覧から削除される

function alertButton() {
  alert('アラートです');
}

function main() {
  console.log('jsが読み込まれています');

  // NOTE: constは定数。letは変数
  const alertElement = 'alertElement';
  let alertElement2 = 'alertElement2';

  const buttonElement = document.getElementById('alert');
  buttonElement.addEventListener('click', alertButton);
}

main();
