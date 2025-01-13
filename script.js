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

document.addEventListener('DOMContentLoaded', () => {
    var icon = document.getElementById("moonicon");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "images/sun.svg";
        } else{
            icon.src = "images/moon.svg"
        }
    }
});

const text = "HI I AM SAEMI"
const textContainer = document.getElementById('text');
const letters = text.split('');
const degreePerChar = 360 / letters.length;

letters.forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.className = 'letter';
    span.style.color = i < text.length/2 ? '#ff8833' : '#ffffff';
    
    const radian = (degreePerChar * i) * Math.PI / 180;
    const x = Math.sin(radian) * 150;
    const z = Math.cos(radian) * 150;
    span.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${degreePerChar * i}deg)`;
    
    textContainer.appendChild(span);
  });

  const circle = document.querySelector('.circle');
  let isMouseOver = false;
  let rotationX = -20;
  let rotationY = 0;
  let rotationZ = -20;
  let lastX = 0;
  let lastY = 0;

  circle.addEventListener('mouseenter', () => {
    isMouseOver = true;
    circle.style.animation = 'none';
  });

  circle.addEventListener('mouseleave', () => {
    isMouseOver = false;
    circle.style.animation = 'rotate 15s linear infinite';
    rotationX = -20;
    rotationY = 0;
    rotationZ = -20;
  });

  circle.addEventListener('mousemove', (e) => {
    if (!isMouseOver) return;

    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;

    rotationY += deltaX * 0.5;
    rotationX += deltaY * 0.5;

    circle.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;

    lastX = e.clientX;
    lastY = e.clientY;
  });

  circle.addEventListener('mousedown', (e) => {
    lastX = e.clientX;
    lastY = e.clientY;
  });