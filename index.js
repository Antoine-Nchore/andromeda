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
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = `Temperature: ${data.main.temp}°C`;
        document.querySelector(".humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
        document.querySelector(".description").innerHTML = `Weather: ${data.weather[0].description}`;
      })
      .catch(error => console.log('error', error));
}



