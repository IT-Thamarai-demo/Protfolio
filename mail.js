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
function handlePreloader() {
    const loader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) loader.style.display = 'none';
            if (content) content.style.display = 'block';
        }, 2000); // Adjust the delay as needed
    });
}

handlePreloader();

// Device width and height
let width = window.innerWidth;
let height = window.innerHeight;

let widthElement = document.querySelector(".width");
let heightElement = document.querySelector(".height");

if (widthElement) widthElement.textContent = width;
if (heightElement) heightElement.textContent = height;

// Logging navigation tag


// Contact form submission using Formspree
document.querySelector("#c-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(e.target);
    fetch('https://formspree.io/f/xgeglblo', {
        method: 'POST',
        body: data
    })
    .then((res) => {
        if (res.ok) {
            alert("Success");
            console.log(res);
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

   let tag = document.querySelector("#myDialog");
    console.log(tag);

    function openpop() {
        if (tag) tag.showModal();
    }

    function closepop() {
        if (tag) tag.close();
    }

    function vibrate(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        } else {
            alert("Vibration not supported on this device.");
        }
    }

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
        DF.innerHTML = "Device name: " + deviceName;
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
if (weiElement) weiElement.innerHTML = "Device Width: " + width + "px";

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
