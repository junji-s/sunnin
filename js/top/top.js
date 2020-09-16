jQuery(document).ready(function ($) {
  $(window).on('load resize', function () {
    $('.gnav-inner').css('display', 'none');
  });

  // 表示位置がトップからどれくらいに位置しているか
  $(window).scroll(function () {
    if ($(this).scrollTop() < 300) {
      // 200px以下だとフェードアウト
      $('.gnav-inner').fadeOut();
    } else {
      // 200px以上離れたらフェードイン
      $('.gnav-inner').fadeIn();
    }
  });
})