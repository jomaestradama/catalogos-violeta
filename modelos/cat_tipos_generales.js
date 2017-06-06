var mongoose = require('mongoose');

module.exports = mongoose.model('Cat_tipos_generales', {
	IdTipoGeneral: Number,
	DesTipoGeneral: String
},'cat_tipos_generales');

