var mongoose = require('mongoose');

module.exports = mongoose.model('Cat_estatus', {
	IdEstatus: Number,
	DeEstatus: String
},'cat_estatus');

