$(document).ready(function () {
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
