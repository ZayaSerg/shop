$(document).ready(function() {
  // alert("JQuery working");
  svg4everybody({});
  // console.log(this);

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

  openSearchForm();
  clearSearchForm();
  // GetStarted();
});
