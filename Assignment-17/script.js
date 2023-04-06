
//Que 1 B 
const theUrl = window.location.href;
let url=document.getElementById('url')
url.innerHTML=`<p>${theUrl}</p>`
console.log(theUrl)
let size=document.querySelector('#size')
size.innerHTML=`<p>Browser inner window width : ${window.innerWidth} px<br> 
Browser inner window height:  ${window.innerHeight} px </p>`
let locationexample=document.querySelector("#locationexample")

locationexample.innerHTML=` example of location object <br> URL of the web page " ${location.href}`


//Que 1 B 
let HistoryExample=document.querySelector('#HistoryExample')
HistoryExample.innerHTML=`
History Object Properties and Methods<br>
Property/Method	Description<br>
back()	Loads the previous URL (page) in the history list<br>
<br>
forward()	Loads the next URL (page) in the history list<br>
<br>
go()	Loads a specific URL (page) from the history list<br>
<br>
length()Returns the number of URLs (pages) in the history 
list<br>
<br>
Example of history object <br>
<br>
Length() method example<br>
<br>
Your previous visited page  ${history.length}`




// Que 2 A
let display=document.querySelector('#display')
let depth = screen.colorDepth;
display.innerHTML= `color depth of the screen is ${depth}  bits per pixel <br>
Browser inner window width : ${window.innerWidth} px<br> 
Browser inner window height:  ${window.innerHeight} px

`;

//Que 2 B 

let que2b=document.querySelector('#que2b');
que2b.innerHTML=`The JavaScript navigator object is used for browser detection, it can be used to get browser information such as appName, appCodeName, userAgent, etc. Navigator object is a window property so it can be accessed by the "window.navigator" or "navigator".

It can also check whether the browser is in online mode or not and whether Java is enabled or not in our system.

There are many properties of navigator objects that return information about the browser following are some of those −

appName − Returns the name

appVersion − Returns the version

appCodeName − Returns the code name

cookieEnabled − Returns true if the cookie is enabled otherwise false

userAgent − Returns the user agent

language − Returns the language. It is supported in Netscape and Firefox only.`








