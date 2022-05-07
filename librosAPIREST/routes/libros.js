var express = require('express');
var router = express.Router();
//simular bd
var tablaLibros={'id':1, 'titulo':'el perfume', 'autor':'Patrik Sûskind'};
var tablaLibros2=[
  {'id':1, 'titulo':'el perfume', 'autor':'Patrik Sûskind'},
  {'id':2, 'titulo':'el hobbit', 'autor':'Tolkien'},
  {'id':3, 'titulo':'la biblia', 'autor':'Apostoles'}
];
                

router.get('/', function(req, res, next) {
  res.status(200).json(tablaLibros2);

});
router.get('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);
} );

router.post('/:idLibro', (req,res,next)=>{
  res.status(400).json({'error':'Operacion no permitida'});
});

router.post('/', (req, res, next)=>{
  console.log(req.body);
  var libro={
    'id':tablaLibros2[tablaLibros2.length-1]['id']+1,
    'titulo':req.body.titulo,
    'autor':req.body.autor
  };
  tablaLibros2.push(libro);
  res.status(200).json(tablaLibros2[tablaLibros2.length-1]);
  // insert en base de datos del objeto libro
  // la respues de BD regresarla al cliente 
});

router.patch('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro-1;
  tablaLibros2[id]['titulo']=req.body.titulo;
  tablaLibros2[id]['autor']=req.body.autor;
  res.status(200).json({'mensaje':'Actualizado'});
});

module.exports = router;
