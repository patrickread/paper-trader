Dentist Search Map
==================

> Dentist finding Map Widget

Using
-----

Setup your HTML like so:

```html
<script src="//use.typekit.net/sug7xuo.js"></script>
<link rel="stylesheet" href="https://use.typekit.net/c/e9538c/1w;proxima-nova,2,2clz4z:W:n1,2clz51:W:n3,2clz4n:W:n4,2clz4q:W:n6/l?3bb2a6e53c9684ffdc9a99f71f5b2a62d9e04e8a5ad770d51978fca0a52d380bc958d2c28346f6312a42c428ae5b28f44eb332feb7c9e60d8782183cb1060eb7d752c3449a82cfc5a23c5bd7142cad9259ec4a8d0f58c0c14e6b2ae4e9686b96083866b9a0c47b709a9e2199f279e13cab9756580df5ce7e91813b08970e003d8eeedf155ecf47cfc4884686492eb5c9f23e758f41cb4d40af0def9d47a2f09ee719a44c2165a2ca03ee6eb6050ebeb2348049ae815d53a3eb0d3435abca2a20447e1b4265a02d177cb3058e7a18b35cb4073f106240c7081f033341b84f13c17069a0e68fcb1cae1e076f2e2fd3f38f2a4ccde0737dfd6331aaabec0590d6dd72f8349d5346feb8f680ea30ae6179d3a65723c5cf9470046b3e2048e7aed9a9edb25784ef5f22d11c3c231f43379425e5863a88497b18f8aede75" media="all">
<script>try{Typekit.load();}catch(e){}</script>

<div id="app"></div>

<script src="//maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyDEui5GK-jEzNimVqR-hEFeg-YMJ1TcLtM"></script>
```

Inside your root component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import DentistSearchMap from 'dentist-search-map'

var style = {
  height: '550px',
  position: 'relative',
  overflow: 'hidden'
}

ReactDOM.render(
  <DentistSearchMap style={style}/>,
  document.getElementById('app')
);
```

Development
-----------

    npm i
    npm start

Building
--------

    npm run build

Design
------

Original Design from [Steepless](https://github.com/cheeaun/steepless)

The design is initially inspired by a [Google Maps demo for elevation in San Francisco](https://embed-dot-more-than-a-map.appspot.com/demos/routing/elevation). The rest of the UI is partially inspired by Google's [Material Design](https://www.google.com/design/spec/material-design/introduction.html).

The SVG icon sprite is generated with [Fontastic](http://fontastic.me/).


License
-------

[MIT](http://silasb.mit-license.org/)
