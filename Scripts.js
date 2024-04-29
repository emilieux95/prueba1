// --------------------------------------------------MODALBIENVENIDA--------------------------------------------------
// funcion que hace abrir el modal de bienvenida pero que los titulos y subtitulos no hagan la animacion
function modalBienvenida(){
	document.getElementById("modalBienvenida").style.display="block";
	document.getElementById("tituloEncabezado").style.animationPlayState="paused";
	document.getElementById("subtituloEncabezado").style.animationPlayState="paused";
	document.documentElement.style.overflow="hidden";
}
// funcion que hace que al cerrar el modal de bienvenida empiece a cargar la animacion del titulo y subtitulo
function cerrarMB(){
	document.getElementById("modalBienvenida").style.display="none";
	document.getElementById("tituloEncabezado").style.animationPlayState="running";
	document.getElementById("subtituloEncabezado").style.animationPlayState="running";
	document.documentElement.style.overflowY="auto";
}
// --------------------------------------------------SLIDESHOW--------------------------------------------------
// aqui empieza el codigo del slideshow 
var bgCounter = 0;
function heroSlideshow(){
	// Lista de URLs de imágenes de fondo para el slideshow
	var listaImgBg = [
		"url('Imagenes/HeroImage.png')",
		"url('Imagenes/Slideshow2.png')",
		"url('Imagenes/Slideshow3.png')"
	];
	// Incrementar el contador para cambiar la imagen de fondo
	bgCounter++;
	// Si el contador alcanza el tamaño de la lista, vuelve a empezar desde cero
	if (bgCounter==listaImgBg.length){
		bgCounter=0;
	}
	// Establecer la imagen de fondo del encabezado con la URL correspondiente
	document.getElementById("encabezado").style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),"+listaImgBg[bgCounter];
}
// aqui empieza el codigo del slideshow automatico
// Función para el slideshow automático
var counterSlideAnim=0;
var counterMain=0;
function slideShowAnim(){
	// Obtener la lista de elementos con la clase "fondoSlide"
	var listaImgBgAnim = document.getElementsByClassName("fondoSlide");
	// Incrementar el contador de animación de diapositivas
	counterSlideAnim++;
	counterMain=counterSlideAnim-1;
	// Si el contador de animación alcanza el tamaño de la lista, vuelve a empezar desde cero
	if(counterSlideAnim==listaImgBgAnim.length){
		counterSlideAnim=0;
	}
	// Si el contador principal es menor que cero, establece su valor al último índice de la lista
	if(counterMain<0){
		counterMain=listaImgBgAnim.length-1;
	}
	// Iterar sobre los elementos de la lista de diapositivas
	for (var i=0; i<listaImgBgAnim.length; i++){
		// Eliminar las clases de transición de las diapositivas
		listaImgBgAnim[i].classList.remove("nextSlide");
		listaImgBgAnim[i].classList.remove("mainSlide");
		listaImgBgAnim[i].classList.remove("hiddenSlide");
		// Agregar las clases de transición según el estado de la diapositiva
		if(i==counterSlideAnim){
			listaImgBgAnim[i].classList.add("nextSlide");
		}
		else if(i==counterMain){
			listaImgBgAnim[i].classList.add("mainSlide");
		}
		else{
			listaImgBgAnim[i].classList.add("hiddenSlide");
		}
	}
}

