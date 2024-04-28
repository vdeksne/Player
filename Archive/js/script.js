// script.js
document.addEventListener('DOMContentLoaded', function () {
  setupCountdown('April 28, 2024 00:00:00', 'days-1', 'hours-1', 'minutes-1', 'seconds-1');
  setupCountdown('April 28, 2024 00:00:00', 'days-2', 'hours-2', 'minutes-2', 'seconds-2');

  function setupCountdown(targetDateString, daysId, hoursId, minutesId, secondsId) {
    var targetDate = new Date(targetDateString).getTime();
    var daysSpan = document.getElementById(daysId);
    var hoursSpan = document.getElementById(hoursId);
    var minutesSpan = document.getElementById(minutesId);
    var secondsSpan = document.getElementById(secondsId);

    function updateCountdown() {
      var now = new Date().getTime();
      var distance = targetDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysSpan.textContent = formatTime(days);
      hoursSpan.textContent = formatTime(hours);
      minutesSpan.textContent = formatTime(minutes);
      secondsSpan.textContent = formatTime(seconds);

      if (distance < 0) {
        clearInterval(interval);
        daysSpan.parentElement.innerHTML = "Event has started!";
      }
    }

    function formatTime(time) {
      return time < 10 ? '0' + time : time; // Add leading zero if the number is less than 10
    }

    updateCountdown(); // Run once immediately to avoid delay
    var interval = setInterval(updateCountdown, 1000);
  }
});
