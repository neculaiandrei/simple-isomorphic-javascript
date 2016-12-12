# simple-isomorphic-javascript
Simple example of isomorphic/universal javascript code. Diving straight into React, Rendr or other framework will get you overwhelmed.
Let's have a moment of silence and enjoy some simple Javascript code working on both client and server.

## What this does? 
It will print `Hello World from {env}` based on the environment it's on (client/server). 

## How it works?
Checking the 'window' object, which it's not available on Node, will display the message.

All mighty isomorphic code is here:

```
function Hello () {
    var date = new Date().toLocaleString();

    if (typeof window === 'undefined') {
        console.log('Hello from server on ' + date);
    } else {
        console.log('Hello from client on ' + date);
    }
}

module.exports = Hello;
```

Of course, we have to browserify this in order to work on client.

## Getting up and running

* Clone this repo from `https://github.com/neculaiandrei/simple-isomorphic-javascript.git`
* Run `npm install` from root directory
* Run `gulp` 
* Run `npm server.js`

## Test code
* Open `localhost:11001`
* Check both browser's console and the console of the running Node server.
  Both have displayed proper messages
* Every client request will display the messages again
