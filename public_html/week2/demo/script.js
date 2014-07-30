var email = document.getElementById('email');
var err_email = document.getElementById('err_email');
var hasErrors = false;

function submit() {

    if ( !email.value.length ) {
        console.log('email is empty');
        hasErrors = true;
        err_email.innerHTML = "<p>Invalid email.</p>";
        email.classList.add("bad");
        email.classList.remove("good");
    } else {
        console.log('email is not empty');
        hasErrors = false;
        err_email.innerHTML = "";
        email.classList.remove("bad");
        email.classList.add("good");
    }
}
