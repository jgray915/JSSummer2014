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

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm() {
	
        //set variables
        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');
        var data = document.getElementById("data");
        var content = document.getElementById("content");
        var hasError = false;
        var fullName = fname.value + " " + lname.value;
        
        console.clear();

        if ( !lname.value.length ) {
                console.log("lname needs a length");
                hasError = true;
        } else if ( SpaceAlphaValidate( lname.value ) === false ) {
                console.log("lname needs Alpha chars");
                hasError = true;
        } else {
                console.log("lname is good");
        }
        
        if ( !fname.value.length ) {
                console.log("fname needs a length");
                hasError = true;
        } else if ( SpaceAlphaValidate( fname.value ) === false ) {
                console.log("fname needs Alpha chars");
                hasError = true;
        } else {
                console.log("fname is good");
        }
        
        if ( !email.value.length ) {
                console.log("email needs a length");
                hasError = true;
        } else if ( emailValidate( email.value ) === false ) {
                console.log("email invalid");
                hasError = true;
        } else {
                console.log("email valid");
        }
        
        if ( !comments.value.length ) {
                console.log("comments needs a length");
                hasError = true;
        } else {
                console.log("comments is good");
        }
        
        if(!hasError){
            var comments = comments.value;
            var stripped = strip_HTML(comments);
            
            if(stripped !== comments){
                comments = "(HTML has been removed):</br>"+stripped;
            }
            
            content.style.display="none";
            data.innerHTML = "<h3>Name</h3> <p>"+fullName+"</p><h3>Email</h3> <p>"+email.value+"</p><h3>Comments</h3> <p>"+comments+"</p>";
        }

}