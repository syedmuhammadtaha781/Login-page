let loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", ()=>{
    let S_name = document.getElementById("signup-name");
    let T_S_name = S_name.value.trim();
    let S_f_name = document.getElementById("signup-f-name");
    let T_S_f_name = S_f_name.value.trim();
    let S_class = document.getElementById("signup-class");
    let T_S_class = S_class.value.trim();
    let S_email = document.getElementById("signup-email");
    let T_S_email = S_email.value.trim();
    let S_pass = document.getElementById("signup-pass");
    let T_S_pass = S_pass.value.trim();
    if (T_S_name === "" || T_S_f_name === "" || T_S_class === "" || T_S_email === "" || T_S_pass === "" ) {
        alert("Please Fill Required Fields");
        return
    }
   
    
    let a = localStorage.getItem("name");
    let b = localStorage.getItem("fathername");
    let c = localStorage.getItem("class");
    let d = localStorage.getItem("email");
    let e = localStorage.getItem("password");

    let match = T_S_name === a  && T_S_f_name === b && T_S_class === c && T_S_email === d && T_S_pass === e;
    if (!match) {
        alert("Incorrect information")
    }
    if (match) {
        alert("Login Sucessfully " + T_S_name);
    }

    S_name.value = "";
    S_f_name.value = "";
    S_class.value = "";
    S_email.value = "";
    S_pass.value = "";
})