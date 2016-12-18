//読み込み完了時に実行する関数を指定
$(loaded);

function loaded(){
  //ボタンタグをクリックしたときの動作を指定
  $("button").click(change_text);
}

function change_text(){
  //IDがmessageの要素のテキストを書き換え
  $("#message").text("月曜日3限,火曜日2,3,4限,水曜日3,4限,木曜日1,2,3,4限,金曜日1,3,4,5,6限講義,,土曜日,洗濯,買出し,日曜日掃除");
}