/* 
 *We need to collect some data from the user. 
 *Please collect the following data. User input from email field 
 *and name field.  User Screen size, Browser information, page title. 
 * Collect the first 100 mouse coordinates the user makes on the page.
 * 
 * 
1.  Create a Json that will collect all this data. It’s as simple as a key:value pair.
2. Collect the user input value when they blur on the field
    a. Email
    b. User name
3. The user screen size, user agent and page title can be collected when 
the window loads.
    a. window.innerHeight
    b. window. innerWidth
    c. window. navigator. userAgent
    d. document.title
4. Collect the user mouse cords by putting them into an array when the 
user moves there mouse on the document. One for the mouseX, and one for 
the mouseY.  Once the Array has a length of 100 you can stop pushing the 
mouse cords into the array.
    a. e.clientX
    b. e.clientY
    c. jsonVariable.ArrayVariable.push(e.clientX) (Do not name your variables this sample)

 */


var userdata = {};
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var results = document.getElementById('showResults');
userdata.mouseX = [];
userdata.mouseY = [];

function blurName(){
    userdata.fullname = fullname.value;
}
function blurEmail(){
    userdata.email = email.value;
}
function showResults() {
    console.clear();
    console.log(userdata);
}
function mouseLog(e) {
    if(userdata.mouseX.length < 100){
        userdata.mouseX.push(e.clientX);
    }
    if(userdata.mouseY.length < 100){
        userdata.mouseY.push(e.clientY);
    } 
}

userdata.height = window.innerHeight;
userdata.width = innerWidth;
userdata.agent = window.navigator.userAgent;
userdata.title = document.title;

fullname.addEventListener("blur", blurName);
email.addEventListener("blur", blurEmail);
document.addEventListener("mousemove", mouseLog);
results.addEventListener("click", showResults);