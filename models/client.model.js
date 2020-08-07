const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ClientSchema = new Schema({
    code: {
        type: Number,
        required: true
    },
    name: {
        type: String, 
        required: true, max: 100
    },
});
// Exportar o modelo
module.exports = mongoose.model('client', ClientSchema);