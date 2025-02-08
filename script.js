function createTable() {
    //Write your code here
	let table = document.querySelector("#myTable")
	let rowNumber = parseInt(prompt("Input number of rows"));
	let colNumber = parseInt(prompt("Input number of columns"));

	for(let i = 0; i<rowNumber; i++){
		let row = document.createElement("tr");
		for(let j = 0;j<colNumber;j++){
			let col = document.createElement("td");
			col.innerText = `Row-${i} Column-${j}`;
			row.append(col);
		}
		table.append(row);
		
	}

	
  
}
