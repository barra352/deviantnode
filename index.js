const https = require('https');
const tk = require('./tk');
	
function dailydeviations(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'dailydeviations?';
		if (options.date) auth = auth+'date='+options.date+'&';
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
					if (v.status == 'error') reject(new Error(v.error_description+' ('+v.error_details.date+')'));
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function hot(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'hot?';
		if (options.category) auth = auth+'category_path='+options.category+'&';
		if (options.offset) auth = auth+'offset='+options.offset+'&';
		if (options.limit) auth = auth+'limit='+options.limit+'&';
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
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
						if (v.error_details.offset) reject(new Error(v.error_description+' ('+v.error_details.offset+')'));
						if (v.error_details.limit) reject(new Error(v.error_description+' ('+v.error_details.limit+')'));
					}
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function newest(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'newest?';
		if (options.category) auth = auth+'category_path='+options.category+'&';
		if (options.q) auth = auth+'q='+options.q+'&';
		if (options.offset) auth = auth+'offset='+options.offset+'&';
		if (options.limit) auth = auth+'limit='+options.limit+'&';
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
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
						if (v.error_details.offset) reject(new Error(v.error_description+' ('+v.error_details.offset+')'));
						if (v.error_details.limit) reject(new Error(v.error_description+' ('+v.error_details.limit+')'));
					}
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function popular(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		if (!options.time) options.time = '24hr';
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'popular?';
		if (options.category) auth = auth+'category_path='+options.category+'&';
		if (options.q) auth = auth+'q='+options.q+'&';
		if (options.offset) auth = auth+'offset='+options.offset+'&';
		if (options.limit) auth = auth+'limit='+options.limit+'&';
		if (options.time) auth = auth+'timerange='+options.time+'&';
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
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
						if (v.error_details.offset) reject(new Error(v.error_description+' ('+v.error_details.offset+')'));
						if (v.error_details.limit) reject(new Error(v.error_description+' ('+v.error_details.limit+')'));
						if (!(options.time == '8hr' 
						|| options.time == '24hr' 
						|| options.time == '3days' 
						|| options.time == '1week' 
						|| options.time == '1month' 
						|| options.time == 'alltime') || v.error_details.timerange) reject(new Error(v.error_description+' ('+v.error_details.timerange+')'));
					}
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function tags(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'tags?';
		if (options.tag) auth = auth+'tag='+options.tag+'&';
		if (options.offset) auth = auth+'offset='+options.offset+'&';
		if (options.limit) auth = auth+'limit='+options.limit+'&';
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
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
						if (v.error_details.tag) reject(new Error(v.error_description+' ('+v.error_details.tag+')')); //required
						if (v.error_details.offset) reject(new Error(v.error_description+' ('+v.error_details.offset+')'));
						if (v.error_details.limit) reject(new Error(v.error_description+' ('+v.error_details.limit+')'));
					}
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function undiscovered(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/browse/';
		auth = auth+'undiscovered?';
		if (options.category) auth = auth+'category_path='+options.category+'&';
		if (options.offset) auth = auth+'offset='+options.offset+'&';
		if (options.limit) auth = auth+'limit='+options.limit+'&';
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
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
						if (v.error_details.offset) reject(new Error(v.error_description+' ('+v.error_details.offset+')'));
						if (v.error_details.limit) reject(new Error(v.error_description+' ('+v.error_details.limit+')'));
					}
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function all(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		if (!options.username) options.username = '%20';
		let auth = 'https://www.deviantart.com/api/v1/oauth2/gallery/';
		auth = auth+'all?';
		auth = auth+'username='+options.username+'&';
		if (options.offset) auth = auth+'offset='+options.offset+'&';
		if (options.limit) auth = auth+'limit='+options.limit+'&';
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
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
						if (v.error_details.username) reject(new Error(v.error_description+' ('+v.error_details.username+')')); //required
						if (v.error_details.offset) reject(new Error(v.error_description+' ('+v.error_details.offset+')'));
						if (v.error_details.limit) reject(new Error(v.error_description+' ('+v.error_details.limit+')'));
					}
					else resolve(v);
				});
			}).on('error', function(e) {
				 reject(new Error(e));
			});
		});
	});
}

function profileinfo(clientid, clientsecret, options) {
	if (!options) options = {};
	return tk(clientid, clientsecret, response => {
		let auth = 'https://www.deviantart.com/api/v1/oauth2/user/';
		auth = auth+'profile/';
		if (options.username) auth = auth+options.username+'?';
		if (options.collections) auth = auth+'ext_collections='+options.collections+'&';
		if (options.galleries) auth = auth+'ext_galleries='+options.galleries+'&';
		auth = auth+'access_token='+response;
		return new Promise((resolve, reject) => {
			if (!options.username) reject(new Error('Request field validation failed. (username is required)'));
			https.get(auth, function(res) {
				res.setEncoding('utf8');
				var v = [];
				res.on("data", function(body) {
					v.push(body);
				});
				res.on("end", function() {
					v = JSON.parse(v.join(''));
					if (options.collections) {
						if (!(options.collections == 'yes' 
						|| options.collections == 'no' 
						|| options.collections == 1 
						|| options.collections == 0 
						|| options.collections == true 
						|| options.collections == false)) reject(new Error('Request field validation failed. (failed to validate collections. try with "false" or "true" value)'));
					}
					if (options.galleries) {
						if (!(options.galleries == 'yes' 
						|| options.galleries == 'no' 
						|| options.galleries == 1 
						|| options.galleries == 0 
						|| options.galleries == true 
						|| options.galleries == false)) reject(new Error('Request field validation failed. (failed to validate galleries. try with "false" or "true" value)'));
					}
					if (v.status == 'error') {
						if (!v.error_details) { v.error_details = {}; reject(new Error(v.error_description)); }
					}
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
module.exports.getUserInfo = profileinfo;