// Request notification permission and show a notification if granted
function requestNotificationPermission() {
    Notification.requestPermission().then((res) => {
        if (res === "granted") {
            new Notification("Welcome To My Portfolio 💓", {
                icon: "IMG-20230719-WA0007.jpg",
                body: "Haiii 🤍😊💓"
            });
        }
    });
}

// Show or hide the button based on scroll position
function toggleScrollButton() {
    const scrollButton = document.querySelector('.scroll');
    if (window.scrollY > 300) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
}

// Toggle background color
function changeBackgroundColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = randomColor;
}

// Show loading alert
function showLoadingAlert() {
    alert("Welcome To My Page ❤️");
}

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open and close dialog
function openDialog() {
    const dialog = document.getElementById('dan');
    dialog.showModal();
}

function closeDialog() {
    const dialog = document.getElementById('dan');
    dialog.close();
}

// Update current time every second
function displayCurrentTime() {
    const CT = document.querySelector("#ct");
    setInterval(() => {
        const currentTime = new Date();
        CT.innerHTML = "Current Time is : " + currentTime.toLocaleTimeString();
    }, 1000);
}

// Display device information
function displayDeviceInfo() {
    const DF = document.querySelector("#di");
    const userAgent = navigator.userAgent;
    const match = userAgent.match(/\((.*?)\)/);
    if (match && match.length > 1) {
        DF.innerHTML = "Your Device Name Is : " + match[1];
    } else {
        DF.innerHTML = "Unable To Find Device Information";
    }
}

// Display battery information
function displayBatteryInfo() {
    const dis = document.querySelector("#bl");
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            updateBatteryStatus(battery);
            battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
        });
    } else {
        dis.innerHTML = "Battery API is not supported by your browser";
    }

    function updateBatteryStatus(battery) {
        const batteryPercentage = battery.level * 100;
        dis.innerHTML = `Battery Percentage : ${batteryPercentage.toFixed(2)}%`;
    }
}

// Display greeting based on time of day
function displayGreeting() {
    const goodmorning = document.querySelector("#time");
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

// Display device dimensions
function displayDeviceDimensions() {
    const h = window.innerHeight;
    const w = window.innerWidth;
    document.querySelector("#hei").textContent = "Device Height : " + h + "px";
    document.querySelector("#wei").textContent = "Device Width : " + w + "px";
}

// Initialize and configure the map with user's location
function initializeMap() {
    const map = L.map('map');
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            map.setView([userLat, userLng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker([userLat, userLng]).addTo(map)
                .bindPopup("<b>Your Location ❤️</b>")
                .openPopup();
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

// Display a notification when the page visibility changes
function handleVisibilityChange() {
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            new Notification("Come back ❤️", {
                body: "Please come back to my site 🙏😂",
                icon: "IMG-20230719-WA0007.jpg"
            });
        }
    });
}

// Initialize AOS animations with random effects
function initializeAOS() {
    const aosAnimations = [
        'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 
        'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left', 
        'flip-left', 'flip-right', 'flip-up', 'flip-down', 
        'zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right', 
        'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-left', 'zoom-out-right'
    ];
    
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
        const randomAnimation = aosAnimations[Math.floor(Math.random() * aosAnimations.length)];
        element.setAttribute('data-aos', randomAnimation);
    });
    AOS.init();
}

// Show or hide the preloader
function handlePreloader() {
    const loader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 2000);
}

// Handle form submission with Formspree
function handleFormSubmission() {
    document.querySelector("#c-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch('https://formspree.io/f/xgeglblo', {
            method: 'POST',
            body: data
        }).then((res) => {
            if (res.ok) {
                alert("Success");
            } else {
                alert("Failure");
            }
        });
    });
}

// Initialize Typed.js for typing animation
function initializeTypingAnimation() {
    new Typed('#element', {
        strings: ['Content Creator 💓 ...', 'Freelancer ...❤️', 'Web Designer ...💕'],
        typeSpeed: 70,
        loop: true
    });
}

// Function to download CV
function downloadCV() {
    window.location.href = 'Thamarai_Kannan_Front_End_Developer_5_27.pdf';
}

// Call functions on page load
window.onload = function () {
    requestNotificationPermission();
    displayCurrentTime();
    displayDeviceInfo();
    displayBatteryInfo();
    displayGreeting();
    displayDeviceDimensions();
    initializeMap();
    handleVisibilityChange();
    initializeAOS();
    handlePreloader();
    handleFormSubmission();
    initializeTypingAnimation();
};

// Scroll event listener
window.addEventListener('scroll', () => {
    toggleScrollButton();
});
