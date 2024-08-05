const baseUrl = 'https://yahoo-weather5.p.rapidapi.com/weather';
const apiKey = '710530f2bbmshf7b393ce905efd3p1c0563jsnca6a90a54182';
const apiHost = 'yahoo-weather5.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
    }
};

let isCelsius = false;
let currentTempF = 0;

function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

function updateTemperatureDisplay() {
    const tempElement = document.getElementById('temperature');
    if (isCelsius) {
        tempElement.textContent = `${fahrenheitToCelsius(currentTempF)}°C`;
    } else {
        tempElement.textContent = `${currentTempF}°F`;
    }
}

function setTemperature(tempF) {
    currentTempF = tempF;
    updateTemperatureDisplay();
}

function updateForecastTemperatures() {
    const forecastItems = document.querySelectorAll('.forecast-item');
    forecastItems.forEach(item => {
        const highTemp = parseInt(item.getAttribute('data-high'));
        const lowTemp = parseInt(item.getAttribute('data-low'));
        if (isCelsius) {
            item.querySelector('.forecast-temp').textContent = `${fahrenheitToCelsius(highTemp)}°C / ${fahrenheitToCelsius(lowTemp)}°C`;
        } else {
            item.querySelector('.forecast-temp').textContent = `${highTemp}°F / ${lowTemp}°F`;
        }
    });
}

async function fetchWeather(city = 'jalandhar') {
    const url = `${baseUrl}?location=${city}&format=json&u=f`;
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        // Extract weather data
        const temp = data.current_observation.condition.temperature;
        const desc = data.current_observation.condition.text;
        const humidity = data.current_observation.atmosphere.humidity;
        const windSpeed = data.current_observation.wind.speed;
        const windDirection = data.current_observation.wind.direction;
        const visibility = data.current_observation.atmosphere.visibility;
        const pressure = data.current_observation.atmosphere.pressure;
        const sunrise = data.current_observation.astronomy.sunrise;
        const sunset = data.current_observation.astronomy.sunset;
        const cityName = data.location.city;
        const country = data.location.country;
        
        // Update DOM elements
        document.getElementById('cityName').textContent = `${cityName}, ${country}`;
        setTemperature(temp);
        document.getElementById('description').textContent = desc;
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('windSpeed').textContent = windSpeed;
        document.getElementById('windDirection').textContent = windDirection;
        document.getElementById('visibility').textContent = visibility;
        document.getElementById('pressure').textContent = pressure;
        document.getElementById('sunrise').textContent = sunrise;
        document.getElementById('sunset').textContent = sunset;
        
        // Update forecast
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';
        data.forecasts.forEach(forecast => {
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.setAttribute('data-high', forecast.high);
            forecastItem.setAttribute('data-low', forecast.low);
            forecastItem.innerHTML = `
                <div>${forecast.day}</div>
                <div><i class="fas fa-${getForecastIcon(forecast.code)}"></i></div>
                <div class="forecast-temp">${forecast.high}°F / ${forecast.low}°F</div>
                <div>${forecast.text}</div>
            `;
            forecastContainer.appendChild(forecastItem);
        });
        
        // Show the weather card
        document.getElementById('weatherCard').classList.remove('d-none');
        
        // Update forecast temperatures based on current unit
        updateForecastTemperatures();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function getForecastIcon(code) {
    // Map condition codes to Font Awesome icons
    const iconMap = {
        0: 'wind', 1: 'wind', 2: 'wind', 3: 'bolt', 4: 'bolt-lightning',
        5: 'snowflake', 6: 'snowflake', 7: 'snowflake', 8: 'icicles',
        9: 'cloud-rain', 10: 'cloud-rain', 11: 'cloud-showers-heavy',
        12: 'cloud-showers-heavy', 13: 'snowflake', 14: 'snowflake',
        15: 'snowflake', 16: 'snowflake', 17: 'cloud-hail-mixed',
        18: 'cloud-rain', 19: 'smog', 20: 'smog', 21: 'smog',
        22: 'smog', 23: 'wind', 24: 'wind', 25: 'icicles',
        26: 'cloud', 27: 'cloud-moon', 28: 'cloud-sun', 29: 'cloud-moon',
        30: 'cloud-sun', 31: 'moon', 32: 'sun', 33: 'moon',
        34: 'sun', 35: 'cloud-hail-mixed', 36: 'temperature-high',
        37: 'bolt', 38: 'bolt', 39: 'cloud-showers-heavy',
        40: 'cloud-rain', 41: 'snowflake', 42: 'snowflake',
        43: 'snowflake', 44: 'cloud', 45: 'bolt', 46: 'snowflake',
        47: 'bolt'
    };
    return iconMap[code] || 'question';
}

// Handle search form submission
document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchWeather(city);
    }
});

// Handle temperature unit toggle
document.getElementById('unitToggle').addEventListener('click', () => {
    isCelsius = !isCelsius;
    const toggleButton = document.getElementById('unitToggle');
    toggleButton.textContent = isCelsius ? 'Switch to °F' : 'Switch to °C';
    updateTemperatureDisplay();
    updateForecastTemperatures();
});

// Initial fetch
fetchWeather();