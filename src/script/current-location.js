import { apiKey, apiEndpoint } from './axios.js';
import {
	setDataUnits,
	toggleUnitButtons,
	sendCurrentWeatherData,
} from './location-unit.js';

let createUrlFromCurrentLocation = (lat, lon) => {
	let url = `${apiEndpoint}weather?lat=${lat}&lon=${lon}&cnt=1&units=imperial&appid=${apiKey}`;
	axios.get(url).then(sendCurrentWeatherData);
};

let getLongitudeLatitude = (position) => {
	let lat = position.coords.latitude;
	let lon = position.coords.longitude;
	createUrlFromCurrentLocation(lat, lon);
};

document
	.querySelector('#submit-current-location')
	.addEventListener('click', (event) => {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(getLongitudeLatitude);
		let units = event.target.getAttribute('data-units');
		document.querySelector('#container-page').setAttribute('data-units', units);
		toggleUnitButtons(units);
	});

export { getLongitudeLatitude };
