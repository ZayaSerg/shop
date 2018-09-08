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
      customPaging: function(slider, i) {
        return '<a class="banner__dot"></a>';
      },
      appendDots: ".banner__dots"
    });
  };

  let tabs = function() {
    $(".hits-navigation__item").click(function() {
      let tabName = $(this).attr("show-tab");
      $(this)
        .addClass("tabs-navigation__item--active")
        .siblings()
        .removeClass("tabs-navigation__item--active");
      $(".tabs__body ." + tabName)
        .addClass("tab--active")
        .siblings()
        .removeClass("tab--active");
    });
  };

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
            '<a class="product-prev__color" style="background-color:' +
            color +
            '"></a>'
          );
        }
      });
    });
  };

  let productLineSlider = function() {
    $(".js-products-line-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1
    });
  };

  openSearchForm();
  clearSearchForm();
  bannerSlider();
  tabs();
  productPrevSlider();
  productLineSlider();
});
