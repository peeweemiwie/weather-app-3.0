import { currentDateTimeLong } from './format-dates.js';

let displayCurrentWeather = (data) => {
	let {
		name,
		main: { temp },
		main: { feels_like },
		main: { humidity },
		weather: [{ icon }],
		weather: [{ description }],
		weather: [{ main }],
		wind: { speed },
	} = data;

	//set input value to name of the city.
	let inputSearch = document.querySelector('#input-search');
	if (inputSearch.value.toLowerCase() !== name.toLowerCase()) {
		inputSearch.setAttribute('value', name);
	}
	let headers = `
		<h1 class="container-city text-center">${name}</h1>
		<h2 class="container-date text-center">${currentDateTimeLong}</h2>`;

	// change the background depends on day or night
	let currentWeather = document.querySelector('#current-weather');
	icon.indexOf('d') > -1
		? currentWeather.setAttribute('data-theme', 'light')
		: currentWeather.setAttribute('data-theme', 'dark');

	let iconImg = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icon for ${description}" />`;

	let weather = `
		<div class="px-1 major">${main}</div>
		<div class="px-1 minor">${description}</div>`;

	let temperature = `
		<div class="px-1 major">
      ${Math.round(temp)}
      <span class="unit-imperial">F</span>
      <span class="unit-metric">C</span>
    </div>
		<div class="px-1 minor">
      feels like
      ${Math.round(feels_like)}
      <span class="unit-imperial">F</span>
      <span class="unit-metric">C</span>
    </div>`;

	let humidityElem = `
		<div class="text-center">Humidity</div>
		<div class="text-center">${humidity}%</div>`;

	let wind = `
    <div class="text-center">Wind</div>
    <div class="text-center">
      ${Math.round(speed)}
      <span class="unit-imperial">m</span><span class="unit-metric">k</span>ph
    </div>`;
	document.querySelector('#container-icon').innerHTML = iconImg;
	document.querySelector('#header-current-weather').innerHTML = headers;
	document.querySelector('#container-weather-main').innerHTML = weather;
	document.querySelector('#container-temperature').innerHTML = temperature;
	document.querySelector('#container-humidity').innerHTML = humidityElem;
	document.querySelector('#container-wind').innerHTML = wind;
};

export { displayCurrentWeather };
