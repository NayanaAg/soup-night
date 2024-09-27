// Countdown code from W3Schools

// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2024 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // Converted them into strings to have a leading 0 for uniform text display
    var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

    // Output the result in an element with id="demo"
    document.getElementById("countdown-js").innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-js").innerHTML = "soup night has ended.";
    }
}, 1000);
// Countdown end
