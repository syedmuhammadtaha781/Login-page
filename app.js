// --- FORM GET ---
let L_Form = document.getElementById("Loginform");
let S_Form = document.getElementById("Signupform");
let U_page = document.getElementById("UserPage");
let w_name = document.getElementById("w-name");
let w_name_1 = document.getElementById("w-name-1");

// --- BUTTONS GET ---
let L_btn = document.getElementById("L-btn");
let S_btn = document.getElementById("S-btn");
let Logout_btn = document.getElementById("Logout-btn");

// --- FIELD VALUES ---
let name = document.getElementById("S-name");
let f_name = document.getElementById("S-f-name");
let u_class = document.getElementById("S-class");
let S_email = document.getElementById("S-email");
let S_pass = document.getElementById("S-pass");
let L_email = document.getElementById("L-email");
let L_pass = document.getElementById("L-pass");
let TD_inp = document.getElementById("TD-input");


let L_link = document.getElementById("L-link");
let S_link = document.getElementById("S-link");
let add = document.getElementById("add");


let addin = document.getElementById("addin");


L_link.addEventListener("click", () => {
    L_Form.style.display = "none";
    S_Form.style.display = "flex";
});
let pass_dis = true;
let eye = document.getElementById("eye");
// let eye_slash = document.getElementById("eye-slash");
eye.addEventListener("click",()=>{
    if (pass_dis) {
      eye.setAttribute("class","fa-solid fa-eye-slash");
      S_pass.setAttribute("type","password");
      pass_dis = false;
      
    }else if(!pass_dis){
      S_pass.setAttribute("type","text");
      eye.setAttribute("class","fa-solid fa-eye")
      eye.style.display = "block";
      pass_dis = true;
    }

})
S_link.addEventListener("click", () => {
  S_Form.style.display = "none";
  L_Form.style.display = "flex";
});

S_btn.addEventListener("click", () => {
  let t_S_name = name.value.trim();
  let t_S_f_name = f_name.value.trim();
  let t_S_class = u_class.value.trim();
  let t_S_email = S_email.value.trim();
  let t_S_pass = S_pass.value.trim();

  if (!t_S_name || !t_S_f_name || !t_S_class || !t_S_email || !t_S_pass) {
    alert("Please fill all fields");
    return;
  }

  let Olddata = localStorage.getItem("users") || "[]";
  let storageData = JSON.parse(Olddata);
  let found = storageData.find((elements) => elements.t_S_email == t_S_email);

  if (!t_S_email.includes("@gmail.com")) {
    alert("Please enter a valid Gmail address (e.g. example@gmail.com)");
    return;
  }
  if (found) {
    alert("Email Already Exist");
    return;
  } else {
    let info = { t_S_name, t_S_email, t_S_pass };
    storageData.push(info);
    localStorage.setItem("users", JSON.stringify(storageData));
    alert("Account created Successfully");

    name.value = "";
    f_name.value = "";
    u_class.value = "";
    S_email.value = "";
    S_pass.value = "";
    S_Form.style.display = "none";
    L_Form.style.display = "flex";
  }
});


L_btn.addEventListener("click", () => {
  let t_L_email = L_email.value.trim();
  let t_L_pass = L_pass.value.trim();

  if (!t_L_email || !t_L_pass) {
    alert("Please fill all fields");
    return;
  }
  let userget = JSON.parse(localStorage.getItem("users")) || [];
  let loginfound = userget.find((ele) => ele.t_S_email == t_L_email);

  if (loginfound && loginfound.t_S_pass == t_L_pass) {
    alert("Login Successfully");
    localStorage.setItem("isloggedin", true);
    localStorage.setItem("isloggedin_name", loginfound.t_S_name);

    localStorage.setItem("loggedInUserEmail", loginfound.t_S_email);

    L_email.value = "";
    L_pass.value = "";
    S_Form.style.display = "none";
    L_Form.style.display = "none";
    U_page.style.display = "flex";
    U_page.style.flexDirection = "column";
    U_page.style.alignItems = "center";
    w_name.textContent = loginfound.t_S_name + "!";
    w_name_1.style.fontSize = "48px";
    w_name_1.style.fontWeight = "800";

    loadTasks(); 
  } else {
    alert("Incorrect Information");
  }
});


Logout_btn.addEventListener("click", () => {
  L_Form.style.display = "flex";
  U_page.style.display = "none";
  localStorage.removeItem("isloggedin");
  localStorage.removeItem("isloggedin_name");
  localStorage.removeItem("loggedInUserEmail");
  addin.innerHTML = ""; 
});


