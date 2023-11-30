let tem = document.querySelector(".tem");
let cityName = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search i");


const apiKey = "11626f0903e71810475f6c224a203de6";
async function checkWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        if (response.status === 200) {
            const data = await response.json();
            cityName.textContent = data.name;
            tem.textContent = Math.round(data.main.temp )+ "°C";
            humidity.textContent = data.main.humidity + "%";
            wind.textContent = data.wind.speed + " km/h "
            console.log(data);
        } else {
            console.error("Request failed with status:", response.status);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

searchBtn.addEventListener("click", (e)=>{
    checkWeather(searchBox.value);
})







