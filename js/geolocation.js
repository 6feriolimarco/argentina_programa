function geoFindMe() {

	const status = document.querySelector('#status');
	const mapLink = document.querySelector('#map-link');

	mapLink.href = '';
	mapLink.textContent = '';

	function success(position) {
		const latitude	= position.coords.latitude;
		const longitude = position.coords.longitude;

		status.textContent = '';
		mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		mapLink.textContent = `Latitud: ${latitude}° Longitud: ${longitude}°`;

		if (latitude == "-34.5825" && longitude == "-58.4346") {
			status.textContent = 'Buenos Aires';
			document.getElementById("mimapa").src = "https://www.openstreetmap.org/export/embed.html?bbox=-68.00077915191652%2C-38.93765615861767%2C-67.98661708831789%2C-38.930420489465305&amp;layer=mapnik&amp;marker=-38.93403841631807%2C-67.99369812011719";
			document.getElementById("mienlace").href = "https://www.openstreetmap.org/?mlat=-38.93404&amp;mlon=-67.99370#map=17/-38.93404/-67.99370";
		}
		else if (latitude == "-38.9296" && longitude == "-67.9842") {
			status.textContent = 'Cipolletti';
			document.getElementById("mimapa").src = "https://www.openstreetmap.org/export/embed.html?bbox=-68.00077915191652%2C-38.93765615861767%2C-67.98661708831789%2C-38.930420489465305&amp;layer=mapnik&amp;marker=-38.93403841631807%2C-67.99369812011719";
			document.getElementById("mienlace").href = "https://www.openstreetmap.org/?mlat=-38.93404&amp;mlon=-67.99370#map=17/-38.93404/-67.99370";
		}
		else {
		status.textContent = 'Apa! Me agarraste desprevenido! No tengo listada tu ciudad. Intenta corregir tus coordenadas recargando esta pagina o apretando el boton "Mi ubicacion".';
		}
	}

	function error() {
		status.textContent = 'No se pudo obtener tu ubicacion.';
	}

	if (!navigator.geolocation) {
		status.textContent = 'La geolocalizaion no es soportada por tu navegador';
	} else {
		status.textContent = 'Localizando…';
		navigator.geolocation.getCurrentPosition(success, error);
	}

}
	
document.querySelector('#find-me').addEventListener('click', geoFindMe);

