'use strict'

// 8a149666dfa50b5ddd8ab9c8f1b02e1c
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

"use strict"
let main_div = document.querySelector(".weather_app_outer_div")
let container = document.querySelector(".weather_app_main_div")
let weather_container = document.querySelector("#Weather_metrics_main_div");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let city = document.querySelector("#location");

var cityName = document.getElementById('location_input');

function getWeather() 
{
   
    let apikey = "8a149666dfa50b5ddd8ab9c8f1b02e1c";
    let api = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    if(cityName.value)
    {
        checkWeather(cityName.value)
    }

    function checkWeather(city)
    {
        fetch(api+`&appid=${apikey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.main.temp);
            
            temperature.innerHTML = data.main.temp +'&#8451';
            
            humidity.innerHTML = `<i class="fa-solid fa-droplet icon"></i> `+`<br>`+data.main.humidity +" %";
            windSpeed.innerHTML =` <i class="fa-solid fa-cloud-bolt icon"></i> `+`<br>`+data.wind.speed + "m/s" ;
            updateBackground(data.main.temp)
        })
    }
    city.innerText = cityName.value
    cityName.value=''
}

function updateBackground(temp) {

    if (temp > 26) {
        main_div.style.backgroundImage = 'url("Bg-1.png")';
        container.style.color = 'black';

    } else if (temp >= 20 && temp <= 25) {
        main_div.style.backgroundImage = 'url("Bg-2.png")';
        container.style.color = 'white';

    } else {
        main_div.style.backgroundImage = 'url("Bg-3.png")';
        container.style.color = 'white';

    }
}

