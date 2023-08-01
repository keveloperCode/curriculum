var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
	if (menu_visible == false) {
		//si esta oculto
		menu.style.display = "block";
		menu_visible = true;
	} else {
		menu.style.display = "none";
		menu_visible = false;
	}
}

//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
	links[x].onclick = function () {
		menu.style.display = "none";
		menu_visible = false;
	};
}

//Creo la sbarritas de una barra particular identificada por su id
function crearBarra(id_barra) {
	for (i = 0; i <= 16; i++) {
		let div = document.createElement("div");
		div.className = "e";
		id_barra.appendChild(div);
	}
}

//seleccione todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let java = document.getElementById("java");
crearBarra(java);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let sql = document.getElementById("sql");
crearBarra(sql);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let linux = document.getElementById("linux");
crearBarra(linux);

//Ahora se guardar la cantidad de barras que se van a ir pintando por cada barra
//para eso utilizxamos un arreglo , cada posicion pertenece a un elemento
//comienza en -1 porque no tiene ninguna barra pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuta la nimacion
let entro = false;

//funcion que aplica las animacion de las habilidades
function efectoHabilidades() {
	var habilidades = document.getElementById("habilidades");
	var distancia_skills =
		window.innerHeight - habilidades.getBoundingClientRect().top;
	if (distancia_skills >= 300 && entro == false) {
		entro = true;
		const intervalHtml = setInterval(function () {
			pintarBarra(html, 10, 0, intervalHtml);
		}, 100);
		const intervalJavascript = setInterval(function () {
			pintarBarra(javascript, 10, 1, intervalJavascript);
		}, 100);
		const intervalReact = setInterval(function () {
			pintarBarra(react, 9, 2, intervalReact);
		}, 100);
		const intervalJava = setInterval(function () {
			pintarBarra(java, 11, 3, intervalJava);
		}, 100);
		const intervalPhotoshop = setInterval(function () {
			pintarBarra(photoshop, 10, 4, intervalPhotoshop);
		}, 100);
		const intervalSql = setInterval(function () {
			pintarBarra(sql, 9, 5, intervalSql);
		}, 100);
		const intervalNodeJs = setInterval(function () {
			pintarBarra(nodejs, 9, 6, intervalNodeJs);
		}, 100);
		const intervalLinux = setInterval(function () {
			pintarBarra(linux, 9, 7, intervalLinux);
		}, 100);
	}
}
window.addEventListener("scroll", efectoHabilidades);

//lleno una barra particular con la cantidad indicacda
function pintarBarra(id_barra, cantidad, indice, interval) {
	contadores[indice]++;
	x = contadores[indice];
	if (x < cantidad) {
		let elementos = id_barra.getElementsByClassName("e");
		elementos[x].style.backgroundColor = "#940253";
	} else {
		clearInterval(interval);
	}
}
