function Hello () {
    var date = new Date().toLocaleString();

    if (typeof window === 'undefined') {
        console.log('Hello World from server on ' + date);
    } else {
        console.log('Hello World from client on ' + date);
    }
}

module.exports = Hello;