
document.addEventListener("DOMContentLoaded", () => {

    // enableDarkMode()

    const navHTML = `
    <nav class="navbar">
        <a href="/" class="logo">ChristianGeorgiou.com</a>
        <button class="menu-toggle" aria-label="Toggle navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <div class="nav-links">
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#education">Education</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact" class="nav-btn">Contact Me</a>
        </div>
    </nav>
    `;

    const header = document.getElementById("navbar");
    
    if (header) {
        header.innerHTML = navHTML;
        initMobileMenu();
    }


    document.getElementById("my-age").textContent = calculateAge()


    // Form submission feedback mechanism
    const contactForm = document.getElementById('google-form');
    let submissionCheck = false;

    contactForm.addEventListener('submit', () => {
        submissionCheck = true;
    });

    window.formSubmitted = function() {
        if(submissionCheck) {
            //alert('Thank you! Your inquiry has been sent successfully.');
            contactForm.reset();
            

            const successMsg = document.getElementById("form-success-msg");
            if (successMsg) {
                successMsg.style.display = "block";

                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 5000);
            }


            submissionCheck = false;
        }
    };

});


function initMobileMenu() {
    
    const toggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");

    if (!toggle || !links) { return };

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        links.classList.toggle("active");
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            links.classList.remove("active");
        });
    });

}


function calculateAge() {
    const birthday = new Date(2010, 0, 17, 3, 59);
    const today = Date.now();

    const timeSince = new Date(today - birthday);

    return Math.abs(timeSince.getUTCFullYear() - 1970)
}



document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector("summary");

    let innerElement = summary.nextElementSibling;
    if (!innerElement) { return; }

    let isAnimating = false;

    summary.addEventListener("click", (e) => {
        e.preventDefault(); // Stop default instant browser jump
        if (isAnimating) return;

        if (!details.open) {
            // Opening
            details.open = true;
            const height = innerElement.offsetHeight;
            isAnimating = true;

            innerElement.animate([
                { height: '0px', opacity: 0 },
                { height: `${height}px`, opacity: 1 }
            ], { duration: 400, easing: 'ease-out' }).onfinish = () => isAnimating = false;

        } else {
            // Closing
            const height = innerElement.offsetHeight;
            isAnimating = true;

            innerElement.animate([
                { height: `${height}px`, opacity: 1 },
                { height: '0px', opacity: 0 }
            ], { duration: 400, easing: 'ease-in' }).onfinish = () => {
                details.open = false;
                isAnimating = false;
            };
        }
    });
});





// document.getElementById("google-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     const urlEncodedData = new URLSearchParams(formData).toString();

//     fetch(this.ariaDescription, {
//         method: "POST",
//         body: urlEncodedData,
//         mode: "no-cors",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//     })
//     .then(() => {
//         alert("Thank you!");
//         this.reset();
//     })
//     .catch((error) => {
//         console.error("Error submitting form:", error)
//     })
// })




// function enableDarkMode() {

//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//         document.documentElement.classList.add("dark-mode")
//     } else {
//         document.documentElement.classList.remove("dark-mode")
//     }

// }


