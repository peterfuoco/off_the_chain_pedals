//Dependencies
const express     = require ( 'express' );
const guitarists    = express.Router();

//get access to the Guitarist model
const Guitarist     = require ( '../models/guitarist' );

guitarists.get ( '/seed/Guitarists' , ( req , res ) => {
    Guitarist.find( ( err, guitarists ) => {
      res.send ( guitarists );
    });
  });
  
// See JSON Route
guitarists.get ( '/json' , ( req , res ) => {
    Guitarist.find( ( err, guitarists ) => {
      res.send ( guitarists );
    });
  });


// INDEX
guitarists.get('/', (req, res) => {
        res.render('pro_pedals/index.ejs')
});

// const guitaristSeeds = require ( '../models/seed.js');
// guitarists.get ( './models/seed/Guitarists' , ( req, res ) => {
//   Guitarist.insertMany ( guitaristSeeds, ( err , guitarists ) =>{
//     if (err) { console.log ( err ); } else {
//      res.send (guitarists );
//     }
//   });
// });



module.exports = guitarists;