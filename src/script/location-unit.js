import { apiKey, apiEndpoint } from './axios.js';
import { displayForecast } from './weather-forecast.js';
import { displayCurrentWeather } from './weather-current.js';

let createUrlFromSearchValue = (location, units) => {
	let url = `${apiEndpoint}weather?q=${location}&units=${units}&appid=${apiKey}`;
	axios.get(url).then(sendCurrentWeatherData);
};

let sendForecastData = (response) => {
	displayForecast(response.data.daily);
};

let createUrlForForecast = (response) => {
	let lat = response.data.coord.lat;
	let lon = response.data.coord.lon;
	let units = '';
	let configUrl = response.config.url;
	configUrl.indexOf('units=imperial') > -1
		? (units = 'imperial')
		: (units = 'metric');
	let urlForecast = `${apiEndpoint}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${units}&appid=${apiKey}`;
	axios.get(urlForecast).then(sendForecastData);
};

let sendCurrentWeatherData = (response) => {
	displayCurrentWeather(response.data);
	createUrlForForecast(response);
};

let toggleUnitButtons = (units) => {
	// disable a button (F/C) which unit is currently displayed, in order to prevent from sending the same request again.
	let submitImperial = document.querySelector('#submit-imperial');
	let submitMetric = document.querySelector('#submit-metric');
	let dataUnits = document
		.querySelector('#container-page')
		.getAttribute('data-units');
	if (dataUnits === 'imperial') {
		submitImperial.disabled = true;
		submitMetric.disabled = false;
	} else if (dataUnits === 'metric') {
		submitImperial.disabled = false;
		submitMetric.disabled = true;
	}
};

let getLocationAndUnit = (event) => {
	event.preventDefault();
	let location = document.querySelector('#input-search').value;
	let units = event.target.getAttribute('data-units');
	createUrlFromSearchValue(location, units);
	document.querySelector('#container-page').setAttribute('data-units', units);
	toggleUnitButtons(units);
};

document
	.querySelector('#submit-search')
	.addEventListener('click', getLocationAndUnit);

document
	.querySelector('#submit-imperial')
	.addEventListener('click', getLocationAndUnit);
document
	.querySelector('#submit-metric')
	.addEventListener('click', getLocationAndUnit);

export { getLocationAndUnit, toggleUnitButtons, sendCurrentWeatherData };
