var currentTime = document.querySelector("#currentDay");
var timeContainer = document.querySelector(".time-container")
//var for current time

//using moment js for getting current time
var hour = function () {
    moment().format('h:mm:ss a')
}
setInterval(hour, 1000);


var currentDate = moment().format('MMMM Do YYYY');
var currentHourMoment = parseInt(moment().format('HH'));

//create function to display time on the page
var displayTime = function () {
    $("#currentDay").text(currentDate);
};

//create array with every hour and then loop through it on function to change background color
var hours = ['8am', '9am', '10am', '11am', '12pm', '13pm', '14pm', '15pm', '16pm', '17pm', '18pm', '19pm']

//function to change background color
hours.forEach(function (hour) {
    var currentHourEl = $("#" + hour);
    
    if (parseInt(hour) < currentHourMoment) {
        currentHourEl.attr("class", "form-control past")
    } else if (parseInt(hour) == currentHourMoment) {
        currentHourEl.attr("class", "form-control present")
    } else {
        currentHourEl.attr("class", "form-control future")
    }

    currentHourEl.val(localStorage.getItem(hour))
})


function saveContext(event) {
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val())
}


$(".saveBtn").on("click", saveContext)
// $("textarea").forEach(element => {
//     console.log(element)
// })
//lets try this
//01 create var that will hold object

displayTime();
