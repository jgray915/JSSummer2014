 // User Data Form
 /*   by Jacob Gray
    
    Validates form data and saves to local storage.
 
    TODO:
    -write comments
    -implement search by email
    */



// VARIABLES *******************************************************************

var fullName = document.getElementById('fullname');
var email = document.getElementById('email');
var phone = document.getElementById("phone");
var comments = document.getElementById('description');

var fullNameErr = document.getElementById("fullname_err");
var emailErr = document.getElementById("email_err");
var phoneErr = document.getElementById("phone_err");
var commentsErr = document.getElementById("description_err");

var data = document.getElementById("data");
var content = document.getElementById("content");
var tableData = document.getElementById("tableData");

var btnSave = document.getElementById("saveData");
var btnSearch = document.getElementById("searchButton");
var btnDelete = document.getElementById("deleteLastRowData");
var btnClear = document.getElementById("clearData");



// EVENTS **********************************************************************

btnSave.addEventListener("click", submitForm);
btnSearch.addEventListener("click", searchRecords);
btnDelete.addEventListener("click", deleteLast);
btnClear.addEventListener("click", clearRecords);

//show any saved data on page load
document.onload = loadData();



// VALIDATION ******************************************************************
//Functions return true if their inputs match their regex.

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
    var htmlRegex = /\<(.*?)\>/;
    return htmlRegex.test(str);
}

function phoneValidate(str)
{
    var phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
    return phoneRegex.test(str);
}



// FORM DATA *******************************************************************

function submitForm() 
{
    console.log("submitting");
    //If the inputs are good, save the data, clear the form, update the record
    if(checkInputs())
    {
        saveData();
        clearForm();
        loadData();
    }
}

function checkInputs()
{
    console.log("checking inputs");
    //Returns true/false if inputs valid/invalid.
    //Long function, four fields.
    var hasError = false;



    //fullName
    if(fullName.value.length)
    {
        console.log("   fullname true");
        fullName.classList.remove('bad');
        fullName.classList.add('good');        
        fullNameErr.innerHTML = ''; 
        if(SpaceAlphaValidate(fullName.value))
        {
           console.log("   fullname valid");
           fullName.classList.remove('bad');
           fullName.classList.add('good');        
           fullNameErr.innerHTML = ''; 
        } 
        else 
        {
            console.log("   fullname invalid");
            hasError = true;
            fullName.classList.remove('good');
            fullName.classList.add('bad');       
            fullNameErr.innerHTML = "First name contains invalid characters."; 
        }
    } 
    else 
    {
        console.log("   fullname false");
        hasError = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "Must enter a first name.";
    }



    //email
    if(email.value.length)
    {
        console.log("   email true");
        email.classList.remove('bad');
        email.classList.add('good');        
        emailErr.innerHTML = ''; 
        if(emailValidate(email.value))
        {
            console.log("   email valid");
            email.classList.remove('bad');
            email.classList.add('good');        
            emailErr.innerHTML = ''; 
        } 
        else 
        {
            console.log("   email invalid");
            hasError = true;
            email.classList.remove('good');
            email.classList.add('bad');       
            emailErr.innerHTML = "Email is invalid.";
        }
    } 
    else 
    {
        console.log("   email false");
        hasError = true;
        email.classList.remove('good');
        email.classList.add('bad');       
        emailErr.innerHTML = "Must enter an Email.";
    }



    //phone
    if(phone.value.length)
    {
        console.log("   phone true");
        phone.classList.remove('bad');
        phone.classList.add('good');        
        phoneErr.innerHTML = ''; 
        if(phoneValidate(phone.value))
        {
            console.log("   phone valid");
            phone.classList.remove('bad');
            phone.classList.add('good');        
            phoneErr.innerHTML = ''; 
        } 
        else 
        {
            console.log("   phone invalid");
            hasError = true;
            phone.classList.remove('good');
            phone.classList.add('bad');       
            phoneErr.innerHTML = "Phone number is invalid.";
        }
    } 
    else 
    {
        console.log("   phone false");
        hasError = true;
        phone.classList.remove('good');
        phone.classList.add('bad');       
        phoneErr.innerHTML = "Must enter a phone number.";
    }
    
    
    
    //comments
    if(comments.value.length && comments.value.length < 150)
    {
        console.log("   comments true");
        comments.classList.remove('bad');
        comments.classList.add('good');        
        commentsErr.innerHTML = '';
        if(!idHTML(comments.value))
        {
            console.log("   comments valid");
            comments.classList.remove('bad');
            comments.classList.add('good');        
            commentsErr.innerHTML = '';
        }
        else 
        {
            console.log("   comments invalid");
            hasError = true;
            comments.classList.remove('good');
            comments.classList.add('bad');       
            commentsErr.innerHTML = "Comments cannot contain html tags.";
        }
    }
    else 
    {
        console.log("   comments false");
        hasError = true;
        comments.classList.remove('good');
        comments.classList.add('bad');       
        commentsErr.innerHTML = "Comments must be between 1-150 characters."; 
    }
    
    
    return !hasError;
    
}

