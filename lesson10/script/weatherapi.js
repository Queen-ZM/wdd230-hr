let currentYear = new Date().getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.querySelector(".last-modified").innerHTML = lastModified;


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Johannesburg,sa&unit=metric&appid=7fae69e9db7f6cc9a7268bfc37203f6b"

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // this is for testing the call
      // displayResults(data);
    }
    else {
        throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;


    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = capitalizeStr(desc);
}

function capitalize(word) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
}

function capitalizeStr(string) {
    let capitalized;
    if (string.includes(" ")) {
        let split = string.split(" ");
        split = split.map((word) => capitalize(word));
        capitalized = split.join(" ");
    }
    else {
        capitalized = capitalize(string);
    }
    return capitalized;
}

apiFetch();