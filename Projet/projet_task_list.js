//stockage des données en local pour persistence
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo'); // stocke le contenu des champs de l'écran dans 'todo'
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);  //pour parser une chaîne de caractères JSON et construit l'objet décrit par cette chaîne 
    }
    return todos;
}


function clearall(){

    localStorage.removeItem('todo');
    show();
    return;
}


function add() {
    var task = document.getElementById('task').value;  //  recupere la valeur que l'utilisateur a rentré dans input box
 
    var todos = get_todos();//  get the toto list
    todos.push(task); // ajouter tasj a todo
    localStorage.setItem('todo', JSON.stringify(todos)); // stocker localement la nouvelle task 
 
    show();  // update la liste todo
 
    return false;  // pour eviter toutes les fonctionnalites supplementaires de l'evenement click
}
 
function remove() {
    var id = this.getAttribute('id'); // this represente l'objet DOM courrant qui est le button remove que l'utilisateur vient de clicker, 
	// on obtient la valeur de son id grace grace a la methode getAttribute 
    var todos = get_todos();
    todos.splice(id, 1); // supprime l'element ayant l'indice id de la liste todo
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show(); 
 
    return false;
}
 
function show() {  // la fonction show va afficher la liste des champs qu'on a 

    var search = document.getElementById('search').value;  //  recupere la valeur que l'utilisateur a rentré dans input box search

    var todos = get_todos();
 
    if(!search){
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li class="list-group-item" style="min-height: 60px;">' + todos[i] + '<button style="float: right;" class="btn btn-danger remove" id="' + i  + '"><i class="fas fa-times"></i></button></li>'; // ok
    };
    html += '</ul>';
    }else{

        var html = '<ul class="list-group">';
        for(var i=0; i<todos.length; i++) {
            if(todos[i].search(search) !== -1){
            html += '<li class="list-group-item" style="min-height: 60px;">' + todos[i] + '<button style="float: right;" class="btn btn-danger remove" id="' + i  + '"><i class="fas fa-times"></i></button></li>'; // ok
            }
        };
        html += '</ul>';

    }
 
    document.getElementById('todos').innerHTML = html; //ok 
 
    var buttons = document.getElementsByClassName('remove'); // ok
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove); // ok 
    };
}
 
document.getElementById('add').addEventListener('click', add);  
document.getElementById('clearall').addEventListener('click', clearall);
document.getElementById('search').addEventListener('keyup', show); 
show();