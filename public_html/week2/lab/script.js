/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    var email = document.getElementById("email");
    var comments = document.getElementById("comments");
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var emailErr = document.getElementById("err_email");
    var commentsErr = document.getElementById("err_comments");

    
    var hasErrors = false;
    
    if(fullname.value.length){
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = ''; 
            
    } 
    else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";      
    }
    
    if(email.value.length){
        email.classList.remove('bad');
        email.classList.add('good');        
        emailErr.innerHTML = '';
    }
    else {
        hasErrors = true;
        email.classList.remove('good');
        email.classList.add('bad');       
        emailErr.innerHTML = "<p>Email is not valid.</p>";       
    }
    
    if(comments.value.length && comments.value.length < 150){
        comments.classList.remove('bad');
        comments.classList.add('good');        
        commentsErr.innerHTML = '';
    }
    else {
        hasErrors = true;
        comments.classList.remove('good');
        comments.classList.add('bad');       
        commentsErr.innerHTML = "<p>Comments must be more than 0 but less than 150 characters.</p>";       
    }
}