// SP用デフォルトhover制御
addEventListener('DOMContentLoaded', function () {
  if (isTouchDevice()) {
    for (var i in document.styleSheets) if (document.styleSheets.hasOwnProperty(i)) {
      deleteRuleHover(document.styleSheets[i]);
    }
  }
  function isTouchDevice() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints || navigator.msMaxTouchPoints;
  }
  function deleteRuleHover(styleSheet) {
    try {
      var rules = styleSheet.cssRules || styleSheet.rules;
      if (rules) {
        for (var i = rules.length; i--;) {
          var text = rules[i].selectorText;
          if (/:hover/.test(text)) {
            console.log(text);
            styleSheet.deleteRule(i);
          }
        }
        for (var i = rules.length; i--;) deleteRuleHover(rules[i]);
      }
    }
    catch (ex) {
      console.log(ex);
    }
  }
});

jQuery(document).ready(function ($) {
  // hover制御
  var userAgent = navigator.userAgent;
  var more__btn = $('.m-more__btn');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    more__btn.on("touchstart", function () {
      $(this).addClass("more__btnSP");
    });
    more__btn.on("touchend", function () {
      $(this).removeClass("more__btnSP");
    });
  }

  // hero+footerスクロール誘導アイコンhover制御
  $(".m-induction__icon").hover(function () {
    $('.hero-induction__arrow , .footer-induction__arrow').toggleClass('btnhover');
  });

  // ページ内スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // ハンバーガーメニュー
  $('.js-hamburgerbtn').on('click', function () {
    $('.hamburgerbtn-line').toggleClass('open');
    $('.header__hamburger').fadeToggle(300);
  })

  $('.hamburger__list').on('click', function () {
    $('.hamburgerbtn-line').toggleClass('open');
    $('.header__hamburger').fadeOut(300);
  })
});