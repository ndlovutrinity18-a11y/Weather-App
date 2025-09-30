function displayWeatherCondition(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature=response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);

    let cityElement= document.querySelector("#city");
    cityElement.innerHTML=response.data.city;

    let conditionElement=document.querySelector("#condition");
    conditionElement.innerHTML=response.data.condition.description;

    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=response.data.temperature.humidity;

    let windSpeedElement=document.querySelector("#wind-speed");
    windSpeedElement.innerHTML=Math.round(response.data.wind.speed);

    let timeElement=document.querySelector("#time");
    timeElement.innerHTML=formatDate(new Date(response.data.time*1000));
    
    let iconElement=document.querySelector("#icon");
    iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" alt="${response.data.condition.description}">`;
}
function formatDate(date) {
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let hours=date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[date.getMonth()];
    return `${day}, ${date.getDate()} ${month} ${date.getFullYear()} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey="4o3f7f642638142f8fcf994tc99ba709"
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);

}
function handleWeatherFormSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    searchCity(searchInput.value);
}

let weatherFormElement = document.querySelector("#weather-form");
weatherFormElement.addEventListener("submit",handleWeatherFormSubmit);
searchCity("Johannesburg");