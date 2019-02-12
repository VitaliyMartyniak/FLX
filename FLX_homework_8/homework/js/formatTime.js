function formatTime (totalMinutes) {
var days = Math.floor(totalMinutes / 1440);
totalMinutes %= 1440;
var hours = Math.floor(totalMinutes / 60);
var minutes = totalMinutes % 60;
console.log(days + "day(s)" + hours + "hour(s)" + minutes + "minute(s)" );
}

formatTime(2500)