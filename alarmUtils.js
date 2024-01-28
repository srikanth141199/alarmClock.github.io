//function used to check if the time entered to set Alarm is valid that is hrs in between 0-23, minutes/seconds in between 0-59.

function validateInput(hour, minute, second) {
  return (
    /^\d+$/.test(hour) &&
    /^\d+$/.test(minute) &&
    /^\d+$/.test(second) &&
    hour >= 0 &&
    hour <= 23 &&
    minute >= 0 &&
    minute <= 59 &&
    second >= 0 &&
    second <= 59
  );
}
