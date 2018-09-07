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

  openSearchForm();
  clearSearchForm();
  bannerSlider();
});
