// form get 
let L_Form = document.getElementById("Loginform");
let S_Form = document.getElementById("Signupform");
let U_page = document.getElementById("UserPage");
let w_name = document.getElementById("w-name");
let w_name_1 = document.getElementById("w-name-1");

// buttons get 
let L_btn = document.getElementById("L-btn");
let S_btn = document.getElementById("S-btn");
let Logout_btn = document.getElementById("Logout-btn");

// field values
let name = document.getElementById("S-name");
let f_name = document.getElementById("S-f-name");
let u_class = document.getElementById("S-class");
let S_email = document.getElementById("S-email");
let S_pass = document.getElementById("S-pass");
let L_email = document.getElementById("L-email");
let L_pass = document.getElementById("L-pass");

// link get 
let L_link = document.getElementById("L-link");
let S_link = document.getElementById("S-link");

L_link.addEventListener("click",()=>{  
    L_Form.style.display = "none";
    S_Form.style.display = "flex";
})
S_link.addEventListener("click",()=>{
    S_Form.style.display = "none";
    L_Form.style.display = "flex";
})
S_btn.addEventListener("click",()=>{
    let t_S_name = name.value.trim();
    let t_S_f_name = f_name.value.trim();
    let t_S_class = u_class.value.trim();
    let t_S_email = S_email.value.trim();
    let t_S_pass = S_pass.value.trim();
    
    if (!t_S_name || !t_S_f_name || !t_S_class || !t_S_email ||!t_S_pass){
        alert("Please fill all fields");
        return;
    } 
    let Olddata = localStorage.getItem("users") || [];
    let storageData = Olddata.length > 0 ? JSON.parse(Olddata) : [];
    let info = {t_S_name,t_S_email,t_S_pass};
    let found = storageData.find((elements)=> elements.t_S_email == t_S_email);
    let valid_gmail = t_S_email + "@gmail.com";
    let email = S_email.value.trim();

    if (!t_S_email.includes("@gmail.com")) {
        alert("Please enter a valid Gmail address (e.g. example@gmail.com)");
        return;
    }

    if (found) {
        alert("Email Already Exist");
        return;
    }else{
    storageData.push(info);
    let info_set = localStorage.setItem("users",JSON.stringify(storageData));
    alert("Account created Successfully");
    name.value = "";
    f_name.value = "";
    u_class.value = "";
    S_email.value = "";
    S_pass.value = "";
    S_Form.style.display = "none";
    L_Form.style.display = "flex";

    }  
    
    
    
    
})
L_btn.addEventListener("click",()=>{
    let t_L_email = L_email.value.trim();
    let t_L_pass = L_pass.value.trim();
    
    if (!t_L_email || !t_L_pass) {
        alert("Please fill all fields");
        return;
    }
    let t_S_name = name.value.trim();
    let t_S_email = S_email.value.trim();
    let t_S_pass = S_pass.value.trim();
    let userget = JSON.parse(localStorage.getItem("users"));
    let loginfound = userget.find((ele)=> ele.t_S_email == t_L_email);
    
    if (loginfound && loginfound.t_S_pass == t_L_pass) {
        alert("Login Successfully");
        JSON.stringify(localStorage.setItem("isloggedin",true));
        JSON.stringify(localStorage.setItem("isloggedin_name",loginfound.t_S_name));
        L_email.value = "";
        L_pass.value = "";
        S_Form.style.display = "none";
        L_Form.style.display = "none";
        U_page.style.display = "flex";
        U_page.style.flexDirection = "column";
        U_page.style.alignItems = "center";
        w_name.textContent =  loginfound.t_S_name + "!";
        w_name_1.style.fontSize = "48px";
        w_name_1.style.fontWeight = "800";


    }else{
        alert("Incorrect Information")
    }
})
Logout_btn.addEventListener("click",()=>{
    L_Form.style.display = "flex";
    U_page.style.display = "none";
    localStorage.removeItem("isloggedin");
    localStorage.removeItem("isloggedin_name");
    
})

window.addEventListener("load",()=>{
    let alreadylogin = JSON.parse(localStorage.getItem("isloggedin"));
    let alreadylogin_name = localStorage.getItem("isloggedin_name");
   if (alreadylogin) {
       U_page.style.display = "flex";
       U_page.style.alignItems = "center";
       L_Form.style.display = "none";
       S_Form.style.display = "none";
       U_page.style.flexDirection = "column";
    U_page.style.alignItems = "center";
    let A_user_page = JSON.parse(localStorage.getItem("users"));
    let A_u_name = A_user_page.find((ele)=> ele.t_S_name);
    console.log(A_u_name);
    
    w_name_1.style.fontSize = "48px";
    w_name_1.style.fontWeight = "800";
    w_name.textContent =  alreadylogin_name + "!";

    return;
}
})