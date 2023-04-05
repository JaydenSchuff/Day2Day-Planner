// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$("#currentDay").text(dayjs().format('dddd MMMM D, YYYY'));


$(document).ready(function () {
  $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var toDo = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text local
      localStorage.setItem(time, toDo);
  })

  function timeBlock() {
    var hour = dayjs().hour();
    //shows the current hour is working
    console.log(hour)

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id").split("hour")[1]);

        if (currentHour > hour) {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        } else if (currentHour == hour) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        }
        console.log(currentHour)
    })
  }
  $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));


    timeBlock();
});
