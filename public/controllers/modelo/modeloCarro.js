var angoose = require("angoose");
var mongoose = angoose.getMongoose();
var Schema = mongoose.Schema;

var carroSchema = {
    placa: {type: String, required: true},
    modelo: {type: String, required: true},
    chofer: {type: String, required: true},
    estado: {type: String, required: true}
};

module.exports = mongoose.model('Carro', carroSchema);