window.addEventListener("load", () => {
  let alreadylogin = JSON.parse(localStorage.getItem("isloggedin"));
  let alreadylogin_name = localStorage.getItem("isloggedin_name");
  if (alreadylogin) {
    U_page.style.display = "flex";
    U_page.style.alignItems = "center";
    L_Form.style.display = "none";
    S_Form.style.display = "none";
    U_page.style.flexDirection = "column";
    U_page.style.alignItems = "center";
    w_name_1.style.fontSize = "48px";
    w_name_1.style.fontWeight = "800";
    w_name.textContent = alreadylogin_name + "!";

    loadTasks();
  } else {
    L_Form.style.display = "flex";
    U_page.style.display = "none";
  }
});


function loadTasks() {
  addin.innerHTML = ""; 

  let userEmail = localStorage.getItem("loggedInUserEmail");
  if (!userEmail) return;

  let userKey = "lists_" + userEmail;
  let oldList = localStorage.getItem(userKey);
  let list_array = oldList ? JSON.parse(oldList) : [];

  list_array.forEach((task) => {
    createTaskElement(task);
  });
}


function createTaskElement(taskText) {
  let inner = document.createElement("p");
  let inner_span1 = document.createElement("span");
  let inner_span2 = document.createElement("span");
  let del = document.createElement("button");
  let edit = document.createElement("button");

  addin.appendChild(inner);
  inner.appendChild(inner_span1);
  inner.appendChild(inner_span2);
  inner_span2.appendChild(del);
  inner_span2.appendChild(edit);

  inner.style.display = "flex";
  inner.style.justifyContent = "space-between";
  inner.style.alignItems = "center";
  inner.style.marginTop = "16px";
  inner.style.padding = "10px";

  inner_span2.style.display = "flex";
  inner_span2.style.justifyContent = "center";
  inner_span2.style.gap = "8px";

  del.textContent = "Delete";
  del.style.backgroundColor = "blue";
  del.style.color = "white";
  del.style.padding = "0.7em";
  del.style.border = "none";
  del.style.borderRadius = "0.7em";

  edit.textContent = "Edit";
  edit.style.backgroundColor = "blue";
  edit.style.color = "white";
  edit.style.padding = "0.7em";
  edit.style.border = "none";
  edit.style.borderRadius = "0.7em";

  inner_span1.textContent = taskText;

  del.addEventListener("click", () => {
    inner.remove();
    updateLocalStorageAfterDelete(taskText);
  });

  edit.addEventListener("click", () => {
    let editask = prompt("Edit your task", inner_span1.textContent);
    if (editask === null || editask.trim() === "") {
      inner.remove();
      updateLocalStorageAfterDelete(inner_span1.textContent);
    } else {
      let oldText = inner_span1.textContent;
      inner_span1.textContent = editask.trim();
      updateLocalStorageAfterEdit(oldText, editask.trim());
    }
  });
}


function updateLocalStorageAfterDelete(taskText) {
  let userEmail = localStorage.getItem("loggedInUserEmail");
  if (!userEmail) return;

  let userKey = "lists_" + userEmail;
  let oldList = localStorage.getItem(userKey);
  let list_array = oldList ? JSON.parse(oldList) : [];
  let index = list_array.indexOf(taskText);
  if (index > -1) {
    list_array.splice(index, 1);
    localStorage.setItem(userKey, JSON.stringify(list_array));
  }
}


function updateLocalStorageAfterEdit(oldText, newText) {
  let userEmail = localStorage.getItem("loggedInUserEmail");
  if (!userEmail) return;

  let userKey = "lists_" + userEmail;
  let oldList = localStorage.getItem(userKey);
  let list_array = oldList ? JSON.parse(oldList) : [];
  let index = list_array.indexOf(oldText);
  if (index > -1) {
    list_array[index] = newText;
    localStorage.setItem(userKey, JSON.stringify(list_array));
  }
}


add.addEventListener("click", (e) => {
  let t_TD_inp = TD_inp.value.trim();
  if (!t_TD_inp) {
    alert("Please enter some task");
    return;
  }
  createTaskElement(t_TD_inp);

  let userEmail = localStorage.getItem("loggedInUserEmail");
  if (!userEmail) return;

  let userKey = "lists_" + userEmail;
  let oldList = localStorage.getItem(userKey);
  let list_array = oldList ? JSON.parse(oldList) : [];
  list_array.push(t_TD_inp);
  localStorage.setItem(userKey, JSON.stringify(list_array));

  TD_inp.value = "";
});
