document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
                    console.log("pressed");
                })
            }
        })
    }

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
});

function showLoader(url) {
    document.querySelector('.loader').style.display = 'block';

    setTimeout(function() {
        window.location.href = url;
    }, 1000);
}

// Add event listener to the Resume button
document.querySelector('.btn-group .btn[href="resume.html"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action
    showLoader('resume.html');
});

document.addEventListener('DOMContentLoaded',() =>{
    const background = document.getElementById('background-container');

})