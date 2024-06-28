let links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        links.forEach(link => {
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    })
});

let buttons = document.querySelectorAll(".button button"); // All Buttons

let js = document.querySelector(".button .jbtn"); // JavaScirpt Button
let re = document.querySelector(".button .rbtn"); // React Button

let javascript = document.querySelector(".cards.javascript"); // JavaScript Card
let react = document.querySelector(".cards.react"); // React Card

buttons.forEach((b) => {
    b.addEventListener('click',() => {
        buttons.forEach((b) => {
            b.classList.remove("active");
        })
        b.classList.add("active");
    })
})

re.onclick = function() {
    javascript.style.display = 'none';
    react.style.display = 'grid';
}
js.onclick = function() {
    react.style.display = 'none';
    javascript.style.display = 'grid';
}
