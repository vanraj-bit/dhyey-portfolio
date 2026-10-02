// ================= CURRENT YEAR =================

document.getElementById("year").textContent = new Date().getFullYear();


// ================= COPY EMAIL =================

function copyEmail() {

    const email = "dhyeyandharia.24.cse@iite.indusuni.ac.in";

    navigator.clipboard.writeText(email).then(function () {

        const message = document.getElementById("copyMessage");

        message.textContent = "Email address copied!";

        setTimeout(function () {
            message.textContent = "";
        }, 2000);

    });

}


// ================= MOBILE NAVBAR =================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbar = document.getElementById("mainNavbar");

        if (navbar.classList.contains("show")) {

            const collapse =
                bootstrap.Collapse.getInstance(navbar) ||
                new bootstrap.Collapse(navbar);

            collapse.hide();
        }

    });

});
