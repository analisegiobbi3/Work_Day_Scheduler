// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var currentTimeEl = $("#currentTime");
var btnEl = $(".saveBtn");
var descriptionEL = $(".description");
var hourNineEl = $("#hour-9");
var hourTenEl = $("#hour-10");
var hourElevenEl = $("#hour-11");
var past = $("past");
var present = $("present");
var future = $("future");
var hour = $("#hour");
var today = dayjs();
// var todayTime = new Day();
// var todayHours = todayTime.getHours();
// var todayMinutes = odayTime.getMinutes();

$(function () {
  //Add code to display the current date in the header of the page.
  currentDayEl.text(today.format('[Today is] dddd MMMM D, YYYY'));
  // currentTimeEl.text(today.format('h:mm A'));

  setInterval(function() {
    currentTimeEl.text(today.format('h:mm A'));
  }, 1000);

  btnEl.click(function(){
    var timeEl = $(".hour").val();
    var textEl = $(".description").val();

    localStorage.setItem(timeEl, textEl)


  })

  // will need to add a loop to look at each section and compare the hour text to the actual time
  // function getTime(){
  //   if (hour === todayHours){
  //     $(this).removeClass("past");
  //     $(this).removeClass("future");
  //     $(this).addClass("present");
  
  //   }else if (hour < todayHours){
  //     $(this).removeClass("present");
  //     $(this).removeClass("future");
  //     $(this).addClass("past");
  
  //   }else if (hour > todayHours){
  //     $(this).removeClass("past");
  //     $(this).removeClass("present");
  //     $(this).addClass("future");
  //   }
  // }

  // getTime();

  //gets the value set in each 
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));







  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
