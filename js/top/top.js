jQuery(document).ready(function ($) {
  /////////// スクロール位置でカレントナビ表示切り替え
  $(window).on('load resize', function () {
    $('.current-inner').css('display', 'none');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() < 200) {
      $('.current-inner').fadeOut();
    } else {
      $('.current-inner').fadeIn();
    }
  });

  /////////// カレントナビ
  var set = 200;
  var boxTop = new Array;
  var current = -1;
  $('.m-ttl').each(function (i) {
    boxTop[i] = $(this).offset().top;
  });

  changeBox(0);

  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (var i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    };
  });

  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      secNum2 = secNum + 1;
      $('.current__list a').removeClass('color__message , color__business , color__works , color__instagram , color__produce , color__contact');

      if (current == 0) {
        $('.current__message a').addClass('color__message');
        // 現在地がmessageセクションの場合の処理
      } else if (current == 1) {
        $('.current__business a').addClass('color__business');
        // 現在地がbusinessセクションの場合の処理
      } else if (current == 2) {
        // 現在地がworksセクションの場合の処理
        $('.current__works a').addClass('color__works');
      }
      else if (current == 3) {
        // 現在地がInstagramセクションの場合の処理
        $('.current__instagram a').addClass('color__instagram');
      }
      else if (current == 4) {
        // 現在地がproduceセクションの場合の処理
        $('.current__produce a').addClass('color__produce');
      }
      else if (current == 5) {
        // 現在地がcontactセクションの場合の処理
        $('.current__contact a').addClass('color__contact');
      }
    }
  };
});
