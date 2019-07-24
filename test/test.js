const deviantnode = require('../index');

//GET /browse/dailydeviations | Browse daily deviations
const dailydeviations = deviantnode.getDailyDeviations('CLIENT_ID','CLIENT_SECRET', { date: '2012-12-12' }).then(response => console.log(response));

//GET /browse/hot | Browse whats hot deviations
const hot = deviantnode.getHotDeviations('CLIENT_ID','CLIENT_SECRET', { category: 'apps', offset: 6, limit: 1 }).then(response => console.log(response));

//GET /browse/newest | Browse newest deviations
const newestopts = { category: 'digitalart/animation/', q: 'hi', offset: 0, limit: 1 };
const newest = deviantnode.getNewestDeviations('CLIENT_ID','CLIENT_SECRET', newestopts).then(response => console.log(response));

//GET /browse/popular | Browse popular deviations
const popularopts = {
	category: 'digitalart/animation/',
	q: 'test',
	time: '24hr',
	offset: 0,
	limit: 5
};
const popular = deviantnode.getPopularDeviations('CLIENT_ID','CLIENT_SECRET', popularopts).then(response => console.log(response));

//GET /browse/tags | Browse a tag
const tag = deviantnode.getTagDeviations('CLIENT_ID','CLIENT_SECRET', { tag: 'Hi', offset: 1, limit: 1 }).then(response => console.log(response));

//GET /browse/undiscovered | Browse undiscovered deviations
const undiscovered = deviantnode.getUndiscoveredDeviations('CLIENT_ID','CLIENT_SECRET', { category: 'digitalart/animation/', offset: 4, limit: 3 }).then(response => console.log(response));

//GET /gallery/all | Get the "all" view of a users gallery
const all = deviantnode.getGalleryAllDeviations('CLIENT_ID','CLIENT_SECRET', { username: 'EduardoBarra', offset: 0, limit: 1 }).then(response => console.log(response));

//GET /user/profile/{username} | Get user profile information
const profileinfo_options = {
	username: 'EduardoBarra',
	collections: false,
	galleries: true
};
const profile_info = deviantnode.getUserInfo('CLIENT_ID','CLIENT_SECRET', profileinfo_options).then(response => console.log(response));