// --------------------------------------------------MODALENVIO--------------------------------------------------
// aqui empieza el modal de Envio
function modalEnvio(){
	document.getElementById("modalEnvio").style.display="block";
	document.documentElement.style.overflow="hidden";
	var nombre = document.getElementById("formNombre").value;
	var correo = document.getElementById("formEmail").value;
	var telefono = document.getElementById("formTelefono").value;
	var mensaje;
	// funcion dentro de otra funcion para que valide y envie un mensaje en el modal de envio segun lo que haya escrito mal.
	(function formCheck(){
		if (!document.getElementById("formNombre").checkValidity()) {
			mensaje = "Introduce un nombre Correcto";
			document.getElementById("mensajeEnvio").innerHTML = mensaje;
		}
			else if (!document.getElementById("formDireccion").checkValidity()){
					mensaje = "Introduce un direccion Correcta";
					document.getElementById("mensajeEnvio").innerHTML = mensaje;
			}
				else if (!document.getElementById("formEmail").checkValidity()){
						mensaje = "Introduce un email Correcto";
						document.getElementById("mensajeEnvio").innerHTML = mensaje;
				}
					else if (!document.getElementById("formTelefono").checkValidity()){
							mensaje = "Introduce un telefono Correcto";
							document.getElementById("mensajeEnvio").innerHTML = mensaje;
					}
						else{
							mensaje = "Acaba de reservar con Flora Nature, "+ nombre+" en breves se te enviara un correo de confirmacion a "+correo+" o un mensaje SMS al telefono "+telefono+", Muchas gracias por confiar en nosotros.";
							document.getElementById("mensajeEnvio").innerHTML = mensaje;
						}
	})()

	
}

function cerrarME(){
	document.getElementById("modalEnvio").style.display="none";
	document.documentElement.style.overflowY="auto";
	var nombre = document.getElementById("formNombre").value = "";
	var correo = document.getElementById("formEmail").value = "";
	var telefono = document.getElementById("formTelefono").value = "";
	var direccion = document.getElementById("formDireccion").value = "";
}
// --------------------------------------------------MENU INTERACTIVO--------------------------------------------------
// aqui empieza el codigo para el menu
// Variables para almacenar la posición previa del scroll
var posPreviaScroll = document.documentElement.scrollTop;
// Asignación de una función al evento de scroll de la ventana
window.onscroll = function() {esconderMostrarMenu()};
// Función para mostrar u ocultar el menú dependiendo del desplazamiento del scroll
function esconderMostrarMenu() {
	// posActual = la posicion mas alta del scroll de ese momento
	var posActualScroll = document.documentElement.scrollTop; 
	if (posPreviaScroll>posActualScroll) {
		// Cuando estamos subiendo mostramos menu y hacemos las siguientes actualizaciones
		document.getElementById("navbar").style.top = "0";

		if (posActualScroll>880) {
			document.getElementById("navbar").style.height = "60px";
			document.getElementById("navbar").style.fontSize = "1rem";
			document.getElementById("menu").style.lineHeight = "60px";
			document.getElementById("submenu").style.height = "120px";
			document.getElementById("submenu").style.fontSize = "0.8rem";
			document.getElementById("submenu").style.top = "60px";
			document.getElementById("logo").style.padding = "0px";
			
			
		}
		else{
			document.getElementById("navbar").style.height = "120px";
			document.getElementById("navbar").style.fontSize = "1.5rem";
			document.getElementById("menu").style.lineHeight = "100px";
			document.getElementById("submenu").style.height = "150px";
			document.getElementById("submenu").style.fontSize = "1.3rem";
			document.getElementById("submenu").style.top = "80px";
			document.getElementById("logo").style.padding = "10px";
			
		}
	}
	else {
		// Cuando estamos bajando escondemos menu y hacemos las siguientes actualizaciones
		
		if (posActualScroll<1000) {
			document.getElementById("navbar").style.height = "60px";
			document.getElementById("navbar").style.fontSize = "1rem";
			document.getElementById("menu").style.lineHeight = "60px";
			document.getElementById("submenu").style.height = "120px";
			document.getElementById("submenu").style.fontSize = "0.8rem";
			document.getElementById("submenu").style.top = "60px";
			document.getElementById("logo").style.padding = "0px";
		}
		else {
			document.getElementById("navbar").style.top = "-120px";
		}
	}
	// Actualizar la posición previa del scroll para la próxima iteración
	posPreviaScroll = posActualScroll;
}
// --------------------------------------------------  CARTA  --------------------------------------------------
// Aqui empieza el codigo de la carta
// Función para mostrar el contenido de una pestaña en la carta de productos
function marcarPestana(contenedorAMostrar, tabclicada){
	 // Ocultar todos los contenedores de pestañas de la carta
	var listaConPestanas = document.getElementsByClassName("contenedorFloresCarta");

	for (var i=0; i<listaConPestanas.length; i++){
		listaConPestanas[i].style.display="none";
	}
	// Mostrar el contenedor de la pestaña clicada
	document.getElementById(contenedorAMostrar).style.display="block";
	// Desactivar todas las etiquetas de pestañas
	var tabLinks = document.getElementsByClassName("etiquetaPestana");
	for (var i=0; i<tabLinks.length; i++){
		tabLinks[i].classList.remove("pestanaActiva");
	}
	// Activar la etiqueta de la pestaña clicada
	document.getElementById(tabclicada).classList.add("pestanaActiva");
	// Quitar la animación de las flores en todas las pestañas
	var flores = document.getElementsByClassName("flor");
	for (var i=0; i<flores.length; i++){
		flores[i].classList.remove("florAnimada");
	}
	// Agregar la animación de las flores en la pestaña seleccionada
	var floresC = document.getElementById(contenedorAMostrar).children;
	for (var i=0; i<floresC.length; i++){
		floresC[i].classList.add("florAnimada");
	}
	
}
// Función para marcar la pestaña por defecto al cargar la página
function pestanaPorDefecto(){
	marcarPestana('cartaPreservada', 'tabPreservada');
}
// -------------------------------------------------- LIGHTBOX --------------------------------------------------
// Funcion para preparar el lightbox
var listaRutaLB = []; // Lista de rutas de las imágenes en el lightbox
var numeroIMG = 0; // Índice de la imagen actual en el lightbox


