let signupbtn = document.getElementById("signup");
let loginbtn = document.getElementById("login");
signupbtn.addEventListener("click", ()=>{
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
    S_name.value = "";
    S_f_name.value = "";
    S_class.value = "";
    S_email.value = "";
    S_pass.value = "";
    localStorage.setItem("name",T_S_name);
    localStorage.setItem("fathername",T_S_f_name);
    localStorage.setItem("class",T_S_class);
    localStorage.setItem("email",T_S_email);
    localStorage.setItem("password",T_S_pass);
    alert("You have successfully created an account")
})


    

 