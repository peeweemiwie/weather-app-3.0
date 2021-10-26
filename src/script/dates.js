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
	month: monthArray[currentTime.getMonth()],
	date: currentTime.getDate(),
	day: daysArray[currentTime.getDay()],
	year: currentTime.getFullYear(),
	hour: currentTime.getHours(),
	minute: currentTime.getMinutes(),
};

export { currentTimeObj };
