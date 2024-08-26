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

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
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

    setTimeout(function () {
        window.location.href = url;
    }, 1000);
}

// Add event listener to the Resume button
document.querySelector('.btn-group .btn[href="resume.html"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action
    showLoader('resume.html');
});

document.addEventListener('DOMContentLoaded', () => {
    const group = document.querySelector('.group');
    for (let i = 1; i < 50; i++) {
        const containerId = `iconContainer${i}`;
        const container = document.createElement('div');
        container.className = 'iconContainer';
        container.id = containerId;
        group.appendChild(container);
        addIcons(containerId);
    }

    function addIcons(containerId) {
        const iconContainer = document.getElementById(containerId);
        const Unicode = [
            `\uf001`,
            `\uf002`,
            `\uf003`,
            `\uf004`,
            `\uf005`,
            `\uf006`,
            `\uf007`,
            `\uf008`,
            `\uf009`,
            `\uf010`,
            `\uf011`,
            `\uf012`,
            `\uf013`,
            `\uf014`,
            `\uf015`,
            `\uf016`,
            `\uf017`,
            `\uf018`,
            `\uf019`,
            `\uf020`,
        ];

        for (let i = 0; i < 100; i++) {
            const icon = document.createElement('i');
            icon.className = 'icon fas';
            icon.innerHTML = randomIcon(Unicode);
            iconContainer.appendChild(icon);
        }

        function randomIcon(values) {
            const randomIndex = Math.floor(Math.random() * values.length);
            return values[randomIndex];
        }
    }
});