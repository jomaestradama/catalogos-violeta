var mongoose = require('mongoose');

module.exports = mongoose.model('Persona', {
	IdPersona: String,
	NumControl: String,
	Nombre: String,
	ApPaterno: String,
	ApMaterno: String,
	FechaNac: String,
	RFC: String,
	CURP: String,
	RutaFoto: String,
	Sexo:String,
	SobreNombre: String,
	TipoPersona:String,
	FechaReg:String,
	Telefonos:String,
	IdGenTelefono:Number

});