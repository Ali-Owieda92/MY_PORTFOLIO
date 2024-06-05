let links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        links.forEach(link => {
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    })
});