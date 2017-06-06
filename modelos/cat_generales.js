var mongoose = require('mongoose');

module.exports = mongoose.model('cat_generales', {
	IdGeneral: Number,
    IdTipoGeneral: Number,
	DesGeneral: String
},'cat_generales');