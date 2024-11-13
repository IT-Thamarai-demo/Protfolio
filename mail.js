// Notification permission and display
Notification.requestPermission().then((res) => {
    if (res === "granted") {
        const notification = new Notification("Welcome To My Portfolio 💓", {
            icon: "IMG-20230719-WA0007.jpg",
            body: "Haiii 🤍😊💓"
        });
    }
});

// Handle preloader


handlePreloader();

// Device width and height
let width = window.innerWidth;
let height = window.innerHeight;

let widthElement = document.querySelector(".width");
let heightElement = document.querySelector(".height");

if (widthElement) widthElement.textContent = "Device Width" + width + "px";
if (heightElement) heightElement.textContent = "Device Height" +  height + "px";

// Contact form submission using Formspree
document.querySelector("#c-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(e.target);
    fetch('https://formspree.io/f/xgeglblo', {
        method: 'POST',
         mode: 'no-cors',
        body: data
    })
    .then((res) => {
        if (res.ok) {
            alert("Success");
            console.log(res);
             setTimeout(launchConfetti, 600);
        } else {
            alert("Failure");
        }
    });
});

// Toggle background color
function demo() {
    let red = Math.floor(Math.random() * 100);
    let green = Math.floor(Math.random() * 100);
    let blue = Math.floor(Math.random() * 100);
    let random = `rgb(${red},${green},${blue})`;
    console.log(random);
    document.querySelector("body").style.backgroundColor = random;
}

// Scroll to top functionality
let icon = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        icon.classList.add("active");
    } else {
        icon.classList.remove("active");
    }
});

// Display current date
const date = new Date();
let dateElement = document.querySelector(".date");
if (dateElement) dateElement.textContent = `Today is ${date.toLocaleDateString()}`;

// Display current time
let CT = document.querySelector(".time");

if (CT) {
    setInterval(() => {
        const currentTime = new Date();
        const formattedTime = "Current Time is: " + currentTime.toLocaleTimeString();
        CT.innerHTML = formattedTime;
    }, 1000);
}

// Display device information
let DF = document.querySelector(".browser");

if (DF) {
    if (navigator.userAgentData) {
        const deviceName = navigator.userAgentData.brands[0].brand;
        DF.innerHTML = "Device Name: " + deviceName;
    } else {
        const userAgent = navigator.userAgent;
        const match = userAgent.match(/\((.*?)\)/);
        if (match && match.length > 1) {
            const deviceInfo = match[1];
            DF.innerHTML = "Your Device Name Is: " + deviceInfo;
        } else {
            DF.innerHTML = "Unable to Find Device Info";
        }
    }
}

// Display battery information
let dis = document.querySelector(".battery");

if (dis) {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            updateBatteryStatus(battery);

            battery.addEventListener('levelchange', function () {
                updateBatteryStatus(battery);
            });

            function updateBatteryStatus(battery) {
                const batteryPercentage = battery.level * 100;
                dis.innerHTML = `Battery Percentage: ${batteryPercentage.toFixed(2)}%`;
            }
        });
    } else {
        dis.innerHTML = "Battery API is not supported by your browser.";
    }
}

// Greeting based on time of day
let goodmorning = document.querySelector(".current");

if (goodmorning) {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        goodmorning.textContent = "Good morning 🌄!";
    } else if (hour >= 12 && hour < 17) {
        goodmorning.textContent = "Good afternoon 😋!";
    } else if (hour >= 17 && hour < 22) {
        goodmorning.textContent = "Good evening 🌆!";
    } else {
        goodmorning.textContent = "Good night 🌙!";
    }
}

// Display corrected device width and height
let heiElement = document.querySelector("#hei");
if (heiElement) heiElement.textContent = "Device Height: " + height + "px";

let weiElement = document.querySelector("#wei");
if (weiElement) weiElement.textContent = "Device Width: " + width + "px";

// Typing animation using Typed.js
var typed = new Typed('#element', {
    strings: ['Content Creator 💓...', 'Freelancer ❤️...', 'Web Designer 💕...'],
    typeSpeed: 70,
    loop: true
});

// Vibration function
function vibrate(ms) {
    navigator.vibrate(ms);
}

// Leaflet map with user location
let map = L.map('map');

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;

        map.setView([userLat, userLng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var marker = L.marker([userLat, userLng]).addTo(map);
        marker.bindPopup("<b>Your Location ❤️</b>").openPopup();
    });
} else {
    alert('Geolocation is not supported by your browser.');
}

// Dialog box handling
let tag = document.querySelector("#myDialog");

function openpop() {
    if (tag) tag.showModal();
}

function closepop() {
    if (tag) tag.close();
}

// Visibility change handling
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log("Tab is hidden");
        // You can add code here to pause certain actions, etc.
    } else {
        console.log("Tab is visible");
        // You can add code here to resume actions, etc.
        Notification.requestPermission().then((res) => {
            if (res === "granted") {
                const notification = new Notification("Welcome back to the page!", {
                    icon: "IMG-20230719-WA0007.jpg",
                    body: "Glad to have you back 💓!"
                });
            }
        });
    }
});
function along() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function launchConfetti() {
            const duration = 2 * 1000; // 5 seconds duration
            const animationEnd = Date.now() + duration;
            const defaults = { 
                startVelocity: 30, 
                spread: 360, 
                ticks: 60, 
                zIndex: 9999, // Bring confetti to the top
                scalar: 2  // Increase the size of the particles
            };

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    clearInterval(interval);
                }

                // Create a burst of confetti from random positions around the screen
                confetti(Object.assign({}, defaults, {
                    particleCount: 100, // Increase particle count for a more intense effect
                    spread: 360,        // Full circle spread
                    origin: {
                        x: Math.random(),  // Random horizontal position
                        y: Math.random()   // Random vertical position
                    }
                }));
            }, 250); // Launch confetti every 250 milliseconds
        }

<script>
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,      // Number of particles
        density: {
          enable: true,   // Density of particles
          value_area: 800 // Area within which particles appear
        }
      },
      shape: {
        type: 'circle',  // Shape of the particles (circle, edge, etc.)
        stroke: {
          width: 0,       // Particle border width
          color: '#000'   // Border color
        }
      },
      opacity: {
        value: 0.5,      // Opacity of particles
        random: true,    // Whether opacity should be random
        anim: {
          enable: true,   // Enable animation of opacity
          speed: 1,       // Animation speed
          opacity_min: 0.1 // Minimum opacity during animation
        }
      },
      size: {
        value: 3,        // Size of particles
        random: true,    // Random particle size
        anim: {
          enable: true,   // Enable size animation
          speed: 40,      // Animation speed
          size_min: 0.1   // Minimum size during animation
        }
      },
      links: {
        enable: true,    // Enable links between particles
        distance: 150,   // Maximum distance for links
        color: '#ffffff' // Link color
      },
      move: {
        enable: true,    // Enable movement of particles
        speed: 2,        // Movement speed
        direction: 'none',
        random: true,    // Random movement direction
        straight: false, // Allow particles to move in a straight line
        out_mode: 'out'  // Particles move out of bounds when they go beyond the container
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,  // Enable hover interaction
          mode: 'repulse' // Repulse particles when hovering over them
        },
        onclick: {
          enable: true,  // Enable click interaction
          mode: 'push'   // Add particles on click
        }
      }
    }
  });
</script>


