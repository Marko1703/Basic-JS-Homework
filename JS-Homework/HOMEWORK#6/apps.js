console.log("It's working!");

function createTable() {
    const rowNum = document.getElementById("rows").value;
    const colNum = document.getElementById("cols").value;

    const table = document.createElement("table");

    for(let r = 1; r <= rowNum; r++){
        const row = document.createElement("tr");
        for(let c = 1; c <= colNum; c++) {
            const cell = document.createElement("td");
            cell.innerHTML = "Row-" + r + " Column-" + c;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    document.getElementById("table").appendChild(table);
}