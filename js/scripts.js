$(document).ready(function () {
  // Upon clicking submit button, perform the following --
  $("#survey").submit(function (event) {
    event.preventDefault();
    // Varibles to hold the values extracted from the html page
    const q1 = $("input:radio[name=question1]:checked").val();
    const q2 = $("input:radio[name=question2]:checked").val();
    const q3 = $("input:radio[name=question3]:checked").val();
    const q4 = $("input:radio[name=question4]:checked").val();
    const q5 = $("input:radio[name=question5]:checked").val();

    // If question is not answered, show message saying it's required.
    if (q1 === undefined) {
      $("#required1").show();
    }
    if (q2 === undefined) {
      $("#required2").show();
    }
    if (q3 === undefined) {
      $("#required3").show();
    }
    if (q4 === undefined) {
      $("#required4").show();
    }
    if (q5 === undefined) {
      $("#required5").show();
    }

    // Places values in the Survey Results section of the html page
    $(".answer1").text(q1);
    $(".answer2").text(q2);
    $(".answer3").text(q3);
    $(".answer4").text(q4);
    $(".answer5").text(q5);

    // Reveals results
    $("#results").show();
  });
});
