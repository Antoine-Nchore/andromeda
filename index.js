// Fetching data from a public API
document.addEventListener('DOMContentLoaded', () =>{
    getWeather();
})
function getWeather(city = 'Amsterdam'){
    const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "i8/oOmZWiKWws6kFjI8lsg==fRITSduo7vzUa9Es");
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.api-ninjas.com/v1/weather?city=London", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
//Accessind elements with the DOM

const ourCard = document.querySelector('.card');
const searchBtn = document.querySelector('.search');
const Onclick = document.getElementsByTagName('button');
const weatherImg = document.querySelector("weather-icon");
const temperature = document.querySelector("temp");
const location = document.querySelector("city");
const waterVapor = document.querySelector("humidity");
const windSpeed = document.querySelector("wind")

