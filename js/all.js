let links = document.querySelectorAll(".projects .card");

let mainLink = document.querySelector(".projects .show a");
let mainImg = document.querySelector(".projects .show a img");
let mainHeading = document.querySelector(".projects .show a .text h2");
let paragraph = document.querySelector(".projects .show a .text p");


links.forEach((link)=> {
    link.onclick = (e) => {
        mainLink.href = link.href;
        mainImg.src = link.firstElementChild.src;
        mainHeading.innerHTML = link.lastElementChild.firstElementChild.innerHTML;
        paragraph.innerHTML = link.lastElementChild.lastElementChild.innerHTML;
    }
})