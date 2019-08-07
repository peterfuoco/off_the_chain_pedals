// DEPENDENCIES
const express = require('express')
const router = express.Router()

// MODELS
const Pedals = require('./../models/pedals')


// See JSON Route
router.get ( '/json' , ( req , res ) => {
    Pedals.find( ( err, router ) => {
      res.send ( router );
    });
  });


// INDEX
router.get('/pedals', (req, res) => {
    pedalBoard.find({}, (error, allPedals) => {
        res.render('index.ejs', {
            pedals: allPedals
        });
    });
});
//NEW
router.get('/pedals/new', (req, res) => {
    res.render('new.ejs')
})


// EDIT 

router.get('/pedals/:id/edit', (req,res)=> {
pedalBoard.findById(req.params.id, (err, editPedal)=> {
    if (err) {
        console.log('error')
    } else {
        console.log(editPedal)
        res.render('edit.ejs', {
            editedPedal: editPedal
        })
    }
})
})

// CREATE
router.post('/pedals', (req, res) => {
    if (req.body.Analog === 'on') {
        req.body.Analog = true
    } else {
        req.body.Analog = false
    }
    pedalBoard.create(req.body, (error, createdGuitarist) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect('/pedals');
        }
    });
})

//SHOW
router.get('/pedals/:id', (req, res) => {
pedalBoard.findById(req.params.id, (err, currentPedal)=> {
    res.render('show.ejs', {
    thisPedal: currentPedal
})
})
});

// UPDATE (SERVER)
router.put('/pedals/:id', (req, res) => {
// if (req.body.readyToEat === 'on') {
//     req.body.readyToEat = true;
// } else {
//     req.body.readyToEat = false;
// }
// logic to edit fruit using mongoose
pedalBoard.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPedal) => {
    if (err) {
        console.log(err)
    } else {
        res.redirect('/pedals');
    }
    // res.send(updatedFruit);
});
});



// DELETE 
router.delete('/pedals/:id', (req,res) => {
pedalBoard.findByIdAndRemove(req.params.id, (err, deletedGuitarist)=> {
    if (err) {
        console.log('error')
    } else {
        res.redirect('/pedals')
    }
})
});


module.exports = router;