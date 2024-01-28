var alarms = []; //initializing alarms array to store the alarms

document.addEventListener("DOMContentLoaded", function () {
  updateClock();
  setInterval(updateClock, 1000); // Updates every second
});

//function used to get the current time and displays it in 24hrs format also checks if there are any alarm set for that point of time
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = `<strong>${hours}:${minutes}:${seconds}</strong>`;
  document.getElementById("clock").innerHTML = `Current Time: ${currentTime}`;

  checkAlarms(now); //to check if any Alarm is there for that point of time
}

function checkAlarms(currentTime) {
  alarms.forEach((alarm) => {
    const alarmTime = new Date(`1970-01-01T${alarm.time}`);
    if (
      currentTime.getHours() === alarmTime.getHours() &&
      currentTime.getMinutes() === alarmTime.getMinutes() &&
      currentTime.getSeconds() === alarmTime.getSeconds()
    ) {
      showAlert();
    }
  });
}

//if there is Alarm we will show alert message
function showAlert() {
  alert("Alarm is going off!");
}

// Include utility functions
document.write('<script type="text/javascript" src="alarmUtils.js"></script>');

// Include form-related functions
document.write('<script type="text/javascript" src="alarmForm.js"></script>');

// Include list-related functions
document.write('<script type="text/javascript" src="alarmList.js"></script>');
