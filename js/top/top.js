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
      $('.current__list a').removeClass('link-current');

      if (current == 0) {
        $('.current__message a').addClass('link-current');
        // 現在地がmessageセクションの場合の処理
      } else if (current == 1) {
        $('.current__business a').addClass('link-current');
        // 現在地がbusinessセクションの場合の処理
      } else if (current == 2) {
        // 現在地がworksセクションの場合の処理
        $('.current__works a').addClass('link-current');
      }
      else if (current == 3) {
        // 現在地がInstagramセクションの場合の処理
        $('.current__instagram a').addClass('link-current');
      }
      else if (current == 4) {
        // 現在地がproduceセクションの場合の処理
        $('.current__produce a').addClass('link-current');
      }
      else if (current == 5) {
        // 現在地がcontactセクションの場合の処理
        $('.current__contact a').addClass('link-current');
      }

    }
  };
});

//   $(window).on('load resize', function () {
//     var pos01 = 0;
//     var pos02 = Math.round($("#business").offset().top);
//     var pos03 = Math.round($("#works").offset().top);
//     var pos04 = Math.round($("#instagram").offset().top);
//     var pos05 = Math.round($("#produce").offset().top);
//     var pos06 = Math.round($("#contact").offset().top);

//     $(window).on('load resize scroll', function () {
//       var posScroll = $(window).scrollTop() + 50;
//       if (pos01 <= posScroll && posScroll < pos02) {
//         $(".current__message").addClass('message--active').siblings('li').removeClass('message--active');
//       } else if (pos02 <= posScroll && posScroll < pos03) {
//         $(".current__business").addClass('business--active').siblings('li').removeClass('message--active');
//       } else if (pos03 <= posScroll && posScroll < pos04) {
//         $(".current__works").addClass('works--active').siblings('li').removeClass('business--active');
//       } else if (pos04 <= posScroll && posScroll < pos05) {
//         $(".current__instagram").addClass('instagram--active').siblings('li').removeClass('works--active');
//       } else if (pos05 <= posScroll && posScroll < pos06) {
//         $(".current__produce").addClass('produce--active').siblings('li').removeClass('instagram--active');
//       } else if (pos06 <= posScroll) {
//         $(".current__contact").addClass('contact--active').siblings('li').removeClass('produce--active');
//       }
//     });
//   });
// });