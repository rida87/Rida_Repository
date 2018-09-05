
	console.log(78);
	var xhr = new XMLHttpRequest();
	//xhr.open("GET","customers.json",true);
	xhr.open("GET","https://api.scorelooker.com/books",true);

	console.log(78);
	xhr.responseType="json";
	xhr.onload = function() {
	console.log(78);	
	var response = xhr.response;
	console.log(typeof(response));		
	console.log(response.length);	
	
	
	 for ( var i=0; i<response.length;i++ ) {
	 	 
// Finds a <table> element with id="table":
var table = document.getElementById("table");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = response[i].titre;
cell2.innerHTML = response[i].auteur;
cell3.innerHTML = response[i].ISBN; 
cell4.innerText = "API"; 	 
	 }
	//localStorage.setItem('monlocoalstorage', JSON.stringify(response));
		 show();
	};
	xhr.send();
	

		

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todi'); // stocke le contenu des champs de l'écran dans 'todo'
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);  //pour parser une chaîne de caractères JSON et construit l'objet décrit par cette chaîne 
    }
    return todos;
}

function remove() {
    var id = this.getAttribute('id'); // this represente l'objet DOM courrant qui est le button remove que l'utilisateur vient de clicker, 
	// on obtient la valeur de son id grace grace a la methode getAttribute 
    var todos = get_todos();
    todos.splice(id, 1); // supprime l'element ayant l'indice id de la liste todo
    localStorage.setItem('todi', JSON.stringify(todos));
 
    location.reload();
    return false;
				}
 

function show() {
	
	var todos = get_todos();
	
	for ( var i=0; i<todos.length;i++ ) {
	 	 
// Find a <table> element with id="table":
var table = document.getElementById("table");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);


// Add some text to the new cells:
cell1.innerText = todos[i][0];
cell2.innerText = todos[i][1];
cell3.innerText = todos[i][2];	
cell4.innerHTML =  "<button id='"+i +"'> X </button>";

//event binding
document.getElementById(i).addEventListener('click', remove); 
	 }
	
	
}

function add() {
    var titre = document.getElementById('a').value;
    var auteur = document.getElementById('b').value; 
	var ibn = document.getElementById('c').value; 	//  recupere la valeur que l'utilisateur a rentré dans input box
	
	var todos = get_todos();
	
	var elem_ajout = [titre, auteur, ibn];
	todos.push(elem_ajout);
	localStorage.setItem('todi', JSON.stringify(todos));
	location.reload();

}

document.getElementById('add').addEventListener('click', add); 
		