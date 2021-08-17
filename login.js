const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    // get email
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    // get password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;

    if(userEmail == 'himelkhan290@gmail.com' && userPassword == 'himel121'){
        window.location.href = "bank.html";
    }
})