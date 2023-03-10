const copyright = document.querySelector("#copyright")

copyright.textContent = `© ${new Date().getFullYear()}`;

let lastModified = document.lastModified;
document.querySelector(".last-modified").innerHTML = lastModified;