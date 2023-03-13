$(function() {

    var message = '利用規約に同意しアカウントを作成します'; 
    var agreementArea = '<div class="agree-checkbox"><input type="checkbox" id="check">' + '<label for="check">' + message + '</label></div>';
    const registerButton = $('.CustomerRegisterButton'); 

    registerButton.before(agreementArea);
  
    //  「アカウント作成」ボタンの初期状態をdisabledに設定
    registerButton.prop('disabled', true);

    // 利用規約チェックボックスのchecked状態に応じて、 「アカウント作成」ボタンのdisabled状態を設定
    $('#check').change(function() {
        if ($(this).is(':checked')) {
            registerButton.prop('disabled', false);
        } else {
            registerButton.prop('disabled', true);
        }
    });
});