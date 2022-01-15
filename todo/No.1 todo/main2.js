// 追加するボタンの取得
const buttonClass = document.getElementsByClassName('add-btn');
// 追加するボタンを押した時の処理
buttonClass[0].addEventListener('click', function () {
    // 追加ボタンの関数
    addElement();
    // 完了ボタンの関数
    delElement();
});

// 追加ボタンの関数
const addElement = function () {
    // listTextにinput要素を代入
    const listText = document.getElementById('add-area');
    // textにinput内のテキストを代入
    const text = document.createTextNode(listText.value);
    // liタグを生成し、末尾に表示。中身はinput内で書いたテキスト
    const li = document.createElement('li');
    li.appendChild(text);
    // li要素に完了ボタンを追加
    const trash = document.createElement('button');
    // 定数trashにtrashクラスを追加
    trash.classList.add('trash');
    // trashボタンの中に完了と表示
    trash.innerHTML = '完了';
    // liタグの末尾に表示
    li.appendChild(trash);

    // listsにid:todoを追加
    const lists = document.getElementById('todo');
    // listsの末尾にliを表示
    lists.appendChild(li);
};

// todoリスト内の削除ボタン
const delElement = function () {
    // 上で追加したtrashを定数trashに代入
    const trash = document.getElementsByClassName('trash');
    // クリックしたliタグの配列数を取得
    for (let i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', function () {
            // thisはtrash[i]にあたる
            const li = this.parentNode;
            li.remove();
        });
    }
};
