$("button").click(function() {
  validateEmpty(".fName");
  validateEmpty(".lName");
  validateEmpty(".email");
  validateEmpty(".password");
  if (validateEmail($(".email").val())) {
    $("input.email").removeClass("error");
    $("em.email").addClass("d-none");
    $("img.email").addClass("d-none");
  } else {
    $("input.email").addClass("error");
    $("em.email").removeClass("d-none");
    $("img.email").removeClass("d-none");
  }
});

function validateEmpty(className) {
  if ($("input" + className).val() === "") {
    $("input" + className).addClass("error");
    $("em" + className).removeClass("d-none");
    $("img" + className).removeClass("d-none");
  } else {
    $("input" + className).removeClass("error");
    $("em" + className).addClass("d-none");
    $("img" + className).addClass("d-none");
  }
}

function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
