// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const bodyParser      = require ( 'body-parser' );

// PORT
const PORT = process.env.PORT || 3000;

// DATABASE 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pedals'

// CONNECT TO DATABASE
mongoose.connect( MONGODB_URI );

// SET THE CONNECTION 
const db = mongoose.connection;

// ERROR MESSAGE
db.on( 'error' , console.error.bind( console , 'connection error: ' ));
db.once ( 'open' , function () {
  console.log( 'DB: Connected' );
});

//  CONTROLLERS
const pedalsController = require ( './controllers/pedals' );
const guitaristController = require ( './controllers/guitarists' );

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use( bodyParser.json() );

// USE CONTROLLER WHEN /PEDALS VISITED 
app.use("/pedals", pedalsController );
app.use("/pro_pedals", guitaristController);



// END

// const pedalBoard = require('./models/pedals.js');

// // INDEX
// app.get('/pedals', (req, res) => {
//         pedalBoard.find({}, (error, allPedals) => {
//             res.render('index.ejs', {
//                 pedals: allPedals
//             });
//         });
//     });
// //NEW
//     app.get('/pedals/new', (req, res) => {
//         res.render('new.ejs')
//     })


// // EDIT 

// app.get('/pedals/:id/edit', (req,res)=> {
//     pedalBoard.findById(req.params.id, (err, editPedal)=> {
//         if (err) {
//             console.log('error')
//         } else {
//             console.log(editPedal)
//             res.render('edit.ejs', {
//                 editedPedal: editPedal
//             })
//         }
//     })
// })

// // CREATE
//     app.post('/pedals', (req, res) => {
//         if (req.body.Analog === 'on') {
//             req.body.Analog = true
//         } else {
//             req.body.Analog = false
//         }
//         pedalBoard.create(req.body, (error, createdGuitarist) => {
//             if (error) {
//                 res.send(error)
//             } else {
//                 res.redirect('/pedals');
//             }
//         });
//     })

// //SHOW
// app.get('/pedals/:id', (req, res) => {
//     pedalBoard.findById(req.params.id, (err, currentPedal)=> {
//         res.render('show.ejs', {
//         thisPedal: currentPedal
//     })
// })
// });

// // UPDATE (SERVER)
// app.put('/pedals/:id', (req, res) => {
//     // if (req.body.readyToEat === 'on') {
//     //     req.body.readyToEat = true;
//     // } else {
//     //     req.body.readyToEat = false;
//     // }
//     // logic to edit fruit using mongoose
//     pedalBoard.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPedal) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.redirect('/pedals');
//         }
//         // res.send(updatedFruit);
//     });
// });



// // DELETE 
// app.delete('/pedals/:id', (req,res) => {
//     pedalBoard.findByIdAndRemove(req.params.id, (err, deletedGuitarist)=> {
//         if (err) {
//             console.log('error')
//         } else {
//             res.redirect('/pedals')
//         }
//     })
// });


// have actual info rendering on index. then have show page to go to individual page for pedal.
// 


mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, ()=> {
    console.log('connected to mongo db')
});

app.listen(PORT, ()=> console.log('app is running'));
