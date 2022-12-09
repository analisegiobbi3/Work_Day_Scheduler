// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var currentTimeEl = $("#currentTime");
var btnEl = $(".saveBtn");
var descriptionEL = $(".description");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var hour = $(".hour");
var today = dayjs();
var todayHour = new Date();
var timeBlockEl = $(".time-block")


$(function () {
  //Add code to display the current date in the header of the page.
  currentDayEl.text(today.format('[Today is] dddd MMMM D, YYYY'));
  var hourEl = todayHour.getHours();


  //fuction saves the element when the button is pressed. If the page is refreshed, the text will hold
  btnEl.click(function(event){
    event.preventDefault();
    var timeEl = $(this).parent().attr("id")
    // var textEl = $(this).siblings(".description").attr
    var textEl = $(this).siblings(".description").val()
    localStorage.setItem(timeEl, textEl)
  });


  function getTime(){
    for (var i = 0; i<10; i++){
      //uses the id to figure out time 
      var calendarTime = timeBlockEl[i].id;
      //grabs time and from the hour element above and changes it to a string to compare to cal time
      hourEL = JSON.stringify(hourEl);
      if (hourEl === calendarTime){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    
      }else if (hourEl > calendarTime){
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    
      }else if (hourEl < calendarTime){
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    }
  }

  //calls function that changes color of elements to reflect time
  getTime();

  //gets the value set in each 
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("18"));
});
