jQuery(document).ready(function ($) {
  // タブメニュー 
  // $(".works__tab-container:not(:first-of-type)").css("display", "none");
  // $('.tab').click(function () {
  //   var index = $('.tab').index(this);
  //   $('.tab').removeClass('tab-current');
  //   $(this).addClass('tab-current');
  //   // コンテンツの制御
  //   $('.works__tab-container').hide().eq(index).fadeIn(600);
  // });

  // ページネーション 
  $('.page-num').click(function () {
    var index = $('.page-num').index(this);
    $('.page-num').removeClass('displaying');
    $(this).addClass('displaying');
  });
});