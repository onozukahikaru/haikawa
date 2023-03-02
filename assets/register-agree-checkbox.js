$(function() {

alert(1);
  
    /*（C）
      【利用ルール】
      ・（C）記載がついたコメントは、動作確認完了後削除してください。
      ・（R）記載がある「変数」は必ず記入、または修正してください。
      ・（T）記載がある場合は、テーマごとにHTML要素やclass属性に違いがあります。適切なセレクタを指定してください。
    */

    /*（C）
      【HTML読込後処理：利用規約エリアを配置】　
     */
    // （C）（R）利用規約画面のURL
    const url = 'https://xn-mg4ab9c6as5dxb6an2h9dxgmdvcp0k.myshopify.com/policies/terms-of-service'; 

alert(2);
  
    var message = '<a href="' + url + '" target="_blank">利用規約</a>に同意しアカウントを作成します'; 

  alert(3);
    // （C）利用規約エリアを包括する要素
    var agreementArea = '<div class="agree-checkbox"><input type="checkbox" id="check">' + '<label for="check">' + message + '</label></div>';
alert(4);
    // （C）（T）（テーマ単位）「アカウント作成」ボタンのclassセレクタ
    const registerButton = $('#Form__Submit'); 
alert(5);
    // （T）「アカウント作成」ボタン周辺エリアの前に利用規約エリアを配置
    registerButton.before(agreementArea);
alert(6);
    //  「アカウント作成」ボタンの上マージンを取得
    const marginTopOfButton = registerButton.css('margin-top');
alert(7);
    //  利用規約エリアのCSSに「アカウント作成」ボタンの上マージンを追加
    $('.agree-checkbox').css('margin-top', marginTopOfButton);
alert(8);
    //  「アカウント作成」ボタン上のマージンを変更
    registerButton.css('margin-top', '1rem');
alert(9);
    /*（C）
      【HTML読込後処理：「アカウント作成」ボタンの初期状態をdisabledに設定】　
     */

    //  「アカウント作成」ボタンの初期状態をdisabledに設定
    registerButton.prop('disabled', true);

    /*（C）
      【HTML読込後処理：利用規約チェックボックスのchangeイベント登録】　
     */
    // 利用規約チェックボックスのchecked状態に応じて、 「アカウント作成」ボタンのdisabled状態を設定
    $('#check').change(function() {
        if ($(this).is(':checked')) {
            registerButton.prop('disabled', false);
        } else {
            registerButton.prop('disabled', true);
        }
    });
});