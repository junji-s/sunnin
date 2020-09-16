jQuery(document).ready(function ($) {
  let width = $('.hero__carousel-list').outerWidth(true);
  let length = $('.hero__carousel-list').length;
  let slideArea = width * length;
  $('.hero__carousel-area').css('width', slideArea);
  let slideCurrent = 0;
  let lastCurrent = $('.hero__carousel-list').length - 1;

  function changeslide() {
    $('.hero__carousel-area').stop().animate({
      left: slideCurrent * -width
    });
  };


  /////////////////////////自動スライド切り替えのタイマー関数定義
  let Timer;
  function startTimer() {
    Timer = setInterval(function () {
      if (slideCurrent === lastCurrent) {
        slideCurrent = 0;
        changeslide();
      } else {
        slideCurrent++;
        changeslide();
      };
    }, 3000);
  }
  function stopTimer() {
    clearInterval(Timer);
  }
  startTimer();


  /////////////////////////ボタンクリック時関数を呼び出し
  // NEXTボタン
  $('.js-btn-next').click(function () {
    stopTimer();
    startTimer();
    if (slideCurrent === lastCurrent) {
      slideCurrent = 0;
      changeslide();
    } else {
      slideCurrent++;
      changeslide();
    };
  });

  // BACKボタン
  $('.js-btn-back').click(function () {
    stopTimer();
    startTimer();
    if (slideCurrent === 0) {
      slideCurrent = lastCurrent;
      changeslide();
    } else {
      slideCurrent--;
      changeslide();
    };
  });
});