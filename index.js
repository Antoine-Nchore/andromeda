document.addEventListener('DOMContentLoaded', () => {
  getWeather("New York");
});

function getWeather(city) {
  const apiKey = "i8/oOmZWiKWws6kFjI8lsg==fRITSduo7vzUa9Es";
  const url = "https://api.api-ninjas.com/v1/weather?city=city";

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
        console.log(data);
        document.querySelector(".city").textContent = city;
        document.querySelector(".temp").textContent = `Temperature: ${data.temp}°C`;
        document.querySelector(".Humidity").textContent = `Humidity: ${data.humidity}%`;
        document.querySelector(".Wind").textContent = `Wind speed: ${data.wind_speed} km/hr`;
        //document.querySelector(".description").textContent = `Weather: ${data.weather[0].description}`;
      })
      .catch(error => console.log('error', error));
}



