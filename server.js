#!/bin/env node
var express = require('express'),
    routes = require('./routes'),
    fs = require('fs');

var PartyApp = function() {
    var self = this;
   
    self.setupVariables = function() {
        self.ipaddress = process.env.OPENSHIFT_INTERNAL_IP;
        self.port      = process.env.OPENSHIFT_INTERNAL_PORT || 9000;
        if (typeof self.ipaddress === "undefined") {
            console.warn('No OPENSHIFT_INTERNAL_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };
    self.cache_get = function(key) { 
        return self.zcache[key]; 
    };
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };
    self.setupTerminationHandlers = function(){
        process.on('exit', function() { self.terminator(); });
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };
    self.initializeServer = function() {
        self.app = module.exports = express();
        self.app.set('views', __dirname + '/views');
        self.app.set('view engine', 'jade');
        self.app.use(self.app.router);
        self.app.use(express.bodyParser());
        self.app.use(express.methodOverride());
        self.app.use(express.static(__dirname + '/public'));
        self.app.use(express.favicon());
    };
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();
        self.initializeServer();
    };
    self.start = function() {
        var party = require("./lib/party")(self.app);
        self.app.get('/', routes.index);
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Party %s:%d', Date(Date.now()), self.ipaddress, self.port);
        });
    };
}; 

var party = new PartyApp();
    party.initialize();
    party.start()