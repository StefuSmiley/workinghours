let result = 0;
let timeDiffDecimal = 0;

let resultR = 0;
let rtimeDiffDecimal = 0;

function calculateTotal() {
  const inputElement = document.getElementById("roomInput");
  let time = Number(inputElement.value);

  time = (time * 15) / 60;
  result = Number.parseFloat(time.toFixed(2));

  document.getElementById("roomInput").innerHTML = `${result} hours`;
}

function calculateTime() {
  const startTime = document.getElementById("startTime").value;
  const finishTime = document.getElementById("finishTime").value;

  if (!startTime || !finishTime) {
    alert("Please enter both start and finish times.");
    return;
  }

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [finishHour, finishMinute] = finishTime.split(":").map(Number);

  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(finishHour) ||
    isNaN(finishMinute)
  ) {
    alert("Invalid time format. Please use HH:MM format.");
    return;
  }

  const startTimeDecimal = startHour + startMinute / 60;

  const finishTimeDecimal = finishHour + finishMinute / 60;

  timeDiffDecimal = finishTimeDecimal - startTimeDecimal - 20 / 60;

  document.getElementById(
    "result"
  ).innerText = `Working Time: ${timeDiffDecimal.toFixed(
    2
  )} hours (including break)`;
}

function calculateBunkBeds() {
  const inputElement = document.querySelector(".js-bunkbed-input");
  let bunkTime = Number(inputElement.value);

  bunkTime = (bunkTime * 10) / 60;
  bunk = Number.parseFloat(bunkTime.toFixed(2));

  const finalResult = bunk + result;

  document.querySelector(
    ".js-room-time"
  ).innerHTML = `${finalResult} hours, including bunk beds`;

  const buttonElement2 = document.getElementById("compare");

  if (finalResult.toFixed(2) === timeDiffDecimal.toFixed(2)) {
    buttonElement2.innerHTML = "Both values are equal";
    buttonElement2.classList.add("are-equal");
    buttonElement2.classList.remove("arent-equal");
  } else {
    buttonElement2.innerHTML = "The values are not equal";
    buttonElement2.classList.remove("are-equal");
    buttonElement2.classList.add("arent-equal");
  }
}

function redCalculateTotal() {
  const inputElement = document.getElementById("rRoomInput");
  let time = Number(inputElement.value);

  time = (time * 16.75) / 60;
  resultR = Number.parseFloat(time.toFixed(2));

  document.getElementById("rRoomInput").innerHTML = `${resultR} hours`;
}

function redCalculateTime() {
  const startTime = document.getElementById("rStartTime").value;
  const finishTime = document.getElementById("rFinishTime").value;

  if (!startTime || !finishTime) {
    alert("Please enter both start and finish times.");
    return;
  }

  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [finishHour, finishMinute] = finishTime.split(":").map(Number);

  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(finishHour) ||
    isNaN(finishMinute)
  ) {
    alert("Invalid time format. Please use HH:MM format.");
    return;
  }

  const startTimeDecimal = startHour + startMinute / 60;

  const finishTimeDecimal = finishHour + finishMinute / 60;

  rtimeDiffDecimal = finishTimeDecimal - startTimeDecimal - 20 / 60;

  document.getElementById(
    "rResult"
  ).innerText = `Working Time: ${rtimeDiffDecimal.toFixed(
    2
  )} hours (including break)`;
}

function calculateSofas() {
  const inputElement2 = document.querySelector(".js-sofa-input");
  let sofaTime = Number(inputElement2.value);

  sofaTime = (sofaTime * 10) / 60;
  sofa = Number.parseFloat(sofaTime.toFixed(2));

  const finalResult = sofa + resultR;

  document.querySelector(
    ".js-red-room-time"
  ).innerHTML = `${finalResult.toFixed(2)} hours, including sofas`;

  const buttonElement3 = document.getElementById("rCompare");

  if (finalResult.toFixed(2) === rtimeDiffDecimal.toFixed(2)) {
    buttonElement3.innerHTML = "Both values are equal";
    buttonElement3.classList.add("are-equal");
    buttonElement3.classList.remove("arent-equal");
  } else {
    buttonElement3.innerHTML = "The values are not equal";
    buttonElement3.classList.remove("are-equal");
    buttonElement3.classList.add("arent-equal");
  }
}
