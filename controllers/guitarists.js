//Dependencies
const express     = require ( 'express' );
const guitarists    = express.Router();

//get access to the Guitarist model
const Guitarist     = require ( '../models/guitarist' );
const seedGuitarist = require('../models/seed')

// guitarists.get ( '/seed/Guitarists' , ( req , res ) => {
//     Guitarist.find( ( err, guitarists ) => {
//       res.send ( guitarists );
//     });
//   });


// See JSON Route
guitarists.get ( '/json' , ( req , res ) => {
    Guitarist.find( ( err, guitarists ) => {
      res.send ( guitarists );
    });
  });


// INDEX
guitarists.get('/', (req, res) => {
        Guitarist.find({}, (err, guitarists) => {
            console.log(guitarists)
            res.render('pro_pedals/index.ejs', {
                allGuitarists: guitarists
        });
        });
});

//SHOW
guitarists.get('/:id', (req, res) => {
    Guitarist.findById(req.params.id, (err, currentPedal)=> {
        console.log(currentPedal)
        console.log('heyo')
        res.render('pro_pedals/show.ejs', {
        Show: currentPedal.Show
    })
    })
    });

// SEED
guitarists.get( '/seed/Guitarists' , ( req, res ) => {
	Guitarist.create( seedGuitarist , ( err, guitarist ) => {
        if ( err ) { console.log( err ); } 
            console.log( "SEED: NEW Guitarists CREATED!" );
            res.redirect( '/pedals' );
      });
});


module.exports = guitarists;