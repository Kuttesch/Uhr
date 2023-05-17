if (localStorage.getItem("darkModeEnabled") === "true") {
	enableDarkMode();
}

function enableDarkMode() {
	document.body.classList.add("dark-mode");
	localStorage.setItem("darkModeEnabled", "true");
}

function disableDarkMode() {
	document.body.classList.remove("dark-mode");
	localStorage.setItem("darkModeEnabled", "false");
}

function toggleDarkMode() {
	if (document.body.classList.contains("dark-mode")) {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
}

document.getElementById("toggle-btn").addEventListener("click", toggleDarkMode);

const updateClock = () => {
	const now = new Date();

	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const miliseconds = now.getMilliseconds();

	let digitalClock = document.getElementById("digital-clock");
	digitalClock.textContent =
		hours.toString().padStart(2, "0") +
		":" +
		minutes.toString().padStart(2, "0") +
		":" +
		seconds.toString().padStart(2, "0"); // + ':' + miliseconds.toString().padStart(3, '0');

	let hourHand = document.getElementById("hand-hour");
	let minuteHand = document.getElementById("hand-minute");
	let secondHand = document.getElementById("hand-sec");
	let milsecHand = document.getElementById("hand-mili");

	const degPerHour = 360 / 12;
	const degPerMinute = 360 / 60;
	const degPerSecond = 360 / 60;
	const degPerMilSec = 360 / 1000;

	const hourRotation =
		(hours % 12) * degPerHour + (minutes * degPerMinute) / 12;
	const minuteRotation = minutes * degPerMinute;
	const secondRotation = seconds * degPerSecond;
	const milsecRotation = miliseconds * degPerMilSec;

	hourHand.style.transform =
		/*'translate(-50%, -50%)*/ " rotate(" + hourRotation + "deg)";
	minuteHand.style.transform =
		/*'translate(-50%, -50%)*/ "rotate(" + minuteRotation + "deg)";
	secondHand.style.transform =
		/*'translate(-50%, -50%)*/ "rotate(" + secondRotation + "deg)";
	milsecHand.style.transform =
		/*'translate(-50%, -50%)*/ "rotate(" + milsecRotation + "deg)";

	setTimeout(updateClock, 1);
};

updateClock();
