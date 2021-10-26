import { currentTimeObj } from './dates.js';

let { month, date, day, year, hour, minute } = currentTimeObj;

let isAmOrPm = (value) => {
	let amPm = undefined;
	value < 12 ? (amPm = 'am') : (amPm = 'pm');
	return amPm;
};

let updateHour = (value) => {
	let hourToBeDisplayed = undefined;
	if (value === 0) {
		hourToBeDisplayed = 12;
	} else if (value > 0 && value <= 12) {
		hourToBeDisplayed = value;
	} else hourToBeDisplayed = value - 12;
	return hourToBeDisplayed;
};

let updateMinute = (value) => {
	value < 10 ? (value = '0' + value) : (value = value);
	return value;
};

let unit = isAmOrPm(hour);
hour = updateHour(hour);
minute = updateMinute(minute);
let truncatedMonth = month.slice(0, 3);

let currentDateTimeLong = `${day} ${month} ${date} ${year} ${hour}:${minute}${unit}`;
let currentDate = `${day} ${truncatedMonth} ${date}`;

export { currentDateTimeLong, currentDate };
