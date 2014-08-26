/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.
3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.
 */

function emailValidate(str){
    var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[.][com|edu]{2,3}$/;
    return emailRegex.test(str);
}

function SpaceAlphaValidate( str ) {
    var alphaRegex = /^[a-zA-Z ]+$/;
    return alphaRegex.test(str);			
}

function idHTML(str) {
    console.log(str);
    var htmlRegex = /\<(.*?)\>/;
    return htmlRegex.test(str);
}

function submitForm() {
	
    //set variables
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');
    
    var fnameErr = document.getElementById("err_fname");
    var lnameErr = document.getElementById("err_lname");
    var emailErr = document.getElementById("err_email");
    var commentsErr = document.getElementById("err_comments");
    
    var data = document.getElementById("data");
    var content = document.getElementById("content");
    
    var hasError = false;
    var fullName = fname.value + " " + lname.value;

    console.clear();
    //input checking
    //fname
    if(fname.value.length){
        fname.classList.remove('bad');
        fname.classList.add('good');        
        fnameErr.innerHTML = ''; 
        console.log("fname length good");
        if(SpaceAlphaValidate(fname.value)){
           fname.classList.remove('bad');
           fname.classList.add('good');        
           fnameErr.innerHTML = ''; 
           console.log("fname chars good");
       } 
       else {
           hasError = true;
           fname.classList.remove('good');
           fname.classList.add('bad');       
           fnameErr.innerHTML = "<p>First name contains invalid characters.</p>"; 
           console.log("fname chars bad");
       }
    } 
    else {
        hasError = true;
        fname.classList.remove('good');
        fname.classList.add('bad');       
        fnameErr.innerHTML = "<p>Must enter a first name.</p>";
        console.log("fname length bad");
    }

    
    //lname
    if(lname.value.length){
        lname.classList.remove('bad');
        lname.classList.add('good');        
        lnameErr.innerHTML = ''; 
        console.log("lname length good");
        if(SpaceAlphaValidate(lname.value)){
            lname.classList.remove('bad');
            lname.classList.add('good');        
            lnameErr.innerHTML = '';
            console.log("lname chars good");
        } 
        else {
            hasError = true;
            lname.classList.remove('good');
            lname.classList.add('bad');       
            lnameErr.innerHTML = "<p>Last name contains invalid characters.</p>";
            console.log("lname chars bad");
        }
    } 
    else {
        hasError = true;
        lname.classList.remove('good');
        lname.classList.add('bad');       
        lnameErr.innerHTML = "<p>Must enter a last name.</p>"; 
        console.log("lname length bad");
    }

    
    //email
    if(email.value.length){
        email.classList.remove('bad');
        email.classList.add('good');        
        emailErr.innerHTML = ''; 
        console.log("email length good");
        if(emailValidate(email.value)){
            email.classList.remove('bad');
            email.classList.add('good');        
            emailErr.innerHTML = ''; 
            console.log("email chars good");
        } 
        else {
            hasError = true;
            email.classList.remove('good');
            email.classList.add('bad');       
            emailErr.innerHTML = "<p>Email is invalid.</p>";
            console.log("email chars bad");
        }
    } 
    else {
        hasError = true;
        email.classList.remove('good');
        email.classList.add('bad');       
        emailErr.innerHTML = "<p>Must enter an email.</p>";
        console.log("email length bad");
    }

    
    //comments
    if(comments.value.length && comments.value.length < 150){
        comments.classList.remove('bad');
        comments.classList.add('good');        
        commentsErr.innerHTML = '';
        console.log("comments length good");
        if(!idHTML(comments.value)){
            comments.classList.remove('bad');
            comments.classList.add('good');        
            commentsErr.innerHTML = '';
            console.log("comments chars good");
        }
        else {
            hasError = true;
            comments.classList.remove('good');
            comments.classList.add('bad');       
            commentsErr.innerHTML = "<p>Comments cannot contain html tags.</p>";
            console.log("comments chars bad");
        }
    }
    else {
        hasError = true;
        comments.classList.remove('good');
        comments.classList.add('bad');       
        commentsErr.innerHTML = "<p>Comments must be between one and 150 characters.</p>"; 
        console.log("comments length bad");
    }

    //display data
    if(!hasError){
        content.style.display="none";
        data.innerHTML = "<h3>Name</h3> <p>"+fullName+"</p><h3>Email</h3> <p>"+email.value+"</p><h3>Comments</h3> <p>"+comments.value+"</p>";
    }
}