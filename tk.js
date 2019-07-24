var https = require('https');
function getToken(clientid, clientsecret, rsp) {
	let auth = 'https://www.deviantart.com/oauth2/token?';
	const gt = 'client_credentials';
	auth = auth+'client_id='+clientid+'&';
	auth = auth+'client_secret='+clientsecret+'&';
	auth = auth+'grant_type='+gt;
	return new Promise((resolve, reject) => {
		https.get(auth, function(res) {
			res.setEncoding('utf8');
			res.on("data", function(body) {
				v = JSON.parse(body);
				if (v.status == 'error') reject(new Error(v.error_description));
				else resolve(rsp(v.access_token));
			});
		}).on('error', function(e) {
			 reject(new Error(e));
		});
	});
}

module.exports = getToken;