// Build a Table


  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  function tableHead(obj) {                            
   let thead = document.createElement('thead');      //created head cells
   let row = document.createElement('tr');            // created row 
   let arr = Object.keys(obj[0]);                    //returning the keys in a Array, ignoring the values
   for (let i = 0; i < arr.length; i++) {             //looping over the keys
    let th = document.createElement('th');             //creating 3 header cells
    th.innerText = arr[i];                             
    row.appendChild(th);
   }
   thead.appendChild(row)                        // appending row in the parent
   return thead;
  }

  function tableBody(obj) {
    let table = document.createElement("table");
    let tbody = document.createElement('tbody');
      
    for (let i = 0; i<obj.length; i++) {          //looping over array (mountain)
      //console.log('obj[i]', obj[i]);
      let row = document.createElement('tr');      // creates a row
      for (let j in obj[i]) {                      // looping over object [i], the 1st object which will be kilomanjaro, 2nd loop will be 5895, 3rd loop will be tanzania
        //console.log('j', j) 
        //console.log('obj[i]', obj[i])
        let td = document.createElement('td');   // appending to the row
        td.innerText = obj[i][j];
        row.appendChild(td);
      }
      tbody.appendChild(row);        // pushing row into the body
    }
    table.appendChild(tableHead(MOUNTAINS));
    table.appendChild(tbody);
    document.querySelector('.tableDisplay').appendChild(table);
  }
tableBody(MOUNTAINS);
