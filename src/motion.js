//html element from the Front-End
const hourFE = document.getElementById('hour');
const minuteFE = document.getElementById('minute');
const secondFE = document.getElementById('second');
const hourDescFE = document.getElementById('hour_desc');
const minuteDescFE = document.getElementById('minute_desc');
const secondDescFE = document.getElementById('second_desc');
const dateFE = document.getElementById('today');

//to update the elements according to the current time
const dateClock = setInterval(function todayTime() {
    let dateTimeNow = new Date(); //get the current date + time from the system

    //TIME

    let hourNow = dateTimeNow.getHours(); //store the hours from the current date + time
    let minuteNow = dateTimeNow.getMinutes(); //store the minutes from the current date + time
    let secondNow = dateTimeNow.getSeconds(); //store the seconds from the current date + time

    //add zero before the time if less than 10 
    if (hourNow < 10) hourNow = '0' + hourNow;
    if (minuteNow < 10) minuteNow = '0' + minuteNow;
    if (secondNow < 10) secondNow = '0' + secondNow;

    if (hourNow < 2) { hourDescFE.textContent = 'Hour'; } else { hourDescFE.textContent = 'Hours'; }
    if (minuteNow < 2) { minuteDescFE.textContent = 'Minute'; } else { minuteDescFE.textContent = 'Minutes'; }
    if (secondNow < 2) { secondDescFE.textContent = 'Second'; } else { secondDescFE.textContent = 'Seconds'; }

    //set the time to the Front-End
    hourFE.textContent = hourNow;
    minuteFE.textContent = minuteNow;
    secondFE.textContent = secondNow;

    //DATE
    let dayToday = dateTimeNow.getDate();
    let monthToday = (1 + dateTimeNow.getMonth());
    let yearToday = dateTimeNow.getFullYear();

    //store the hours from the current date + time
    if (dayToday < 10) dayToday = '0' + dayToday;
    if (monthToday < 10) monthToday = '0' + monthToday;

    //set the date to the Front-End
    dateFE.textContent = dayToday + ' - ' + monthToday + ' - ' + yearToday;
});


//BACKGROUND SELECTORs
const degreeRange = document.getElementById('degreeRange');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');

function updateGradientBackground() {
  const degree = degreeRange.value;
  const colorStart = color1.value;
  const colorEnd = color2.value;
  document.body.style.background = `linear-gradient(${degree}deg, ${colorStart}, ${colorEnd})`;
}

degreeRange.addEventListener('input', updateGradientBackground);
color1.addEventListener('input', updateGradientBackground);
color2.addEventListener('input', updateGradientBackground);

// Initialize the gradient background on page load
updateGradientBackground();



