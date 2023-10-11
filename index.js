//Lets get some data from our public api

const apiKey = "i8/oOmZWiKWws6kFjI8lsg==fRITSduo7vzUa9Es";
const apiUrl = "https://api-ninjas.com/api/weather";

async function weatherCheck () {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

}
weatherCheck();