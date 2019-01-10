/**
 * Check if there is a vistorname cookie.
 * If yes, display welcome message.
 * If No, prompt the vistor for a name, and set the vistorname cookie.
 */
function checkCookie() {
    //deleteCookie('vistorname');
    var vistor=getCookie("vistorname");
    if (vistor != "") {
        var welcome_msg = window.document.getElementById('welcome-msg');
        welcome_msg.innerHTML="Welcome "+vistor;
    } else {
       vistor = prompt("What is your name?","");
       if (vistor != "" && vistor != null) {
           setCookie("vistorname", vistor, 30);
       }
    }
}
 
/**
 * Set a cooke and reload the page when the create cookie button is clicked
 */
function setACookie(){
    var cname = window.document.getElementById('cname').value; //Get the cookie name from the cname input element
    var cvalue = window.document.getElementById('cvalue').value;//Get the cookie value from the cvalue input element
    var exdays = window.document.getElementById('exdays').value;//Get the expiration days from the exdays input element
     
    setCookie(cname, cvalue, exdays);//Call the setCookie to create the cookie
    window.location.reload();//Reload the page
}
 
/**
 * Delete a cookie and reload the page when the delete cookie button is clicked
 */
function deleteACookie(){
    var cname = window.document.getElementById('cname').value;//Get the cookie name from the cname input element
    deleteCookie(cname);//Call the deleteCookie to delete the cookie
    window.location.reload();//Reload the page
}
 
/**
 * Display all the cookies
 */
function disPlayAllCookies()
{
    var cookieDiv = window.document.getElementById('cookies');//Get the cookies div element
    var cArr = window.document.cookie.split(';'); //Create cookie array by split the cookie by ';'
     
    //Loop through all the cookies and display them with cookie name = cookie value
    for(var i=0; i<cArr.length; i++)
    {
        var pElm = window.document.createElement("p");//Create a p element to hold the cookie name and cookie value
        pElm.innerHTML=cArr[i].trim();//Put the cookie name and cookie value in the p elment
        cookieDiv.appendChild(pElm);//Append the p to the cookies div element
    }
}