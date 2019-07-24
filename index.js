const https = require('https');
const tk = require('./tk');
	
function dailydeviations(clientid, clientsecret) {
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'dailydeviations?';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function hot(clientid, clientsecret) {
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'hot?';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function newest(clientid, clientsecret, query) {
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'newest?';
		if (query) auth = auth+'q='+query+'&';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function popular(clientid, clientsecret, query) {
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'popular?';
		if (query) auth = auth+'q='+query+'&';
		auth = auth+'timerange=24hr&';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function tags(clientid, clientsecret, tag) {
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'tags?';
		if (tag) auth = auth+'tag='+tag+'&';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description+' ('+v.error_details.tag+')'));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function undiscovered(clientid, clientsecret) {
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'undiscovered?';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function all(clientid, clientsecret, username) {
	return tk(clientid, clientsecret, response => {
		if (!username) username = '%20';
		let auth = 'https://www.deviantart.com/api/v1/oauth2/gallery/';
		auth = auth+'all?';
		auth = auth+'username='+username+'&';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (v.status == 'error') reject(new Error(v.error_description+' ('+v.error_details.username+')'));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

module.exports.getDailyDeviations = dailydeviations;
module.exports.getHotDeviations = hot;
module.exports.getNewestDeviations = newest;
module.exports.getPopularDeviations = popular;
module.exports.getTagDeviations = tags;
module.exports.getUndiscoveredDeviations = undiscovered;
module.exports.getGalleryAllDeviations = all;