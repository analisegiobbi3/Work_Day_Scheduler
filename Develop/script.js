//variables for ids within the function
var currentDayEl = $("#currentDay");
var currentTimeEl = $("#currentTime");
var btnEl = $(".saveBtn");
var descriptionEL = $(".description");
var hour = $(".hour");
var today = dayjs();
var timeBlockEl = $(".time-block");



$(function () {
  //Uses the current day id to add the date to the program 
  currentDayEl.text(today.format('[Today is] dddd MMMM D, YYYY'));
  

  //attempt to add working clock on page. Looks like clock displayed but can't get countdown to work
  function displayTime() {
    var liveTime = today.format('hh:mm a');
    currentTimeEl.text(liveTime);
  }
  displayTime();
  setInterval(displayTime, 1000);


  //fuction saves the element when the button is pressed. If the page is refreshed, the text will hold

  btnEl.click(function(event){
    event.preventDefault();
    var timeEl = $(this).parent().attr("id");
    // var textEl = $(this).siblings(".description").attr
    var textEl = $(this).siblings(".description").val();
    localStorage.setItem(timeEl, textEl);
  });

  // function for adding color to the boxes based on the current time
  function getTime(){
    $(".time-block").each(function(){
      // var calendarTime = timeBlockEl.id;
      var calendarTime = parseInt($(this).attr('id'));
      var hourEl = today.hour();
      if (hourEl < calendarTime){
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    
      }else if (hourEl > calendarTime){
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    
      }else{
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }

    })
  }

  //attempt to use a for loop to add color. Leaving this here to revist and figure out why this didn't work 

  // function getTime(){

  //   for (var i = 0; i<10; i++){
  //     //uses the id to figure out time 
  //     var calendarTime = timeBlockEl[i].id;
  //     var hourEl = today.hour();
  //     // console.log(calendarTime)
  //     // console.log(hourEl)
  //     //grabs time and from the hour element above and changes it to a string to compare to cal time
  //     if (hourEl < calendarTime){
  //       $(this).removeClass("past");
  //       $(this).removeClass("present");
  //       $(this).addClass("future");
    
  //     }else if (hourEl > calendarTime){
  //       $(this).removeClass("present");
  //       $(this).removeClass("future");
  //       $(this).addClass("past");
    
  //     }else{
  //       $(this).removeClass("past");
  //       $(this).removeClass("future");
  //       $(this).addClass("present");
  //     }
  //   }
  // }

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
