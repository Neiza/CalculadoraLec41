"use strict"
$(_ =>{
  let screenVal = $("input:text");

$("input:button").on("click", _ =>{
  const eachNumber  = $("input:button").val();
  let currentScreen = screenVal.val();
  currentScreen += eachNumber
  screenVal.val(currentScreen);
  if ($(this).value == "C"){
    screenVal.val("");
  }
});

$("button").click((event) =>{
  event.preventDefault();
  screenVal.val(eval(screenVal.val()));
});
});
