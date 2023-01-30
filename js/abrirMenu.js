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
