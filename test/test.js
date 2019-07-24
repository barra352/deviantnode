const deviantnode = require('../index');

//GET /browse/dailydeviations | Browse daily deviations
const dailydeviations = deviantnode.getDailyDeviations('CLIENT_ID','CLIENT_SECRET').then(response => console.log(response));

//GET /browse/hot | Browse whats hot deviations
const hot = deviantnode.getHotDeviations('CLIENT_ID','CLIENT_SECRET').then(response => console.log(response));

//GET /browse/newest | Browse newest deviations
const newest = deviantnode.getNewestDeviations('CLIENT_ID','CLIENT_SECRET').then(response => console.log(response));

//GET /browse/popular | Browse popular deviations
const popular = deviantnode.getPopularDeviations('CLIENT_ID','CLIENT_SECRET').then(response => console.log(response));

//GET /browse/tags | Browse a tag
const tag = deviantnode.getTagDeviations('CLIENT_ID','CLIENT_SECRET', 'Hi').then(response => console.log(response));

//GET /browse/undiscovered | Browse undiscovered deviations
const undiscovered = deviantnode.getUndiscoveredDeviations('CLIENT_ID','CLIENT_SECRET').then(response => console.log(response));

//GET /gallery/all | Get the "all" view of a users gallery
const all = deviantnode.getGalleryAllDeviations('CLIENT_ID','CLIENT_SECRET', 'EduardoBarra').then(response => console.log(response));