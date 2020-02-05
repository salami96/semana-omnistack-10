import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.111:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function disconnect() {
    if (socket.connected) socket.disconnect();
}
function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    } 

    socket.connect();
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}