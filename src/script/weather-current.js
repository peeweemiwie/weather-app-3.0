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

	//set input value to the city name.
	let inputSearch = document.querySelector('#input-search');
	if (inputSearch.value.toLowerCase() !== name.toLowerCase()) {
		inputSearch.setAttribute('value', name);
	}
	let headers = `<h1>${name}</h1><h2>${currentDateTimeLong}</h2>`;
	let iconImg = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icon for ${description}" />`;
	let weather = `<div>${main}</div><div>${description}</div>`;
	let temperature = `
		<div>
      ${Math.round(temp)}
      <span class="unit-imperial">F</span>
      <span class="unit-metric">C</span>
    </div>
		<div>
      feels like
      ${Math.round(feels_like)}
      <span class="unit-imperial">F</span>
      <span class="unit-metric">C</span>
    </div>`;
	let humidityElem = `<div>humidity</div><div>${humidity}%</div>`;
	let wind = `
    <div>wind</div>
    <div>
      ${Math.round(speed)}
      <span class="unit-imperial">m</span>
      <span class="unit-metric">k</span>ph
    </div>`;
	document.querySelector('#container-icon').innerHTML = iconImg;
	document.querySelector('#header-current-weather').innerHTML = headers;
	document.querySelector('#container-weather-main').innerHTML = weather;
	document.querySelector('#container-temperature').innerHTML = temperature;
	document.querySelector('#container-humidity').innerHTML = humidityElem;
	document.querySelector('#container-wind').innerHTML = wind;
};

export { displayCurrentWeather };
