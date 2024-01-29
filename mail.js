

let body = document.querySelector("body");
let btn1 = document.querySelector("#change");
let icon = document.querySelector(".scroll")
let text=document.querySelector("#c");
console.log(btn1);

btn1.addEventListener("click", () => {
    body.classList.toggle("mall")

})
setInterval(() => {
    text.textContent = "Free Lancer";
}, 10000);
setInterval(() => {
    text.textContent = "Web Desinnger";
}, 20000);
setInterval(() => {
   text.textContent = "Content Createar";
}, 30000);


function sendMail() {
    var paras = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        messege: document.getElementById("Messege").value

    };
    console.log(paras);
    const serviceid = "service_f61kjpb";//service_f61kjpb
    const templateid = "template_xejkctk";//template_xejkctk


    emailjs.send(serviceid, templateid, paras)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("Messege").value = "";
            alert("messege send SucessFully")
            console.log(res);

        })
        .catch((err => console.log(err)))
}
console.log("called");
let by = () => {
    alert("Welcome To My Page   ")
}


    // window.addEventListener("scroll", () => {
    //     if (window.scrollY > 100) {
    //         icon.classList.add("active")

    //     }
    //     else {
    //         icon.classList.remove("active")
    //     }

    // })
function along() {
     window.scrollTo(0,0)
}

