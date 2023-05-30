const API_KEY = "94d02dcafd927bed37878c4d207410cc"

function saveWeather(){
    localStorage.setItem("Weather", JSON.stringify(Weather));
}

function onGeoOk(position){
     const lat = position.coords.latitude;
     const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
};

function paintWeather(text){
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    const name = data.name;
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
}

function onGeoError(){
    alert("위치를 확인할 수 없습니다. 날씨를 표시할 수 없네요.")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)