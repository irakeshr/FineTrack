let password_strength = document.querySelector("#password_strength");
let passwordInput = document.querySelector("#password");

passwordInput.addEventListener("input", () => {
  let val = passwordInput.value;
  let strength = 0;

  //strength checks
  if (val.length > 5) strength += 20;
  if (val.match(/[A-Z]/)) strength += 20;
  if (val.match(/[0-9]/)) strength += 20;
  if (val.match(/[^a-zA-Z0-9]/)) strength += 20;
  if (val.length > 10) strength += 20;

  // Update strength bar
  password_strength.style.width = strength + "%";

  if (strength < 40) {
    password_strength.style.background = "red";
    password_strength_text.innerHTML = "  Password Strength:Weak";
  } else if (strength < 80) {
    password_strength.style.background = "orange";
    password_strength_text.innerHTML = "  Password Strength:Medium";
  } else {
    password_strength.style.background = "green";
    password_strength_text.innerHTML = "  Password Strength:Very Strong";
  }
});

// btn handle

let create_account_btn = document.querySelector("#create_account_btn");

create_account_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    Name: document.querySelector("#fullname").value,
    Email: document.querySelector("#email").value,
    Password: document.querySelector("#password").value,
    confirm_pass: document.querySelector("#confirm-password").value,
  };
  if (Object.values(data).some((val) => val == "")) {
    alert("PLEASE FILL THE FORM PROPERLY..!");
    return;
  }
  if (data.Password != data.confirm_pass) {
    alert("The passwords do not match.")
      delete data.confirm_pass;
    return;
  }
  
if(localStorage.getItem(data.Email)){
  alert("The email is already registered")
  return;
}

  localStorage.setItem(data.Email, JSON.stringify(data));
  window.location.href = "login.html";
});
