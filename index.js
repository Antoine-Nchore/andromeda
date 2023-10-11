document.addEventListener('DOMContentLoaded', () => {
  getWeather();
});

function getWeather(city = "Amsterdam") {
  const apiKey = "i8/oOmZWiKWws6kFjI8lsg==fRITSduo7vzUa9Es";
  const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;

  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "i8/oOmZWiKWws6kFjI8lsg==fRITSduo7vzUa9Es");

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
  };

  fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
          // Extract relevant information from the data
          const temperature = data.main.temp;
          const cityName = data.name;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;

          // Update your HTML elements with the extracted data
          document.querySelector('.temp').textContent = `${temperature}°C`;
          document.querySelector('.city').textContent = cityName;
          document.querySelector('.Humidity').textContent = `${humidity}%`;
          document.querySelector('.Wind').textContent = `${windSpeed} km/hr`;
      })
      .catch(error => console.log('error', error));
}



