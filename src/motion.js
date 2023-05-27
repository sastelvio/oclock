//TOGGLE BETWEEN DIGITAL AND ANALOGIC
//Check if toggle is digital or analogic
window.addEventListener('load', function () {
  const checkbox = document.getElementById('clock_mode');
  const analogClock = document.getElementById('analogic');
  const digitalClock = document.getElementById('digital');

  // Check the initial state of the checkbox
  if (checkbox.checked) {
    analogClock.style.display = 'flex';
    digitalClock.style.display = 'none';

    analogClock.classList.remove('hidden');
    digitalClock.classList.add('hidden');

  } else {
    analogClock.style.display = 'none';
    digitalClock.style.display = 'flex';

    analogClock.classList.add('hidden');
    digitalClock.classList.remove('hidden');
  }

  // Add event listener to checkbox change
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      analogClock.style.display = 'flex';
      digitalClock.style.display = 'none';
    } else {
      analogClock.style.display = 'none';
      digitalClock.style.display = 'flex';
    }
  });
});
//END TOGGLE BETWEEN DIGITAL AND ANALOGIC

//map the front-end elements (D=Digital, A=Analogic)
const hourD = document.getElementById('hour');
const minuteD = document.getElementById('minute');
const secondD = document.getElementById('second');
const hourDescD = document.getElementById('hour_desc');
const minuteDescD = document.getElementById('minute_desc');
const secondDescD = document.getElementById('second_desc');
const dateD = document.getElementById('today_d');
const dateA = document.getElementById('today_a');

//EXECUTE THE CLOCK
//to update the elements according to the current time
const dateClock = setInterval(function todayTime() {
  let dateTimeNow = new Date(); //get the current date + time from the system


  let hourNow = dateTimeNow.getHours(); //store the hours from the current date + time
  let minuteNow = dateTimeNow.getMinutes(); //store the minutes from the current date + time
  let secondNow = dateTimeNow.getSeconds(); //store the seconds from the current date + time

  //DIGITAL
  //add zero before the time if less than 10 
  if (hourNow < 10) hourNow = '0' + hourNow;
  if (minuteNow < 10) minuteNow = '0' + minuteNow;
  if (secondNow < 10) secondNow = '0' + secondNow;

  if (hourNow < 2) { hourDescD.textContent = 'Hour'; } else { hourDescD.textContent = 'Hours'; }
  if (minuteNow < 2) { minuteDescD.textContent = 'Minute'; } else { minuteDescD.textContent = 'Minutes'; }
  if (secondNow < 2) { secondDescD.textContent = 'Second'; } else { secondDescD.textContent = 'Seconds'; }

  //set the time to the view
  hourD.textContent = hourNow;
  minuteD.textContent = minuteNow;
  secondD.textContent = secondNow;
  //END DIGITAL
  //ANALOGIC
  const secondHand = document.querySelector('.second_hand');
  const minuteHand = document.querySelector('.min_hand');
  const hourHand = document.querySelector('.hour_hand');

  const seconds = dateTimeNow.getSeconds();
  const minutes = dateTimeNow.getMinutes();
  const hours = dateTimeNow.getHours();

  const secondAngle = ((seconds / 60) * 360) + 90;
  const minuteAngle = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hourAngle = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  //END ANALOGIC
  //DATE
  let dayToday = dateTimeNow.getDate();
  let monthToday = (1 + dateTimeNow.getMonth());
  let yearToday = dateTimeNow.getFullYear();

  //store the hours from the current date + time
  if (dayToday < 10) dayToday = '0' + dayToday;
  if (monthToday < 10) monthToday = '0' + monthToday;

  //set the date to the Front-End
  dateD.textContent = dayToday + ' - ' + monthToday + ' - ' + yearToday;
  dateA.textContent = dayToday + ' - ' + monthToday + ' - ' + yearToday;
  //END DATE
});
//END EXECUTE THE CLOCK
//BACKGROUND SELECTORs
const degreeRange = document.getElementById('degreeRange');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientBox = document.getElementById('gradientBox');
const degreeText = document.getElementById('degreeText');

function updateGradientBackground() {
  const degree = degreeRange.value;
  const colorStart = color1.value;
  const colorEnd = color2.value;
  document.body.style.background = `linear-gradient(${degree}deg, ${colorStart}, ${colorEnd})`;
  degreeText.textContent = `Degree: ${degree}°`;
}

degreeRange.addEventListener('input', updateGradientBackground);
color1.addEventListener('input', updateGradientBackground);
color2.addEventListener('input', updateGradientBackground);

// Initialize the gradient background on page load
updateGradientBackground();

//END BACKGROUND SELECTORs