let daysArray = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
let monthArray = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
let currentTime = new Date();
let currentTimeObj = {
	month: monthArray[currentTime.getMonth()].substring(0, 3),
	date: currentTime.getDate(),
	day: daysArray[currentTime.getDay()].substring(0, 3),
	year: currentTime.getFullYear(),
	hour: currentTime.getHours(),
	minute: currentTime.getMinutes(),
};

export { currentTimeObj, daysArray, monthArray };
