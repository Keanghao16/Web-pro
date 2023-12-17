function toggle1() {
  toggleForms('block', 'none');
}

function toggle2() {
  toggleForms('none', 'block');
}

function toggleForms(loginDisplay, signupDisplay) {
  var blur = document.getElementById('blur');
  var popup = document.getElementById('popup');

  blur.classList.toggle('active');
  popup.classList.toggle('active');

  loginForm.style.display = loginDisplay;
  signupForm.style.display = signupDisplay;

  document.body.classList.toggle('popup-active');
}




const pwShowHide = document.querySelectorAll(".eye-icon"),
loginLink = document.getElementById("loginLink"),
signupLink = document.getElementById("signupLink"),
loginForm = document.getElementById("loginForm"),
signupForm = document.getElementById("signupForm");


pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwField = eyeIcon.parentElement.querySelector(".password");

    if (pwField.type === "password") {
      pwField.type = "text";
      eyeIcon.classList.replace("bx-hide", "bx-show");
    } else {
      pwField.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    }
  });
});

loginLink.addEventListener("click", () => {
  // Show login form and hide signup form
  loginForm.style.display = "block";
  signupForm.style.display = "none";
});

signupLink.addEventListener("click", () => {
  // Show signup form and hide login form
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

// Default Gulp Task
exports.Default = series(scssTask, jsTask, browserSyncServer, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);
