/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */

/*
 * FUNCTIONS
 */
function choice(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

/*
 * VARIABLES
 */
var adArray = [];

adArray.push({
    "title":"title1",
    "description":"description1"});
adArray.push({
    "title":"title2",
    "description":"description2"});
adArray.push({
    "title":"title3",
    "description":"description3"});
adArray.push({
    "title":"title4",
    "description":"description4"});
adArray.push({
    "title":"title5",
    "description":"description5"});

var ad = choice(adArray);
var div = document.getElementById("ad");

/*
 * SET TITLE AND DESCRIPTION
 */
div.innerHTML = ad.description;
document.title = ad.title;