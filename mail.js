

let body=document.querySelector("body");
let btn1=document.querySelector("#change");
console.log(btn1);
      
       btn1.addEventListener("click",()=>

       {
         body.classList.toggle("mall")
        
       })
       setInterval(() => {
            name1.textContent="Free Lancer";
       }, 10000);
       setInterval(() => {
           name1.textContent="Web Desinnger";
       }, 20000);
       setInterval(() => {
           name1.textContent="Content Createar";
       }, 30000);
        

function sendMail() {
    var paras={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        messege:document.getElementById("Messege").value

    };
    console.log(paras);
        const serviceid="service_f61kjpb";//service_f61kjpb
    const templateid="template_xejkctk";//template_xejkctk
    

emailjs.send(serviceid,templateid,paras)
.then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("Messege").value="";
        console.log(res);
        alert("messege send SucessFully")
})
.catch((err => console.log(err) ))
}
console.log("called");
