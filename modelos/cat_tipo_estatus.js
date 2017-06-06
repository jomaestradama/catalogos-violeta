var mongoose = require('mongoose');

module.exports = mongoose.model('Cat_tipo_estatus', {
	IdTipoEstatus: Number,
	DesTipoEstatus: String
},'cat_tipo_estatus');