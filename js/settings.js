function backgroundColor() {

	// Change background image to background color. Funciona!
	const bgColor = document.body;
	bgColor.classList.toggle("backgroundColor");

	// Change fontawesome icon from sun to moon. Funciona solo 1 vez, no vuelve al estado original.
	document.getElementById("sun").src = "fontawesome-free-6.2.1-web/svgs/solid/moon.svg";

	// Change paragraph from claro to oscuro. Funciona solo 1 vez, no vuelve al estado original.
	const claro = document.getElementById("claro").innerHTML; 
	document.getElementById("claro").innerHTML = claro.replace("claro", "oscuro");

}

/* Como aplicar varios atributos en simultaneo de forma independiente?

function fontColor() {
	const fontColor = document.body;
	fontColor.classList.toggle("fontColor");
}

function fontFamily() {
	const fontFamily = document.body;
	fontFamily.classList.toggle("fontFamily");
}

function fontSize() {
	const fontSize = document.body;
	fontSize.classList.toggle("fontSize");
}

function textAlign() {
	const textAlign = document.body.#lorem;
	textAlign.classList.toggle("textAlign");
}

/* Por agregar

HTML DOM Style Object Reference
https://www.w3schools.com/jsref/dom_obj_style.asp

JavaScript HTML DOM - Changing CSS
https://www.w3schools.com/js/js_htmldom_css.asp

textAlign
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

The x attribute is set to...
https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp

Toggle with function
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

Local storage
https://www.w3schools.com/jsref/prop_win_localstorage.asp

Tabs
https://www.w3schools.com/howto/howto_js_tab_header.asp
https://www.w3schools.com/howto/howto_js_full_page_tabs.asp

Idioma
https://www.w3schools.com/jsref/jsref_replace.asp
Finding HTML elements by...
https://www.w3schools.com/js/js_htmldom_elements.asp

*/
