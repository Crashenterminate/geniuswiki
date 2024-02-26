// Objeto para almacenar páginas
var pages = {};

// Página actual
var currentPage = "index";

// Función para cargar una página
function loadPage(pageName) {
    currentPage = pageName;
    document.getElementById("content").innerHTML = pages[pageName] || "Esta página aún no ha sido creada.";
}

// Función para crear una nueva página
function createNewPage() {
    var newPageName = prompt("Introduce el nombre de la nueva página:");
    if (newPageName) {
        pages[newPageName] = "";
        loadPage(newPageName);
        document.getElementById("editArea").style.display = "block";
        document.getElementById("editor").value = "";
    }
}

// Función para guardar la página actual
function savePage() {
    var content = document.getElementById("editor").value;
    pages[currentPage] = content;
    document.getElementById("content").innerHTML = content;
    document.getElementById("editArea").style.display = "none";
}

// Cargar la página inicial al cargar la página
loadPage("index");
