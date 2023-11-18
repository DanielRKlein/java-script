const apiKey = "bfa3b436f78bdb3d8d42b8c289725d2a";
const apiFlags = "https://flagsapi.com";
const unsplashApiKey = "n1t-y9CRtz7-rxgX2N8OmZPAAHJeU8BIcyjd7cWAVA4"

const cityInput = document.querySelector("#cityName");
const searchButton = document.querySelector("#search");
const outputDiv = document.querySelector("#outputArea")
const cityOutput = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const wheaterStatus = document.querySelector("#status")
let wheaterImg = document.querySelector("#wheaterIMG")
const moisture = document.querySelector("#moisture")
const wind = document.querySelector("#wind")
const flag = document.querySelector("#flags")
const wheaterDataContainer = document.querySelector("#dataContainer")

//functions

async function getData(city) {
    try {
        const wheaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

        const res = await fetch(wheaterURL);
        const data = await res.json();

        if(res.ok) {
            cityInput.style.backgroundColor = "rgba(255,255,255,1)";
            outputDiv.classList.remove("hide");
            wheaterDataContainer.classList.remove("hide");
            showData(data);
            console.log(data);
        }
        else{
            throw new Error(`failed to fetch data: ${res.statusText}`);
        }
    } catch (err) {
        console.log(err);
        throw err;
    }

    
}


async function showData(data) {
    cityOutput.innerHTML = data.name;

    const flagsURL = `https://flagsapi.com/${data.sys.country}/flat/32.png`;
    flag.src = flagsURL;

    temperature.innerHTML = `${parseInt(data.main.temp)}°C`;
    wheaterStatus.innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    wheaterImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    moisture.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${parseInt(data.wind.speed)}km/h`;

}


//events

searchButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const cityName = cityInput.value;
    try{
        await getData(cityName);
    }
    catch(err){
        cityInput.style.backgroundColor = "rgba(230, 120, 120, 0.8)";
        cityOutput.innerHTML = "Cidade invalida";
        wheaterDataContainer.classList.add("hide");
        flag.src = null;
    }
})

cityInput.addEventListener("keyup", async (e) => {
    if (e.code === "Enter") {
        const cityName = cityInput.value
        try{
            await getData(cityName)
        }
        catch(err){
            cityInput.style.backgroundColor = "rgba(230, 120, 120, 0.8)";
            cityOutput.innerHTML = "Cidade invalida";
            wheaterDataContainer.classList.add("hide");
            flag.src = null;

        }
    }
})