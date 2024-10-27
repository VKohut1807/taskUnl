$(document).ready(function () {
  $("#search-button").click(function (event) {
    var search = $("#search").val().trim();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(`[data-title="${search}"]`).offset().top,
      },
      1000,
      function () {
        $(`[data-title="${search}"]`).addClass("show");
      }
    );
  });

  function checkFavoriteLocalSt() {
    const pathSvg = $("#favorite").find("svg path");
    const productName = localStorage.getItem("product-name");

    if (productName) {
      pathSvg.attr("fill", "#f62f61");
    } else {
      pathSvg.attr("fill", "none");
    }
  }
  checkFavoriteLocalSt();

  $("#favorite").click(function (event) {
    const pathSvg = $(this).find("svg path");
    const productName = localStorage.getItem("product-name");

    if (productName) {
      pathSvg.attr("fill", "none");
      localStorage.removeItem("product-name");
    } else {
      pathSvg.attr("fill", "#f62f61");
      localStorage.setItem("product-name", "My favorite product");
    }
  });

  $(".single-item").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand",
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  $("#newsletter-button").click(function (event) {
    var email = $("#email").val();
    var errorMessage = $("#error-message");

    var emailRegex = /^([A-Za-z0-9_.-])+@([A-Za-z0-9_-]+\.)+([A-Za-z]{2,4})$/;

    var isChecked = $("#consent").is(":checked");

    if (emailRegex.test(email)) {
      if (isChecked) {
        errorMessage.hide();
        alert("Email sent successfully!");
        $("#email").val("");
        $("#consent").prop("checked", false);
      } else {
        errorMessage.text("Please accept the terms before subscribing!").show();
      }
    } else {
      errorMessage.text("Please enter a valid email address!").show();
    }
  });

  $("#close-button").click(function () {
    $("body").removeClass("modal-open");
    $("#modal-shadow").css("display", "none");
    $("#modal").css("display", "none");
  });
});
