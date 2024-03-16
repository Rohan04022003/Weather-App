let inputData = document.querySelector("#right input");
let search = document.getElementById("Search");
let countryName = document.getElementById("middle1div");
let temperature = document.getElementById("temperature");
let dayInfo = document.getElementById("dayInfo");
let windSpeed = document.getElementById("windSpeed");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let feelsTemperature = document.getElementById("feelsTemperature");

async function getdata() {
  let respone = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${countryName.innerText}&appid=e4d6d55b064dd352af01e7ac3fd9f4c8`
  );
  let data = await respone.json();
  console.log(data);

  countryName.innerText = data.name;
  temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(
    0
  )}<sup>&#8451;</sup>`;
  windSpeed.innerHTML;
  dayInfo.innerText = data.weather[0].main;
  windSpeed.innerText = data.wind.speed + " km/h";
  humidity.innerText = data.main.humidity + "%";
  pressure.innerText = data.main.pressure + " mbar";
  feelsTemperature.innerHTML = `${(data.main.feels_like - 273.15).toFixed(
    0
  )}<sup>&#8451;</sup>`;
}
getdata();

search.addEventListener("click", function () {
  if (inputData.value != "") {
    var searchCityName = inputData.value;
    countryName.innerText = searchCityName;
    inputData.value = "";
    getdata();
  } else {
    alert("Please enter your city!!!");
  }
});

function time() {
  let todayTime = document.getElementById("todayTime");

  setInterval(function () {
    let day = new Date();
    todayTime.innerText = day.toLocaleTimeString();
  }, 1000);
}
time();