function readyLightBox(){
	// Obtener todas las imágenes con la clase "imageLB"
	var listaImgLB = document.getElementsByClassName("imageLB");
	// Agregar las rutas de las imágenes a la lista
	for (var i=0; i<listaImgLB.length; i++) {
		listaRutaLB.push(listaImgLB[i].src);
	}
	// Añadir un event listener para cada imagen que abra el lightbox al hacer clic
	for (var i=0; i<listaImgLB.length; i++) {
		listaImgLB[i].addEventListener('click', openLightBox);
	}
	// Función para abrir el lightbox cuando se hace clic en una imagen
	function openLightBox(){
		var rutaImgCliclada= event.currentTarget.src;
		// Obtener el índice de la imagen clicada en la lista de rutas
		numeroIMG=listaRutaLB.indexOf(rutaImgCliclada);
		// Mostrar la imagen clicada en el lightbox
		document.getElementById("imageToShow").innerHTML = "<img class= 'imageLB'src=" + listaRutaLB[numeroIMG] +">";
		document.getElementById("modalLightBoxG").style.display="block";
		document.documentElement.style.overflow = 'hidden';
		closeLightBox();
	}
	// Función para cerrar el lightbox al hacer clic fuera de él
	function closeLightBox() {
		window.addEventListener("click", function(event) {
			// Cerrar el lightbox solo si el clic no fue en una imagen, botones de navegación o íconos y ocultarlo.
			if (!event.target.matches(".imageLB") && !event.target.matches(".lbButtons") && !event.target.matches(".fa-solid")  ){
				document.getElementById("modalLightBoxG").style.display="none";
				document.documentElement.style.overflowY = 'auto';
			}
		});
	}

}

// Función para mostrar la siguiente imagen en el lightbox
function nextImg() {
	numeroIMG++;
	if (numeroIMG==listaRutaLB.length) {
		numeroIMG=0;
	}
	
	document.getElementById("imageToShow").innerHTML = "<img class= 'imageLB'src=" + listaRutaLB[numeroIMG] +">";
}
// Función para mostrar la imagen anterior en el lightbox
function prevImg() {
	numeroIMG--;
	if (numeroIMG<0) {
		numeroIMG=listaRutaLB.length-1;
	}
	
	document.getElementById("imageToShow").innerHTML = "<img class= 'imageLB'src=" + listaRutaLB[numeroIMG] +">";
}