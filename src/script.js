function handleWeatherFormSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement= document.querySelector("#city");
    cityElement.innerHTML=searchInput.value;
}

let weatherFormElement = document.querySelector("#weather-form");
weatherFormElement.addEventListener("submit",handleWeatherFormSubmit);