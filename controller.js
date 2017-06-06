var Persona = require('./modelos/personita');
var Cattg= require('./modelos/cat_tipos_generales');

var Caties = require('./modelos/cat_tipo_estatus');
var Cagene = require('./modelos/cat_generales');
var Caesta= require('./modelos/cat_estatus');
//-----------------------------Catalogos Tipos Generales READ
exports.getCatTiposGenerales= function(req,res){
    Cattg.find(function(err,catipge){
        if(err){
			  res.send(err)
		}else{
			res.json(catipge); 
		}
		         
                
        
    });
};

//---POST CREATE
exports.insertCatige= function(req,res){
	var catige= new Cattg(req.body);
	catige.save(function(err,createdCatigeObject){
		if(err){
			res.send(err);
		}

		res.send(createdCatigeObject);
	});
};

//--PUT UPDATE
exports.updateCatige= function(req,res,next){
	Cattg.findById(req.params.id,function(err,catige){
		if(err){
			res.status(500).send(err);
		}else{
			catige.id = req.body.id || catige.id;
        	catige.description = req.body.description || catige.description;

			catige.save(function(err,catige){
				if(err){
					res.status(500).send(err);
				}
				res.send(catige);
			});
		}
	})
}
;
exports.deleteCatige= function(req,res){

	let catigeId =req.body._id;
	console.log(catigeId);
	Cattg.findByIdAndRemove(catigeId,function(err,deleted){
		if(err){
			res.status(500).send(err);
		}
		if(!deleted){
			res.status(404).send(err);
		}
		res.send(deleted);
	
	

	});
}

//-----------------------------Catalogos Tipos Estatus READ
exports.getCatalogoTipoEstatus = function(req,res){
    Caties.find(function(err,caties){
        if(err)
            res.send(err)
                res.json(caties); 
        
    });
};


//---POST CREATE
exports.insertCaties= function(req,res){
	var catie= new Caties(req.body);
	catie.save(function(err,createdCatieObject){
		if(err){
			res.send(err);
		}

		res.send(createdCatieObject);
	});
}

;

//--PUT UPDATE
exports.updateCaties= function(req,res){
	Caties.findById(req.params.id,function(err,catie){
		if(err){
			res.status(500).send(err);
		}else{
			catie.id = req.body.id || catie.id;
        	catie.description = req.body.description || catie.description;

			catie.save(function(err,catie){
				if(err){
					res.status(500).send(err);
				}
				res.send(catie);
			});
		}
	})
}
;

//-----------------------------Catalogos Tipos Estatus READ
exports.dameCag= function (req,res){
	Cagene.find(function(error,cag){
		if(error){
			res.send(error);
		}
		res.send(cag);
	});
};
exports.getCagene= function(req,res){
    Cagene.find(function(err,cagen){
        if(err){
			res.send(err);
		}else{
			  res.json(cagen); 
		}
            
              
        
    });
};

//---POST CREATE
exports.insertCagene= function(req,res){
	var cagene= new Caties(req.body);
	cagene.save(function(err,createdCageneObject){
		if(err){
			res.send(err);
		}

		res.send(createdCageneObject);
	});
}

;
//-----------------------------Catalogos Estatus READ
exports.getCaesta = function(req,res){
    Caesta.find(function(err,caesta){
        if(err)
            res.send(err)
                res.json(caesta); 
        
    });
};

//---POST CREATE
exports.insertCaesta= function(req,res){
	var caesta= new Caesta(req.body);
	caesta.save(function(err,createdCaestaObject){
		if(err){
			res.send(err);
		}

		res.send(createdCaestaObject);
	});
}



;



// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
	Persona.find(
		function(err, persona) {
			if (err)
				res.send(err)
					res.json(persona); // devuelve todas las Personas en JSON		
				}
			);
};

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

		// Creo el objeto Persona
		Persona.create(
			{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}, 
			function(err, persona) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});

	}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}}, 
					function(err, persona) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
		});
}