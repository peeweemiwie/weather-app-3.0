import { daysArray, monthArray } from './dates.js';

let displayForecast = (array) => {
	let container = document.querySelector('#container-forecast');
	container.innerHTML = ''; // clear the container before inserting new data.
	for (const [index, value] of array.entries()) {
		if (index < 7) {
			let theDateOfIndex = new Date(value.dt * 1000);
			let day = daysArray[theDateOfIndex.getDay()].substring(0, 3);
			let month = monthArray[theDateOfIndex.getMonth()].substring(0, 3);
			let date = theDateOfIndex.getDate();
			let newDiv = `
				<section class="d-flex flex-row justify-content-between align-items-center border-bottom">
					<section>
						<div>${day} ${month} ${date}</div>
						<div>${value.weather[0].description}</div>
					</section>
					<section class="d-flex flex-row align-items-center">
						<img
							src="http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png"
							alt="icon for ${value.weather[0].description}" />
						<div>
							<div>${Math.round(value.temp.max)}</div>
							<div>${Math.round(value.temp.min)}</div>
						</div>
					</section>
				</section>
				`;
			container.innerHTML += newDiv;
		}
	}
};

export { displayForecast };
