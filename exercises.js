// 1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>JS DOM paragraph style</title>
// </head> 
// <body>
// <p id ='text'>JavaScript Exercises - w3resource</p> 
// <div>
// <button id="jsstyle"
// onclick="js_style()">Style</button>
// </div>
// </body>
// </html>

// function js_style() 
// {
//  text.style.fontSize = "10";
//  text.style.fontFamily = "Arial";
//  text.style.color = "green";
// }

// 2. Write a JavaScript function to get the values of First and Last name of the following form. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form - w3resource</title>
// </head><body>
// <form id="form1" onsubmit="getFormvalue()">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>

// function getFormvalue()
// {



// }

// tough, i did not get

// 3. Write a JavaScript program to set the background color of a paragraph.

// function backgroundColor()
// {
// found = document.getElementsByTagName("p");
// variable.style.backgroundColor = "rgb(300, 10, 10)";

// }

// 4. Here is a sample html file with a submit button. 
// Write a JavaScript function to get the value of the href, hreflang, rel, target, 
// and type attributes of the specified link. 

function attributes() 
{
    let a = document.getElementsById.href;
    alert('value of href attribute: '+a );
    
    let b = document.getElementsById.hreflang;
    alert('value of hreflang attribute: '+b );
    
    let c = document.getElementsById.rel;
    alert('value of rel attribute: '+c );
    
    let d = document.getElementsById.target;
    alert('value of target attribute: '+d);
    
    let e = document.getElementsById.type;
    alert('value of type attribute: '+e );
}