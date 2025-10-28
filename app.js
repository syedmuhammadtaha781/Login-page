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
let userclass = document.getElementById("class");
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
link.addEventListener("click", () => {
    name.value = "";
    fathername.value = "";
    userclass.value = "";
    email.value = "";
    password.value = "";
    if (islogin) {
        head.textContent = "Create Your Account";
        s1.style.display = "flex";
        s2.style.display = "flex";
        s3.style.display = "flex";
        btn.textContent = "Signup";
        link.textContent = "I already have an account"
        islogin = false;
    } else {
        head.textContent = "Login Your Account";
        btn.textContent = "Login";
        link.textContent = "I don't have any account"
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "none";
        islogin = true;
    }
})
btn.addEventListener("click", () => {
    // trimmed values
    let trim_name = name.value.trim();
    let trim_fathername = fathername.value.trim();
    let trim_class = userclass.value.trim();
    let trim_email = email.value.trim();
    let trim_pass = password.value.trim();

    if (btn.textContent === "Signup") {
        if (trim_name == "" || trim_fathername == "" || trim_class == "" || trim_email == "" || trim_pass == "") {
            alert("Please fill the requires fields")
            return;
        }

        const users = localStorage.getItem("users") || [];
        console.log(users);

        let storageData = users.length > 0 ? JSON.parse(users) : [];
        const myData = { trim_name, trim_email, trim_pass };
        const found = storageData.find((element) => element.trim_email === trim_email);
        console.log(found, "found");
        if (found) {
            alert("Email Already Exist");
            return;
        }
        storageData.push(myData);
        const signUpData = localStorage.setItem("users", JSON.stringify(storageData));
        alert("SignUp Successfully");
        name.value = "";
        fathername.value = "";
        userclass.value = "";
        email.value = "";
        password.value = "";
    } else if (btn.textContent === "Login") {
        
        if (trim_email == "" || trim_pass == "") {
            alert("Please fill the requires fields")
            return;
        }
        let logindata = JSON.parse(localStorage.getItem("users"));
        let logindetails = logindata.find((element) => element.trim_email === trim_email);
        
        if (logindetails && logindetails.trim_pass) {
            alert("Login Successfully");
            let main = document.querySelector(".container");
            let welcome = document.querySelector(".welcome");
            let u_name = trim_name;
                    email.value = "";
                    password.value = "";
                    main.style.display = "none";
                    welcome.style.display = "block";
                    welcome.textContent = "Welcome " + logindetails.trim_name + "!";
                   welcome.style.fontSize = "48px";
                   welcome.style.fontWeight = "800";   
                   welcome.style.textAlign = "center";   
            
        }else{
            alert("Incorrect Information")
        }
    }
})


