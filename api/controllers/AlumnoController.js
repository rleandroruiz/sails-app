/**
 * AlumnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var cont = 0;

module.exports = {
  list: async function (req, res) {

    var alumnos = await Alumno.find({

    });

    res.view( 'pages/test', { a: alumnos} );

  }


};

