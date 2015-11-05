$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var girlInput = $("input#girl").val();
    var boyInput = $("input#boy").val();
    var petInput = $("input#pet").val();
    var food_1Input = $("input#food_1").val();
    var food_2Input = $("input#food_2").val();
    var monsterInput = $("input#monster").val();
    var countryInput = $("input#country").val();

    $(".girl").text(girlInput);
    $(".boy").text(boyInput);
    $(".pet").text(petInput);
    $(".food_1").text(food_1Input);
    $(".food_2").text(food_2Input);
    $(".monster").text(monsterInput);
    $(".country").text(countryInput);

    $("#story").show();

    event.preventDefault();
  });
});
