# Gravatar

[![npm](https://img.shields.io/npm/v/gravatar-url-simple.svg)](https://www.npmjs.com/package/gravatar-url-simple)
[![NPM downloads](https://img.shields.io/npm/dm/gravatar-url-simple.svg)](https://www.npmjs.com/package/gravatar-url-simple)
[![License](https://img.shields.io/npm/l/gravatar-url-simple.svg)](https://www.npmjs.com/package/gravatar-url-simple)

Simple, lightweight npm package without external dependencies

### Install
```javascript
npm i gravatar-url-simple
```
### Import
```
import { gravatarURL } from "gravatar-url-simple";
```

## Simple usage:

```javascript
const email = "test@email.com"
const defaultImage = gravatarURL.gravatarTypes.IDENTICON
gravatarURL.getGravatarUrl(email, defaultImage)
```

### Default inage types:

```javascript
const gravatarTypes = {
  NOTFOUND: "404",
  MP: "mp",
  IDENTICON: "identicon",
  MONSTERID: "monsterid",
  WAVATAR: "wavatar",
  RETRO: "retro",
  ROBOHASH: "robohash",
  BLANK: "blank",
};
```


> 404: do not load any image if none is associated with the email hash, instead return an HTTP 404 (File Not Found) response
> 
> mp: (mystery-person) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)
> 
> identicon: a geometric pattern based on an email hash
> 
> monsterid: a generated 'monster' with different colors, faces, etc
> 
> wavatar: generated faces with differing features and backgrounds
> 
> retro: awesome generated, 8-bit arcade-style pixelated faces
> 
> robohash: a generated robot with different colors, faces, etc
> 
> blank: a transparent PNG image (border added to HTML below for demonstration purposes)




