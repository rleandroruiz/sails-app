/**
 * AlumnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  list: async function (req, res) {

    var alumnos = await Alumno.find({});

    res.view( 'pages/test', { a: alumnos} );

  },



  add: async function (req, res) {

    var param = req.allParams();

    var alumno = {
      nombre: param.nombre,
      apellido: param.apellido,
      dni: param.dni,
      edad: param.edad
    };


    var datos = await Alumno.create(alumno);

    var alumnos = await Alumno.find({dni: alumno.dni});

    res.view( 'pages/test', { a: alumnos} );

  },

  buscar: async function (req,res) {


    var alumnos = await Alumno.find({nombre: req.allParams().nombre});

    res.view( 'pages/test', { a: alumnos} );

  }

};

