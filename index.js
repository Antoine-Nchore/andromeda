//Lets get some data from our public api
fetch('https://api-ninjas.com/api/weather');
then(response => response.json())
.then(data => {
    console.log(data);
})
