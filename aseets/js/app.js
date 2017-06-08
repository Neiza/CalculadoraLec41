$( _ =>{

  let screenVal = $("input:text");

  $("input:button").on("click", _ =>{
    let eachNumber  = $("input:button").val();
    let currentScreen = screenVal.val();
    currentScreen += eachNumber;
    screenVal.val(currentScreen);
    if ($(this).val() == "C"){
      screenVal.val("");
    }
  });

  $("button").click((event) =>{
    event.preventDefault();
    screenVal.val(eval(screenVal.val()));
  });
});
