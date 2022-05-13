import "./styles.css";

const onClickAdd = () => {
  // inputテキスト取得
  const inputText = document.getElementById("addText").value;
  // 入力されたテキストを空にする
  document.getElementById("addText").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (inputText) => {
  //div作成
  const div = document.createElement("div");
  div.className = "list-row";
  //li作成
  const li = document.createElement("li");
  li.innerText = inputText;
  //未完了リストへ追加
  document.getElementById("incomplete-list").appendChild(div);

  //ボタンの生成(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストへ移動
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(addTarget);
    // 子要素を空にする
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";

    backButton.addEventListener("click", () => {
      // 完了リストから未完了リストへ
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //text
      const text = backButton.parentNode.firstElementChild.innerText;
      console.log(text);

      createIncompleteList(text);
    });

    //divタグの子要素
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //ボタンの生成(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの中にli
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
