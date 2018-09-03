var row = 1;

function insertRow() {
    var table = document.getElementById('myTable').insertRow(0);
    var cell1 = table.insertCell(0);
    var cell2 = table.insertCell(1);
    cell1.innerHTML = "Ajout ligne "+row+ "Cellule1";
    cell2.innerHTML = "Ajout ligne "+row+ "Cellule2";
}