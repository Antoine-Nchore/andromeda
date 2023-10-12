document.addEventListener('DOMContentLoaded', () => {
  
});

function getWeather(city) {
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
        console.log(data);
        document.querySelector(".city").textContent = city;
        document.querySelector(".temp").textContent = `Temperature: ${data.temp}°C`;
        document.querySelector(".Humidity").textContent = `Humidity: ${data.humidity}%`;
        document.querySelector(".Wind").textContent = `Wind speed: ${data.wind_speed} km/hr`;
      
      })
      .catch(error => console.log('error', error));
}
//Event Listners to the file
  const searchButton = document.querySelector(".SearchHere");
  searchButton.addEventListener('click',() => {
    const inputField = document.querySelector("#inputfield");
  getWeather(inputField.value);
    //console.log(data);
  } )
  





