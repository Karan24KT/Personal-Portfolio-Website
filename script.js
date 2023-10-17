(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


var typed = new Typed(".auto-type" , {
    strigs : ["Java Coder" , "FrontEnd Developer" , "Back-End Enthusiastic"] ,
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

