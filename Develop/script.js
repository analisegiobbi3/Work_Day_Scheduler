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
var todayTime = new Day();
var todayHours = todayTime.getHours();
var todayMinutes = odayTime.getMinutes();

$(function () {
  //Add code to display the current date in the header of the page.
  currentDayEl.text(today.format('[Today is] dddd MMMM D, YYYY'));
  // currentTimeEl.text(today.format('h:mm A'));

  setInterval(function() {
    currentTimeEl.text(today.format('h:mm A'));
  }, 1000);

  btnEl.click(function(){
    //add function for saving and storing the text in events


  })

  // will need to add a loop to look at each section and compare the hour text to the actual time
  function getTime(){
    if (hour === todayHours){
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  
    }else if (hour < todayHours){
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
  
    }else if (hour > todayHours){
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  }

  getTime();







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
