'use strict'
const path = require('path')
const fs = require('fs');
const ERROR_CODE = 400
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

// import thr json file
const file = fs.readFileSync(process.cwd()+'./test.json', 'utf8');
console.log(file);
// read and store in obj


function root(request, response) {
    response
    .status(HTTP_OK)
    .contentType(CONTENT_TYPE_HTML)
    .send('<h1> Your Playlist is Ready  </h1>')
}

function tracks (request, response) {
    response.status(HTTP_OK)
    response.contentType(CONTENT_TYPE_HTML)
    response.send('<h1>Your playlist title of the track is '+ request.params.title  + ' </h1>' + '<p>id: ' + request.params.id + '</p>')
}

function post (request, response) {
    if(!request.body.id || !request.body.title)
    {
        response.status(ERROR_CODE)
        response.json
        ({
            ERROR_CODE: ERROR_CODE,
            msg: 'You must supply id and title inside the body'
        });
    }
}

