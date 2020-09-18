# rexios 
> Utils normalize url params and data for [axios](https://github.com/axios/axios) rest api request

[![Actions Status](https://github.com/Scrum/rexios/workflows/Actions%20Status/badge.svg?style=flat-square)](https://github.com/Scrum/rexios/actions?query=workflow%3A%22CI+tests%22)[![node](https://img.shields.io/node/v/rexios.svg?style=flat-square)]()[![npm version](https://img.shields.io/npm/v/rexios.svg?style=flat-square)](https://www.npmjs.com/package/rexios)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)[![Coveralls status](https://img.shields.io/coveralls/Scrum/rexios.svg?style=flat-square)](https://coveralls.io/r/Scrum/rexios)

[![npm downloads](https://img.shields.io/npm/dm/rexios.svg?style=flat-square)](https://www.npmjs.com/package/rexios)[![npm](https://img.shields.io/npm/dt/rexios.svg?style=flat-square)](https://www.npmjs.com/package/rexios)

## Why?
Returns normalized parameters and url according to the rest-api convention and saving a single request contract for [axios](https://github.com/axios/axios)

## Install

```bash
$ npm install vue-rexios
```

> **Note:** This project is compatible with node v10+

## Usage

### `GET`
```js
const axios = require('axios');
const rexios = require('rexios');

const method = 'get';
const baseURL = 'v2/api/user/';
const params = {
  id: 123, 
  article: 1,
};

const { args } = rexios({
  method,
  baseURL,
  params
});

// args => ['v2/api/user/123/?article=1']

axios[method](...args).then(response => {
  console.log(response);
});
```

### `POST`
```js
const axios = require('axios');
const rexios = require('rexios');

const method = 'post';
const baseURL = 'v2/api/user/';
const params = {
  id: 123, 
  article: 1,
};

const { args } = rexios({
  method,
  baseURL,
  params
});

// args => ['v2/api/user/', {id: 123, article: 1}]

axios[method](...args).then(response => {
  console.log(response);
});
```

### `PUT`
```js
const axios = require('axios');
const rexios = require('rexios');

const method = 'put';
const baseURL = 'v2/api/user/';
const params = {
  id: 123, 
  article: 1,
};

const { args } = rexios({
  method,
  baseURL,
  params
});

// args => ['v2/api/user/123/', {id: 123, article: 1}]

axios[method](...args).then(response => {
  console.log(response);
});
```

### `DELETE`
```js
const axios = require('axios');
const rexios = require('rexios');

const method = 'put';
const baseURL = 'v2/api/user/';
const params = {
  id: 123, 
  article: 1,
};

const { args } = rexios({
  method,
  baseURL,
  params
});

// args => ['v2/api/user/123/']

axios[method](...args).then(response => {
  console.log(response);
});
```
