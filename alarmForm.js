//function to take inputs to set Alarm
function setAlarm() {
  const hour = document.getElementById("hour").value;
  const minute = document.getElementById("minute").value;
  const second = document.getElementById("second").value;

  if (validateInput(hour, minute, second)) {
    const alarmTime = `${hour}:${minute}:${second}`;
    const alarm = { time: alarmTime, index: alarms.length };
    alarms.push(alarm);
    displayAlarms();
  } else {
    //if the input is not valid Alert will be displayed
    alert("Invalid input. Please enter a valid time.");
  }
}
