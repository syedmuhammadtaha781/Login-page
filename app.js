// btn get 
let btn = document.getElementById("btn");
let link = document.getElementById("link");

//heading
let head = document.getElementById("heading");

// span 
let s1 = document.getElementById("span1");
let s2 = document.getElementById("span2");
let s3 = document.getElementById("span3");
let s4 = document.getElementById("span4");
let s5 = document.getElementById("span5");

    //field values 
let name = document.getElementById("name");
let fathername = document.getElementById("Fathername");
let  userclass = document.getElementById("class");
let email = document.getElementById("email");
let password = document.getElementById("password");

// trimmed values
let trim_name = name.value.trim();
let trim_fathername = fathername.value.trim();
let trim_class = userclass.value.trim();
let trim_email = email.value.trim();
let trim_pass = password.value.trim();

// flag variable
let islogin = true;
link.addEventListener("click", ()=>{
    name.value = "";
    fathername.value= "";
    userclass.value = "";
    email.value = "";
    password.value = "";


        if(islogin) {
            head.textContent = "Create Your Account";
            s1.style.display = "flex";
            s2.style.display = "flex";
            s3.style.display = "flex";
            btn.textContent =  "Signup";
            link.textContent = "I already have an account"
            islogin = false;
        }else{
            head.textContent = "Login Your Account";
            btn.textContent =  "Login";
            link.textContent = "I don't have any account"
            s1.style.display = "none";
            s2.style.display = "none";
            s3.style.display = "none";
            islogin = true;
        }
    })
    btn.addEventListener("click",()=>{
        //field values 
        let name = document.getElementById("name");
        let fathername = document.getElementById("Fathername");
        let  userclass = document.getElementById("class");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        
        // trimmed values
        let trim_name = name.value.trim();
        let trim_fathername = fathername.value.trim();
        let trim_class = userclass.value.trim();
        let trim_email = email.value.trim();
        let trim_pass = password.value.trim();

if (btn.textContent == "Signup") {
    if (trim_name == "" || trim_fathername == "" || trim_class == "" || trim_email == "" || trim_pass == "") {
        alert("Please fill the required fields");
        return;
    }
    localStorage.setItem("Name",trim_name);
    localStorage.setItem("Father Name",trim_fathername);
    localStorage.setItem("Class",trim_class);
    localStorage.setItem("Email",trim_email);
    localStorage.setItem("Password",trim_pass);
    name.value = "";
    fathername.value = "";
    userclass.value = "";
    email.value = "";
    password.value = "";
    alert("Account created Successfully");
    
} else if(btn.textContent == "Login"){
    let main = document.querySelector(".container")
    let welcome = document.querySelector(".welcome")
 
         let n = localStorage.getItem("Name");
         let a = localStorage.getItem("Email");
         let b = localStorage.getItem("Password");
         let c = a == trim_email && b == trim_pass;
         if (!c) {
             alert("Incorrect Information");
         }else{
             alert("Login Successfully");
             email.value = "";
             password.value = "";
             main.style.display = "none";
             welcome.style.display = "block";
             welcome.textContent = "Welcome " + n;
            welcome.style.fontSize = "48px";
            welcome.style.fontWeight = "800";

         }
         
    
    }
})