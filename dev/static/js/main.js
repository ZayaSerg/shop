$(document).ready(function() {
  svg4everybody({});

  let openSearchForm = () => {
    $(document).on("click", ".search__icon", function() {
      $(this)
        .parent()
        .addClass("search--open");
    });
  };

  let clearSearchForm = () => {
    $(document).on("click", ".search__clear", function() {
      $(".search__input").val("");
    });
  };

  let bannerSlider = () => {
    $(".js-banner").slick({
      slidesToShow: 1,
      slideToScroll: 1,
      prevArrow: ".banner__navigation--prev",
      nextArrow: ".banner__navigation--next",
      dots: true,
      appendDots: ".banner__dots",
      customPaging: function(slider, i) {
        return '<div class="banner__dot"></div>';
      }
    });
  };

  let tabs = function() {
    $(".tabs-navigation__item").click(function() {
      let tabName = $(this).attr("show-tab"),
        tabsBody = $(this)
          .closest(".tabs")
          .find(".tabs__body")[0],
        tab = $(tabsBody).find("." + tabName);
      $(this)
        .addClass("tabs-navigation__item--active")
        .siblings()
        .removeClass("tabs-navigation__item--active");
      $(tab)
        .addClass("tab--active")
        .siblings()
        .removeClass("tab--active");
      if ($(tabsBody).find(".js-products-line-slider").length) {
        $(".js-products-line-slider").each(function() {
          $(this).slick("refresh");
        });
        $(".js-product-prev__slider").each(function() {
          $(this).slick("refresh");
        });
      }
    });
  };
  //
  // let tabs = function() {
  //   $(".tabs-navigation__item").click(function() {
  //     let tabName = $(this).attr("show-tab");
  //     $(this)
  //       .addClass("tabs-navigation__item--active")
  //       .siblings()
  //       .removeClass("tabs-navigation__item--active");
  //     $(".tabs__body ." + tabName)
  //       .addClass("tab--active")
  //       .siblings()
  //       .removeClass("tab--active");
  //     if (".tabs__body ." + tabName + " .js-products-line-slider") {
  //       $(".js-products-line-slider").each(function() {
  //         $(this).slick("refresh");
  //       });
  //       $(".js-product-prev__slider").each(function() {
  //         $(this).slick("refresh");
  //       });
  //     }
  //   });
  // };

  let productPrevSlider = function() {
    $(".js-product-prev__slider").each(function(idx) {
      let carouselId = "carousel" + idx;
      this.closest(".product-prev").id = carouselId;
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: "#" + carouselId + " .product-prev__colors",
        customPaging: function(slider, i) {
          let color = $(slider.$slides[i]).data("color");
          return (
            '<div class="product-prev__color" style="background-color:' +
            color +
            '"></div>'
          );
        }
      });
    });
  };

  let productLineSlider = function() {
    $(".js-products-line-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1139,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            appendDots: ".products-line-slider__dots",
            prevArrow: ".products-line-slider__btn--prev",
            nextArrow: ".products-line-slider__btn--next",
            customPaging: function(slider, i) {
              return '<div class="products-line-slider__dot"></div>';
            }
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  };

  var sandwich = function() {
    $(document).on("click", "sandwich", function() {
      $(this).toggleClass("sandwich--active");
    });
  };

  openSearchForm();
  clearSearchForm();
  bannerSlider();
  tabs();
  productPrevSlider();
  productLineSlider();
});

$(window).on("load", function() {
  $(".sk-circle").fadeOut();
  $(".preloader")
    .delay(400)
    .fadeOut("slow");
  $("body").removeClass("fixed");
});

//Полифилы для IE11
(function() {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function() {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
