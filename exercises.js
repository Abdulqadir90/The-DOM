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

// function attributes() 
// {
//     let a = document.getElementsById.href;
//     alert('value of href attribute: '+a );
    
//     let b = document.getElementsById.hreflang;
//     alert('value of hreflang attribute: '+b );
    
//     let c = document.getElementsById.rel;
//     alert('value of rel attribute: '+c );
    
//     let d = document.getElementsById.target;
//     alert('value of target attribute: '+d);
    
//     let e = document.getElementsById.type;
//     alert('value of type attribute: '+e );
// }

// 5. Write a JavaScript function to add rows to a table. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Insert row in a table - w3resource</title>
// </head><body>
// <table id="sampleTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// </table><br>
// <input type="button" onclick="insert_Row()" value="Insert row"> 
// </body></html>

// function insert_row()
// {
// let table = document.getElementsById("sampleTable");
// let row = table.insert_row(0);
// let one = row.insertCell(0)
// let two = row.insert_row(1)

// one.innerHTML = "new cell1";
// two.innerHTML = "newcell2";

// }

// 6. Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Change the content of a cell</title>
// </head><body>
// <table id="myTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// <tr><td>Row3 cell1</td>
// <td>Row3 cell2</td></tr>
// </table><form>
// <input type="button" onclick="changeContent()" value="Change content">
// </form></body></html>

// not done yet

// 7. Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell. Go to the editor
// Sample HTML file :

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>Change the content of a cell</title>
// <style type="text/css">
// body {margin: 30px;}
// </style>  
// </head><body>
// <table id="myTable" border="1">
// </table><form>
// <input type="button" onclick="createTable()" value="Create the table">
// </form></body></html>

