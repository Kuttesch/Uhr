if (localStorage.getItem('darkModeEnabled') === 'true') {
    enableDarkMode();
  }
  
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
  }
  
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
  }
  
  function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }
  
  document.getElementById('toggle-btn').addEventListener('click', toggleDarkMode);
  
function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let miliseconds = now.getMilliseconds();

  let digitalClock = document.getElementById('digital-clock');
  digitalClock.textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')// + ':' + miliseconds.toString().padStart(3, '0');

  let hourHand = document.getElementById('hand-hour');
  let minuteHand = document.getElementById('hand-minute');
  let secondHand = document.getElementById('hand-sec');
  let milsecHand = document.getElementById('hand-mili');

  let degPerHour = 360 / 12;
  let degPerMinute = 360 / 60;
  let degPerSecond = 360 / 60;
  let degPerMilSec = 360 / 1000;

  let hourRotation = (hours % 12) * degPerHour + minutes * degPerMinute / 12;
  let minuteRotation = minutes * degPerMinute;
  let secondRotation = seconds * degPerSecond;
  let milsecRotation = miliseconds * degPerMilSec;

  hourHand.style.transform = ' rotate(' + hourRotation + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteRotation + 'deg)';
  secondHand.style.transform = 'rotate(' + secondRotation + 'deg)';
  milsecHand.style.transform = 'rotate(' + milsecRotation + 'deg)';

  setTimeout(updateClock, 1);
}


updateClock();
