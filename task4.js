async function fetchWeather(city) {
  const apiKey = '55d3b226b3efb21971a78c06405e849e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    displayError('Request failed, check internet connectivity.');
    console.error('Fetch error:', error);
  }
}

function displayWeather(data) {
  const weatherDiv = document.getElementById('weather');
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');

  location.textContent = `Location: ${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Condition: ${data.weather[0].description}`;
  
  weatherDiv.style.display = 'block';
}

function displayError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
}

fetchWeather('Aba');
