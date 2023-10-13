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
const searchButton = document.querySelector(".SearchHere");
      console.log(searchButton);
      searchButton.addEventListener('click',(e) => {
        const input = document.getElementById('inputfield');
        getWeather(input.value);
      });
      //Adding  another event
      const leaveComment = document.querySelector(".CommentHere");
      console.log(leaveComment);
      leaveComment.addEventListener('click',(e) => {
        const input = document.getElementById('inputcomment');
        alert(input.value);
      });
      
      //Adding
      const button = document.querySelector(".About_Us");
      function aboutWeather(info) {
        return function() {
          'We are focused to give you daily weather updates'
          alert("The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to ten days in future and hourly weather forecast.");
          console.log(info);
        };
      }
      const info = 'This is some real data about daily weather updates';
      button.addEventListener("click", aboutWeather(info));



      
      




  





