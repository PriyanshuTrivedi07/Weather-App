const API_KEY = "d029480d95bf2b1079a6c3b9e99a0b99";
const url = "https://api.openweathermap.org/data/2.5/weather?q";


// display the weather of etawah by default
window.addEventListener('load', () => fetchWeather('Etawah'));


const searchText = document.getElementById('search-text');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
    const city = searchText.value;
    // console.log(city);
    if(!city) return;
    fetchWeather(city);
    searchText.value = '';
})

// Async function to fetch Weather from API 
async function fetchWeather(city){
    const res = await fetch(`${url}=${city}&appid=${API_KEY}&units=metric`);
    const data = await res.json();

    // console.log(data);
    
    // Calling a function with passing 'data' to it
    displayWeather(data);

}


// function to display data on the screen 
function displayWeather(data){
    const cityName = document.getElementById('city');
    const temperature = document.getElementById('temp');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const currWeather = document.querySelector('.curr-weather');
    const weatherImg = document.querySelector('.weather-img img');

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';
    windSpeed.innerHTML = data.wind.speed + ' m/s';
    currWeather.innerHTML = data.weather[0].description;
    weatherImg.src = data.weather[0].icon + '.png';
    weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}



