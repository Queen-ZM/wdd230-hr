const year = document.querySelector('#year');


//Display on the screen the date of the last time there was a modification.
document.querySelector(
    "#lastModified"
        .textContent) = `Last Modification: ${document.lastModified}`;

//Display on the screen the current year.
year.textContent = `${new Date().getFullYear()}`;

const datefield = document.querySelector(".Currentdate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', function() {
    toggleMenu();
});
 

function toggleMenu() {
    const navElement = document.querySelector('#primaryNav');
    navElement.classList.toggle('open');
    document.querySelector('#menuButton').classList.toggle('open');
}

const p = document.createElement('p');

const event1 = document.querySelector('#event');
const image = document.createElement('img');
const myPicture = "planner.png";
event1.append(image);
event1.append(p);




const d = new Date();

if (d.getDay() >= 1 && d.getDay() <= 2){
image.setAttribute("src", "images/" + myPicture);
const weekMessage = "🤝Please join Us as we have our meet and great on Friday 19h00 pm";
p.innerHTML = weekMessage;
}else{
 const weekAnotherMessage = "New events coming soon."
 p.innerHTML = weekAnotherMessage;
}

document.getElementById("facebook").onclick = function () {
    window.location.href = "https://wwww.facebook.com";
};

document.getElementById("instagram").onclick = function () {
    window.location.href = "https://www.instagram.com";
};

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

