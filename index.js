document.addEventListener('DOMContentLoaded', () =>{
    getWeather();
})
function getWeather(city = 'NAirobi'){
    const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "i8/oOmZWiKWws6kFjI8lsg==fRITSduo7vzUa9Es");
myHeaders.append("", "");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.api-ninjas.com/v1/weather?city=$(city)`, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}