

Notification.requestPermission().then((res)=>
    {
        if(res=="granted")
        {
          const notification= new Notification("Welcome To My Protfolio 💓",{
            icon:"IMG-20230719-WA0007.jpg",
            body:"Haiii 🤍😊💓"
          })
          
        }
    })
    
    //your device width and height
    let h = window.innerHeight;
    let w = window.innerWidth;
    
    // naviagation loggc
    
    let tag = document.querySelector("#dan");
    console.log(tag);
    // contact form
    document.querySelector("#c-form").addEventListener("submit", function(e) {
    
        e.preventDefault();
        let data = new FormData(e.target)
        fetch('https://formspree.io/f/xgeglblo', {
                method: 'POST',
                body: data
            })
            .then((res) => {
                if (res.ok) {
                    alert("success")
                    console.log(res);
                } else {
                    alert("failure")
                }
    
            })
    });
    let body = document.querySelector("body");
    let btn1 = document.querySelector("#change");
    let icon = document.querySelector(".scroll")
    let text = document.querySelector("#c");
    //toggle background colot
    
    function demo() {
      let red = Math.floor(Math.random() * 100);
      let green = Math.floor(Math.random() * 100);
      let blue = Math.floor(Math.random() * 100);
      let random = `rgb(${red},${green},${blue})`;
      console.log(random);
     let body= document.querySelector("body")
     body.style.backgroundColor=random;
    }
    
    
    
    
    //loading alert
    let by = () => {
        alert("Welcome To My Page ❤️  ")
    }
    
   // Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll');
    if (window.scrollY > 300) { // Adjust the value as needed
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            icon.classList.add("active")
    
        } else {
            icon.classList.remove("active")
        }
    
    })
    //get current date
    const date=new Date();
    document.querySelector("#dt").textContent = `Today is  ${date.toLocaleDateString()}`
    
    //openning and closing dialog
    
    function OpenDialog() {
        tag.showModal();
    }
    
    function CLoseDialog(params) {
        tag.close();
    }
    
    //display current time
    
    
    let CT = document.querySelector("#ct")
    
    
    setInterval(() => {
        const currentTime = new Date();
    
        const formattedTime = " Current Time is : " + currentTime.toLocaleTimeString();
    
        CT.innerHTML = formattedTime;
    
    }, 1000);
    
    
    //dispaly device information
    
    let DF = document.querySelector("#di");
    if (navigator.userAgentData) {
        const deviceName = navigator.userAgentData.brands[0].brand;
        DF.innerHTML = " Device name :" + deviceName;
    } else {
        // Fallback to navigator.userAgent for older browsers
        const userAgent = navigator.userAgent;
        const match = userAgent.match(/\((.*?)\)/);
        if (match && match.length > 1) {
            const deviceInfo = match[1];
            DF.innerHTML = " Your Device Name Is :" + deviceInfo;
        } else {
            DF.innerHTML = " Unable To Find Device :" + deviceInfo;
        }
    }
    
    
    
    
    //display battety information
    let dis = document.querySelector("#bl");
    
    // Check if Battery Status API is supported
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            // Update the battery percentage initially
            updateBatteryStatus(battery);
    
            // Update the battery percentage whenever it changes
            battery.addEventListener('levelchange', function() {
                updateBatteryStatus(battery);
            });
    
            function updateBatteryStatus(battery) {
                // Get the battery percentage
                const batteryPercentage = battery.level * 100;
    
                // Display the battery percentage
                dis.innerHTML = `    Battery Percentage : ${batteryPercentage.toFixed(2)} `;
            }
        });
    } else {
        dis.innerHTML = " Api is not supported by your battery"
    }
    //    good morning
    
    let goodmorning = document.querySelector("#time")
    
    
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
    
    document.querySelector("#hei").textContent = "Device Height  :" + h + "Px"
    document.querySelector("#wei").innerHTML = "Device Width  :" + w + "Px"
    //typing animation
    
    var typed = new Typed('#element', {
        strings: ['Content Creator 💓 ...' , 'Free Lancer  ...❤️','Web Desinnger  ... 💕'],
        typeSpeed: 70,
        loop:true
      });
     function vibrare(ms)
      {
         navigator.vibrate(ms)
      }
      window.addEventListener('load', function () {
        const loader = document.querySelector('.preloader');
        const content = document.querySelector('.content');
      
        setTimeout(function () {
          loader.style.display = 'none';
          content.style.display = 'block'; // Show content after preloader is removed
        }, 2000); // Adjust the time as needed
      });
      let map = L.map('map');
    
            // Initialize the map with user's location
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var userLat = position.coords.latitude;
                    var userLng = position.coords.longitude;
    
                    map.setView([userLat, userLng],15);
    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
    
                    var marker = L.marker([userLat, userLng]).addTo(map);
                    marker.bindPopup("<b>Your Location ❤️</b>").openPopup();
                });
         
            } else {
                alert('Geolocation is not supported by your browser');
            }
    document.addEventListener("visibilitychange",function demo() {
            const noti=new Notification("Come back  ❤️",{
                body:"please come my site 🙏😂",
                icon:"IMG-20230719-WA0007.jpg"
            })
        })
        const aosAnimations = [
            'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 
            'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left', 
            'flip-left', 'flip-right', 'flip-up', 'flip-down', 
            'zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-right', 
            'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-left', 'zoom-out-right'
        ];
        
        function assignRandomAOS() {
            const elements = document.querySelectorAll('[data-aos]');
            elements.forEach(element => {
                const randomAnimation = aosAnimations[Math.floor(Math.random() * aosAnimations.length)];
                element.setAttribute('data-aos', randomAnimation);
            });
        }
        
        window.onload = function() {
            assignRandomAOS();
            AOS.init(); // Initialize AOS animations
        };

function downloadCV() {
    window.location.href = 'Thamarai_Kannan_Front_End_Developer_5_27.pdf';
}





