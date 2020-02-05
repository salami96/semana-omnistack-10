const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const { setupWebsocket } = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect("mongodb+srv://salami1996:salami1996@cluster0-utam0.gcp.mongodb.net/devradar?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:3000'} ));
app.use(express.json());
app.use(routes);

server.listen(3333);
