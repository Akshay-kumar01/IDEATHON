const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://nsfw-image-classification1.p.rapidapi.com/img/nsfw",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "nsfw-image-classification1.p.rapidapi.com",
		"x-rapidapi-key": "undefined"
	},
	"processData": false,
	"data": {
		"url": "https://www.inferdo.com/img/nsfw-1-raw.jpg"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});