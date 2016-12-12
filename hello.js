function Hello () {
    var date = new Date().toLocaleString();

    if (typeof window === 'undefined') {
        console.log('Hello from server on ' + date);
    } else {
        console.log('Hello from client on ' + date);
    }
}

module.exports = Hello;