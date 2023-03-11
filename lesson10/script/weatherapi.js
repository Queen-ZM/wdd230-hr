const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;
year.textContent = `${new Date().getFullYear()}`;

const currentTemp = document.querySelector('#current-temp');

const img = document.createElement('img');
const figure = document.querySelector('figure');
figure.appendChild(img);
const figcaption = document.createElement('figcaption');
figure.appendChild(figcaption);
const captionDesc = document.querySelector('figcaption');

const cityName = "Johannesburg";
const apiID = "7fae69e9db7f6cc9a7268bfc37203f6b";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiID}&units=metric`;

async function apiFetch(){
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;


    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);

    captionDesc.textContent = desc.toUpperCase();
    
}

apiFetch(); //Call apiFetch function for the first time.




