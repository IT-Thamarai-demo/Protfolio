
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

btn1.addEventListener("click", () => {
    body.classList.toggle("mall")

})

//loading alert
let by = () => {
    alert("Welcome To My Page ❤️  ")
}

function along() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
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
