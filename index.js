const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");
const wind = document.querySelector("#wind");




const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const mont = new Date();
let mname = month[d.getMonth()];
document.getElementById("month").innerHTML = mname;
let date = d.getDate();
document.getElementById("date").innerHTML = date;


input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",                                                           //cad7ec124945dcfff04e457e76760d90
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4335202d588ceb767b28c380e12dd2c`);
  

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      // Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      Temp.innerHTML = (data.main.temp - 273.15).toFixed(1);
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdate("indore");
