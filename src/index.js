const weatherContainer = document.querySelector(".weather");
const search = document.querySelector("#search");
const form = document.querySelector("form");

form.addEventListener("submit", function(e)
{
    e.preventDefault()
    let city = document.getElementById("city");
    getWeatherInfo(city)
    
})

async function getWeatherInfo(city){
    let value = city.value
    url = "http://api.openweathermap.org/data/2.5/weather?q="+value+"&units=metric&appid=8235a17d6d4b4b4ea5ba07566b7ef6d7"

    try{
        const response = await fetch(url, {mode: 'cors'})
        const weatherInfo = await response.json()
        console.log(weatherInfo)
        if(weatherInfo.cod != 200)
        {
            alert("Enter valid city name")
            return;
        }
        const cityName = document.querySelector(".name")
        cityName.innerText = "";
        cityName.innerText = weatherInfo.name;

        const temp = document.querySelector(".temp")
        console.log(temp)
        temp.innerText = "";
        temp.innerText = weatherInfo.main.temp + String.fromCharCode(176) +"C";

        const weather = document.querySelector(".weather-info")
        weather.innerText = "";
        weather.innerText = "Info: "+weatherInfo.weather[0].main;

        const description = document.querySelector(".description")
        description.innerText = "";
        description.innerText = "Description: "+weatherInfo.weather[0].description;

        const feelslike = document.querySelector(".feels-like")
        feelslike.innerText = "";
        feelslike.innerText = "Feels Like: "+weatherInfo.main.feels_like + String.fromCharCode(176) +"C";

        const humidity = document.querySelector(".humidity");
        humidity.innerText =  "";
        humidity.innerText =  "Humidity: "+weatherInfo.main.humidity+" %";

        const windspeed = document.querySelector(".wind-speed");
        windspeed.innerText = "";
        windspeed.innerText = "Wind Speed: "+weatherInfo.wind.speed+" km/h";

        const pressure = document.querySelector(".pressure");
        pressure.innerText = "";
        pressure.innerText = "Pressure: "+weatherInfo.main.pressure+" mb";

        // const weatherImg = document.createElement("img")
        // const icon = weatherInfo.weather[0].icon;
        // weatherImg.src = "http://openweathermap.org/img/w/"+icon+".png"

        city.value = "";
    }catch(err){
        console.log(err)
    }

}
