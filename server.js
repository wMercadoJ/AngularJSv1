var ROOT = process.cwd();
var path= require("path"), http = require("http"), fs = require("fs");
var express = require("express");
var logging = require("log4js");
var logger = logging.getLogger('angoose');

logger.setLevel(logging.levels.DEBUG);

var app = express();
app.configure(function() {
    app.set('port', 8080);
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({secret: '1234567890QWERTY'}));
    app.use(app.router);
    app.use(function(err, req, res, next){
        console.log("In default error handling", err)
        res.send(500, 'Unhandled error: '+ err);
    });
    app.use(express.methodOverride());
    app.use(express.static( './public'));
    app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
});

var options = {
    extensions:['angoose-users',   'angoose-ui', 'angoose-authorization'],
    'module-dirs':  './server',
    logging:'TRACE',
    clientFile:'angoose-client-generated.tmp',
    mongo_opts:'localhost:27017/comercial_srvj',
    'angoose-authorization':{
        'model-name':'Role'
    },
    "angoose-ui-template-dir":"./ui-templates"
};    
require("angoose").init(app, options);

// app.get("/todomvc", function(req, res){
    // res.writeHead(200, { "Content-Type" : "text/html" });
    // fs.createReadStream("./public/todomvc.html").pipe(res); 
// });

function application(req, res){
    res.writeHead(200, { "Content-Type" : "text/html" });
    fs.createReadStream("./public/inicio.html").pipe(res);
}
app.get("/todomvc", application);
app.get("/deform/*", application);
app.get("/angoose/*", application);
app.get("/login", application);
app.get("/home", application);
app.get("/logout", application);

app.get("/planillaDiaAl", application);
app.get("/nuevaPlanillaAl", application);
app.get("/reporteProductoGral", application);
app.get("/reporteProductoExistAl", application);
app.get("/listaEmpleado", application);
app.get("/nuevoEmpleado", application);
app.get("/listaUser", application);
app.get("/nuevoUser", application);
app.get("/planillaSalPendA", application);
app.get("/planillaSalA", application);
app.get("/planillaLiq", application);
app.get("/reporteLiqFecha", application);
app.get("/reporteLiqEmp", application);
app.get("/reporteSalProdF", application);
app.get("/reporteSalProdE", application);
app.get("/listaEmpAd", application);
app.get("/listaCarro", application);
app.get("/formSalidaAl", application);

require('./public/controllers/routes.js')(app);



http.createServer(app).listen(8080);

process.on('uncaughtException',function(e) {
    console.log(" Unhandled Error caught in server.js -----> : ",e,  e.stack);
});
 