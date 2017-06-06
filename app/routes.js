var Persona = require('../modelos/personita');

var Controller = require ('../controller');

module.exports = function(app) {

//---------------------------------------------------------------------
    // Devuelve todas las categorias de tipos generales READ
    app.get('/api/categorias', Controller.getCatTiposGenerales);
	//POST CREATE
	app.post('/api/catige', Controller.insertCatige);
	//app.put('/api/catige/:id',Controller.updateCatige);
	app.delete('/api/catige/:_id', Controller.deleteCatige);

	//Devuelve todas las categorias tipos estatus  READ
	app.get('/api/caties', Controller.getCatalogoTipoEstatus);
	
	//POST CREATE
	app.post('/api/cati', Controller.insertCaties);
	//PUT UPDATE
	//app.put('/api/caties/:id',Controller.updateCaties);
	//app.delete('/api/caties/:id',Controller.deleteCaties);



	//Devuelve todos los catalogos Generales
	app.get('/api/cagene',Controller.getCagene);
	app.get('/api/damecag',Controller.dameCag);
	//POST CREATE
	app.post('/api/cagene',Controller.insertCagene);
	//PUT UPDATE
	//app.put('/api/cagene/:id',Controller.updateCagene);
	//app.delete('/api/cagene/:id',Controller.deleteCagene);
	


	//Devuelve todos los catalogos estatus
	app.get('/api/caesta', Controller.getCaesta);
	//POST CREATE
	app.post('/api/caes',Controller.insertCaesta);
	//PUT UPDATE
	//app.put('/api/caesta/:id',Controller.updateCaesta);
	//app.delete('/api/caesta/:id',Controller.deleteCaesta);
	

//----------------------------------------------------------------------------
	// devolver todos los Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	

	

	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	// application 

};
