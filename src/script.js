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