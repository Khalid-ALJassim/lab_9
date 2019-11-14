$(document).ready(function() {
	var url ='https://api.darksky.net/forecast/d69d264d18d9991496a4d475f1494f14/37.8267,-122.4233'; //Place your DarkSky API Call Here
	$.ajax({url:url, dataType:"jsonp"}).then(function(data) {

	})
})

$(document).ready(function() {
	var url ='https://api.darksky.net/forecast/d69d264d18d9991496a4d475f1494f14/37.8267,-122.4233'; //Place your DarkSky API Call Here
	$.ajax({url:url, dataType:"jsonp"}).then(function(data) {
		console.log(data);//Review all of the data returned
		console.log("Current Temp: " + data.currently.apparentTemperature);//View Today's Temp
		console.log("Tomorrow's High: " + data.daily.data[1].apparentTemperatureHigh);//View Tomorrow's High
	})
})

$(document).ready(function() {
	var url ='https://api.darksky.net/forecast/d69d264d18d9991496a4d475f1494f14/37.8267,-122.4233'; //Place your DarkSky API Call Here
	$.ajax({url:url, dataType:"jsonp"}).then(function(data) {
		console.log(data);//Review all of the data returned
		console.log("Current Temp: " + data.currently.apparentTemperature);//View Today's Temp
		console.log("Tomorrow's High: " + data.daily.data[1].apparentTemperatureHigh);//View Tomorrow's High
		var unix_time = data.currently.time;//Retrieve the current timestamp
		var javascript_time = new Date(unix_time * 1000);//Convert the unix time stamp to javascript
		console.log(javascript_time);
		console.log(javascript_time.getDay());
	})
})

