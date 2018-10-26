const https = require('https');
const fs = require('fs');
let AWS = require('aws-sdk');

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
	  host: 'https://search-dsabot-temporary-qarglkn43xo3rf6qbdwh3gk24e.us-east-1.es.amazonaws.com',
	  //connectionClass: require('http-aws-es')
});
module.exports = client;
