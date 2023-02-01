function abrirMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}

	function scrollIndicatorContainer() {
		var sir = document.getElementById("pContainer");
		if (sir.className === "progress-container") {
			sir.className += " responsive";
		} else {
			sir.className = "progress-container";
		}
	}

	function scrollIndicatorBar() {
		var sir = document.getElementById("myBar");
		if (sir.className === "progress-bar") {
			sir.className += " responsive";
		} else {
			sir.className = "progress-bar";
		}
	}

}

function cerrarMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav responsive") {
		x.className = "topnav";
	} else {
		x.className = "topnav responsive";
	}

	function scrollIndicatorContainer() {
		var sir = document.getElementById("pContainer");
		if (sir.className === "progress-container responsive") {
			sir.className = "progress-container";
		} else {
			sir.className = "progress-container";
		}
	}

	function scrollIndicatorBar() {
		var sir = document.getElementById("myBar");
		if (sir.className === "progress-bar responsive") {
			sir.className = "progress-bar";
		} else {
			sir.className = "progress-bar";
		}
	}

}

function abrirPestania(evt, nombrePestania) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(nombrePestania).style.display = "block";
	evt.currentTarget.className += " active";

	// Cierra el menu en cuanto se aprieta el boton de alguna de las pestanias
	cerrarMenu();
}
