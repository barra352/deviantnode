# deviantnode
a pretty basic node.js library using the deviantart api

[![version](https://img.shields.io/npm/v/deviantnode.svg)](https://www.npmjs.com/package/deviantnode)


## How do I start?

The functions for this package is quite easy and basic. All these contain the [deviantart api](https://www.deviantart.com/developers/). The only requirements you need is to [create your application](https://www.deviantart.com/developers/register), which gives you `CLIENT_ID` and `CLIENT_SECRET`.

## The "Basic"
```js
const deviantnode = require('deviantnode');

const options = { //optional
  category: 'digitalart/animation/',
  q: 'test',
  time: '24hr',
  offset: 0,
  limit: 5
};
deviantnode.getPopularDeviations('CLIENT_ID','CLIENT_SECRET', options)
  .then(response => console.log(response.results[0])); //show the first result
```

## Functions

### getDailyDeviations(client_id, client_secret, [options])
Browse daily deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_dailydeviations/3de083a0c0a7733a46a53ae9cee74544)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`:
  - `date`(optional): the day to browse, defaults to today. the string must be like this: `YYYY-MM-DD`.

```js
deviantnode.getDailyDeviations('CLIENT_ID','CLIENT_SECRET', { date: '2012-12-12' })
  .then(response => console.log(response));
```

### getHotDeviations(client_id, client_secret, [options])
Browse whats hot deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_hot/39efe12cc28b3f2418e5cb0a66a68760)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `category`(optional): category path to fetch from.
  - `offset`(optional): the pagination offset.
  - `limit`(optional): the pagination limit.

```js
const options = {
   category: 'apps',
   offset: 6,
   limit: 1 }
}
deviantnode.getHotDeviations('CLIENT_ID','CLIENT_SECRET', options)
  .then(response => console.log(response));
```

### getNewestDeviations(client_id, client_secret, [options])
Browse whats hot deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_newest/81c87f79a46989ee63bca2f70e4ca0fc)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `category`(optional): category path to fetch from.
  - `q`(optional): a search query term.
  - `offset`(optional): the pagination offset.
  - `limit`(optional): the pagination limit.

```js
deviantnode.getNewestDeviations('CLIENT_ID','CLIENT_SECRET', { q: 'hi' })
  .then(response => console.log(response));
```

### getPopularDeviations(client_id, client_secret, [options])
Browse popular deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_popular/73900c76a9806d17d78956830797d15d)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `category`(optional): category path to fetch from.
  - `q`(optional): a search query term.
  - `time`(optional): the timerange, valid values(`8hr`, `24hr`, `3days`, `1week`, `1month`, `alltime`) default: `24hr`.
  - `offset`(optional): the pagination offset.
  - `limit`(optional): the pagination limit.

```js
deviantnode.getPopularDeviations('CLIENT_ID','CLIENT_SECRET', { time: 'alltime', limit: 5 })
  .then(response => console.log(response));
```

### getTagDeviations(client_id, client_secret, [options])
Browse a tag. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_tags/804dfdfd8e831a0b136f636b5eabd788)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `tag`: the tag to browse.
  - `offset`(optional): the pagination offset.
  - `limit`(optional): the pagination limit.

```js
deviantnode.getTagDeviations('CLIENT_ID','CLIENT_SECRET', { tag: 'Hi' })
  .then(response => console.log(response));
```

### getUndiscoveredDeviations(client_id, client_secret, [options])
Browse undiscovered deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_undiscovered/51c01a53b1545da4fe68ef661e079fc6)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `category`(optional): category path to fetch from.
  - `offset`(optional): the pagination offset.
  - `limit`(optional): the pagination limit.

```js
deviantnode.getUndiscoveredDeviations('CLIENT_ID','CLIENT_SECRET', { category: 'digitalart/animation/' })
  .then(response => console.log(response));
```

### getGalleryAllDeviations(client_id, client_secret, [options])
Get the "all" view of a users gallery. [Source](https://www.deviantart.com/developers/http/v1/20160316/gallery_all/bdb19761e6debcc6609356d6b78f4a5d)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `username`: the user whose gallery to fetch.
  - `offset`(optional): the pagination offset.
  - `limit`(optional): the pagination limit.

```js
deviantnode.getGalleryAllDeviations('CLIENT_ID','CLIENT_SECRET', { username: 'EduardoBarra' })
  .then(response => console.log(response));
```

### getUserInfo(client_id, client_secret, [options])
Get user profile information. [Source](https://www.deviantart.com/developers/http/v1/20160316/user_profile/0b06f6d6c8aa25b33b52f836e53f4f65)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `options`: 
  - `username`: username to lookup profile of.
  - `collections`(optional): the pagination offset.
  - `galleries`(optional): the pagination limit.

```js
deviantnode.getUserInfo('CLIENT_ID','CLIENT_SECRET', { username: 'EduardoBarra' })
  .then(response => console.log(response));
```

and,.,. that's all.  soon there will be more functions.!
