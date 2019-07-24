# deviantnode
a pretty basic node.js library using the deviantart api

[![npm version](https://img.shields.io/npm/v/deviantnode.svg)](https://www.npmjs.com/package/deviantnode)


## How do I start?

The functions for this package is quite easy and basic. All these contain the [deviantart api](https://www.deviantart.com/developers/). The only requirements you need is to [create your application](https://www.deviantart.com/developers/register), which gives you `CLIENT_ID` and `CLIENT_SECRET`.

## The "Basic"
```js
const deviantnode = require('deviantnode');
const popular = deviantnode.getPopularDeviations('CLIENT_ID','CLIENT_SECRET', 'Hello') //optional: a search query term
  .then(response => console.log(response.results[0])); //show the first result
```

## Functions

### getDailyDeviations(client_id, client_secret)
Browse daily deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_dailydeviations/3de083a0c0a7733a46a53ae9cee74544)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.

```js
const dailydeviations = deviantnode.getDailyDeviations('CLIENT_ID','CLIENT_SECRET')
  .then(response => console.log(response));
```

### getHotDeviations(client_id, client_secret)
Browse whats hot deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_hot/39efe12cc28b3f2418e5cb0a66a68760)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.

```js
const hot = deviantnode.getHotDeviations('CLIENT_ID','CLIENT_SECRET')
  .then(response => console.log(response));
```

### getNewestDeviations(client_id, client_secret, query)
Browse whats hot deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_newest/81c87f79a46989ee63bca2f70e4ca0fc)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `query`(optional): a search query term.

```js
const newest = deviantnode.getHotDeviations('CLIENT_ID','CLIENT_SECRET')
  .then(response => console.log(response));
```

### getPopularDeviations(client_id, client_secret, query)
Browse popular deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_popular/73900c76a9806d17d78956830797d15d)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `query`(optional): a search query term.

```js
const popular = deviantnode.getPopularDeviations('CLIENT_ID','CLIENT_SECRET')
  .then(response => console.log(response));
```

### getTagDeviations(client_id, client_secret, tag)
Browse a tag. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_tags/804dfdfd8e831a0b136f636b5eabd788)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `tag`: the tag to browse.

```js
const tag = deviantnode.getTagDeviations('CLIENT_ID','CLIENT_SECRET', 'Hi')
  .then(response => console.log(response));
```

### getUndiscoveredDeviations(client_id, client_secret)
Browse undiscovered deviations. [Source](https://www.deviantart.com/developers/http/v1/20160316/browse_undiscovered/51c01a53b1545da4fe68ef661e079fc6)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.

```js
const undiscovered = deviantnode.getUndiscoveredDeviations('CLIENT_ID','CLIENT_SECRET')
  .then(response => console.log(response));
```

### getGalleryAllDeviations(client_id, client_secret, username)
Get the "all" view of a users gallery. [Source](https://www.deviantart.com/developers/http/v1/20160316/gallery_all/bdb19761e6debcc6609356d6b78f4a5d)

Parameters:
* `CLIENT_ID`: the client id from your application.
* `CLIENT_SECRET`: the client secret from your application.
* `username`: the user whose gallery to fetch.

```js
const all = deviantnode.getGalleryAllDeviations('CLIENT_ID','CLIENT_SECRET', 'EduardoBarra')
  .then(response => console.log(response));
```

and,.,. that's all. soon there will be more functions.!