function clearForm()
{
    fullname.value = "";
    email.value = "";
    phone.value = "";
    comments.value = "";
}



// LOCAL STORAGE ***************************************************************

function saveData()
{
    console.log("saving data");
    /* Local storage holds a single string under the key "records." The string
       parses out to an array of JSON objects, one for each of the data sets.
    */
   
    //Set 'records' to the parsed array of records, else an empty array
    var records = JSON.parse(localStorage.getItem("records")) || [];
    var newRecord = 
    {   
        "fullname":"",
        "email":"",
        "phone":"",
        "comments":""
    };

    newRecord.fullname = fullname.value;
    newRecord.email = email.value;
    newRecord.phone = phone.value;
    newRecord.comments = comments.value;
    
    //Add newRecord object to end of array
    records.push(newRecord);
    
    //Stringify records and put into localStorage
    localStorage.setItem("records", JSON.stringify(records));
}

function deleteLast()
{
    console.log("deleting last record");
    var records = JSON.parse(localStorage.getItem("records")) || [];

    //Uses pop to remove last item from array
    records.pop();

    localStorage.setItem("records", JSON.stringify(records));
    
    loadData();
}

function clearRecords()
{
    console.log("clearing records");
    localStorage.clear();
    
    loadData();
}

function searchRecords()
{
    console.log("searching");
    var records = JSON.parse(localStorage.getItem("records")) || [];
    var term = document.getElementById("search").value;
    var results = document.getElementById("searchResults");
    var output = "<table><thead> <tr><th>Name</th><th>E-mail</th> <th>Phone</th><th>Description</th> </tr> </thead><tr>";
    var numResults = 0;
    
    //Look to match each email, counting each match and adding it to the output
    for(var i = 0; i < records.length; i++)
    {
        var record = records[i];
        
        if(term === record.email)
        {
            numResults++;
            output += "<td>"+record.fullname+"</td>";
            output += "<td>"+record.email+"</td>";
            output += "<td>"+record.phone+"</td>";
            output += "<td>"+record.comments+"</td>";
            output += "</tr>";
        }
    }
    
    output += "</table>";
    
    //Return counted results, not found message or enter email message
    if(numResults)
    {
        output = "<p>"+numResults+" matches found:</p>"+output;
        results.innerHTML = output;     
    }
    else if(term)
    {
        results.innerHTML = "E-mail '"+term+"' not found";
    }
    else
    {
        results.innerHTML = "Please enter an e-mail.";
    }
}

function loadData()
{
    console.log("loading data");
    /* If there are records, this function generates all the html table code for
       each one, with its index in a call to deleteIndex for the delete button.
    */
    var records = JSON.parse(localStorage.getItem("records")) || [];
    var table = "";
  
    if(records.length !== 0)
    {
        for(var i = 0; i < records.length; i++)
        {
            var record = records[i];
            table += "<tr>";
            table += '<td><input type="button" value="Delete" onclick="deleteIndex('+i+')"/></td>';
            table += "<td>"+record.fullname+"</td>";
            table += "<td>"+record.email+"</td>";
            table += "<td>"+record.phone+"</td>";
            table += "<td>"+record.comments+"</td>";
            table += "</tr>";
        }
        
        tableData.innerHTML = table;
    }
    else
    {
        tableData.innerHTML = "";
    }
}

function deleteIndex(index)
{
    console.log("deleting at index");
    /* loadData puts the call to this function for each record along with its 
       index in the html it generates for the table. This function uses splice
       to move to the index and remove that one record.
    */
    var records = JSON.parse(localStorage.getItem("records"));
    
    records.splice(index, 1);
    
    localStorage.setItem("records", JSON.stringify(records));
    
    loadData();
}