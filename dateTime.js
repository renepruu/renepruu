const monthNamesEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
const weekdayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

const dateEt = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let dateNowEt = dateNow + ". " + monthNamesEt[monthNow] + " " + yearNow;
	return dateNowEt;
}

const weekDayET = function(){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
	//const weekdayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
	return weekdayNamesEt[dayNow];
}

const timeFormattedET = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	return hourNow + ":" + minuteNow + ":" + secondNow;
}


module.exports = {monthsEt: monthNamesEt, weekdaysEt: weekdayNamesEt, dateEt: dateEt, weekDayEt: weekDayET, timeEt: timeFormattedET};


const partOfDay = function() {
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
	let hourNow = timeNow.getHours();
	
	// Check if it's a weekday (Monday to Friday)
	if (dayNow >= 1 && dayNow <= 5) {
		if (hourNow >= 0 && hourNow < 6) {
			return "ööaeg";
		} else if (hourNow >= 6 && hourNow < 8) {
			return "hommikune ärkamisaeg";
		} else if (hourNow >= 8 && hourNow < 15) {
			return "kooliaeg";
		} else if (hourNow >= 15 && hourNow < 18) {
			return "pärast kooli vaba aeg";
		} else if (hourNow >= 18 && hourNow < 21) {
			return "õhtune aeg";
		} else {
			return "magamamineku aeg";
		}
	} else {
		// Weekend (Saturday or Sunday)
		if (hourNow >= 0 && hourNow < 8) {
			return "ööaeg";
		} else if (hourNow >= 8 && hourNow < 12) {
			return "hommikune vaba aeg";
		} else if (hourNow >= 12 && hourNow < 18) {
			return "päevane vaba aeg";
		} else if (hourNow >= 18 && hourNow < 22) {
			return "õhtune vaba aeg";
		} else {
			return "magamamineku aeg";
		}
	}

}


module.exports = {
    monthsEt: monthNamesEt, 
    weekdaysEt: weekdayNamesEt, 
    dateEt: dateEt, 
    weekDayEt: weekDayET, 
    timeEt: timeFormattedET,
    partOfDay: partOfDay
};