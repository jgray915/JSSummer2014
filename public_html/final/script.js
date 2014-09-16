// When a user returns to the page all the data stored locally must appear on 
// the page and continue where you left off.  For ease of use please 
// show inline error messages for incomplete fields and clear all the data 
// once a data set has been saved.

// 1. Validate all fields using regex.  (20 points)
//      a. Full name: only spaces and letters allowed
//      b. Email: only letters@letters.[3 charaters]
//      c. Phone: xxx-xxx-xxxx
//      d. Description: No HTML allowed

// 2. Show inline error messages if a field in not properly inputted.  (10 points)

// 3. Once all fields have been properly inputted, clear all the fields to allow
//      the user to enter the next data set. (10 points)

// 4. The save feature should save the data to localStorage (20 points)
//      a. Use the localStorage.setItem([key], [value]) and 
//          localStorage.getItem([key]) functions to help you do this.
//      b. Use JSON. stringify([variable]) when saving the data and 
//          JSON.parse([variable]) then getting the data.

// 5. When the data is saved display it in the table below the field. (10 points)

// 6. The clear feature should clear the local storage.  (10 points)
//      a. localStorage.clear();

// 7. Deleting the last row should remove the last item in data set. (10 points)
//      a. You might want to store the data in an array of JSON objects like we did in week 3.

// 8. Please add comments in your code. (10 points)

// 9. Extra Credit
//      a. Add a search feature to be able to find a record by email. Display 
//      the result inline next to the search. (20 points)
//      b. Instead of just being able to delete the last item, I would like to 
//      specify which row to delete.  Add a delete button to the row and allow 
//      the user to delete any row they would like. (30 points)


    //set variables
    var fullName = document.getElementById('fullname');
    var email = document.getElementById('email');
    var comments = document.getElementById('description');
   
    var fullNameErr = document.getElementById("fullname_err");
    var emailErr = document.getElementById("email_err");
    var commentsErr = document.getElementById("description_err");
    
    var data = document.getElementById("data");
    var content = document.getElementById("content");
    
    var hasError = false;

/****************\
 REUSED FUNCTIONS
\****************/

function emailValidate(str)
{
    var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[.][com|edu]{2,3}$/;
    return emailRegex.test(str);
}

function SpaceAlphaValidate(str)
{
    var alphaRegex = /^[a-zA-Z ]+$/;
    return alphaRegex.test(str);			
}

function idHTML(str) 
{
    console.log(str);
    var htmlRegex = /\<(.*?)\>/;
    return htmlRegex.test(str);
}

/*************\
 NEW FUNCTIONS
\*************/
function phoneValidate(str)
{
    var phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
    return phoneRegex.test(str);
}

/*************\
 SUBMIT BUTTON
\*************/

function submitForm() 
{
	
    //just a list of functions
    console.clear();
    checkInputs();
}

function checkInputs()
{
    //input checking

    //fullName
    if(fullName.value.length){
        fullName.classList.remove('bad');
        fullName.classList.add('good');        
        fullNameErr.innerHTML = ''; 
        console.log("fullName length good");
        if(SpaceAlphaValidate(fullName.value)){
           fullName.classList.remove('bad');
           fullName.classList.add('good');        
           fullNameErr.innerHTML = ''; 
           console.log("fullName chars good");
       } 
       else {
           hasError = true;
           fullName.classList.remove('good');
           fullName.classList.add('bad');       
           fullNameErr.innerHTML = "<p>First name contains invalid characters.</p>"; 
           console.log("fullName chars bad");
       }
    } 
    else {
        hasError = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>Must enter a first name.</p>";
        console.log("fullName length bad");
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

    //phone
    //TODO
    
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
}

function saveData()
{

}

function clearData()
{

}

function clearLast()
{

}

function deleteRecord()
{

}

function searchRecords()
{

}
