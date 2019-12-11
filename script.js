var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%253Anew7-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "f1bd960599msh649fc643e8fdbcep118c63jsn3b463af5d748"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


console.log("hello");
