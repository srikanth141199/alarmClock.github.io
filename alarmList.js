//Function to display alarms
function displayAlarms() {
  const alarmList = document.getElementById("alarm-list");
  alarmList.innerHTML = "";

  alarms.forEach((alarm) => {
    const listItem = document.createElement("li");
    listItem.classList.add("alarm-item");

    const alarmAtEl = document.createElement("span");
    alarmAtEl.textContent = "Alarm at:  ";

    listItem.appendChild(alarmAtEl);

    const alarmTimeEl = document.createElement("strong");
    alarmTimeEl.innerHTML = alarm.time;

    listItem.appendChild(alarmTimeEl);

    //delete button with 'Click' event to handle delete.
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteAlarm(alarm.index));

    listItem.appendChild(deleteButton);
    alarmList.appendChild(listItem);
  });
}

//function to delete Alarm
function deleteAlarm(index) {
  let tempArr = [];
  alarms.forEach((alarm) => {
    alarm.index != index ? tempArr.push(alarm) : "";
  });
  alarms = tempArr;
  displayAlarms();
}
