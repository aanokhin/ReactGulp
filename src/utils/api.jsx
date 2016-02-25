var Fetch = require('whatwg-fetch');
var rootURL = 'https://api.imgur.com/3/';
var apiKey = 'bc77623c10d8959';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootURL + url, {
      header: {
          'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json();
    })
  }
}
