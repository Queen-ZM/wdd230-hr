const year = document.querySelector("#year");
let lastModified = document.querySelector("#lastModified");

//Display on the screen the date of the last time there was a modification.
lastModified.textContent = document.lastModified;

//Display on the screen the current year.
year.textContent = `${new Date().getFullYear()}`;

const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');
lastModified.textContent = document.lastModified;
year.textContent = `${new Date().getFullYear()}`;