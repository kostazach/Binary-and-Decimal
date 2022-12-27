function decimalToBinary(num) {
  if (isNaN(num) || num % 1 != 0 || num < 0 || num > 65535) return;

  let binary = "";
  let base = 32768;

  while (base >= 1) {
    if (num >= base) {
      binary += 1;
      num -= base;
      base /= 2;
    } else {
      binary += 0;
      base /= 2;
    }
  }

  return binary;
}

function binaryToDecimal() {
  let bin = [];

  $(".binary").each(function() {
    if ($(this).hasClass("zero")) {
      bin.push("0");
    } else {
      bin.push("1");
    }
  });

  let arr = bin.reverse();
  let decimal = 0;
  let multiplier = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "1") {
      decimal += multiplier;
      multiplier *= 2;
    } else {
      multiplier *= 2;
    }
  }

  return decimal;
}

function duration() {
  return "transform " + (Math.random() * (1.111 - 0.667) + 0.667).toFixed(3) + "s";
}

$("#decimal").on("change keyup", function() {
  let dec = $("#decimal").val();
  let bin = decimalToBinary(dec);

  $(".binary").each(function(i) {
    if ((bin[i]) === "1" && ($(this).hasClass("zero"))) {
      $(this).css("transform", "translate(0, 0)");
      $(this).css("transition", duration());
      $(this).removeClass("zero");
    } else if ((bin[i]) === "0" && !($(this).hasClass("zero"))) {
      $(this).css("transform", "translate(0, -50%)");
      $(this).css("transition", duration());
      $(this).addClass("zero");
    }
  });

  $("#result").text(binaryToDecimal());
});

$(".number").click(function() {
  let order = $(this).parent().index();

  if ($(this).hasClass("zero")) {
    $(this).parent(order).css("transform", "translate(0, 0)");
    $(this).parent(order).css("transition", duration());
    $(this).parent(order).removeClass("zero");
  } else {
    $(this).parent(order).css("transform", "translate(0, -50%)");
    $(this).parent(order).css("transition", duration());
    $(this).parent(order).addClass("zero");
  }

  $("#result").text(binaryToDecimal());
});