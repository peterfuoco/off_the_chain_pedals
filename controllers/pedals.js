// DEPENDENCIES
const express = require('express')
const router = express.Router()

// MODELS
const Pedal = require('./../models/pedals')


// See JSON Route
router.get ( '/json' , ( req , res ) => {
    Pedal.find( ( err, router ) => {
      res.send ( router );
    });
  });

// INDEX
router.get('/', (req, res) => {
    Pedal.find({}, (error, allPedals) => {
        res.render('user_pedals/index.ejs', {
            pedals: allPedals
        });
    });
});

//NEW
router.get('/new', (req, res) => {
    res.render('user_pedals/new.ejs')
})


// EDIT 
router.get('/:id/edit', (req,res)=> {
Pedal.findById(req.params.id, (err, editPedal)=> {
    if (err) {
        console.log('error')
    } else {
        console.log(editPedal)
        res.render('user_pedals/edit.ejs', {
            editedPedal: editPedal
        })
    }
})
});

// CREATE
router.post('/', (req, res) => {
    if (req.body.Analog === 'on') {
        req.body.Analog = true;
    } else {
        req.body.Analog = false;
    }
    Pedal.create(req.body, (error, createdGuitarist) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect('/pedals');
        }
    });
})

//SHOW
router.get('/:id', (req, res) => {
Pedal.findById(req.params.id, (err, currentPedal)=> {
    res.render('user_pedals/show.ejs', {
    thisPedal: currentPedal
})
})
});

// UPDATE (SERVER)
router.put('/:id', (req, res) => {
Pedal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPedal) => {
    if (err) {
        console.log(err)
    } else {
        res.redirect('/pedals');
    }
});
});



// DELETE 
router.delete('/:id', (req,res) => {
Pedal.findByIdAndRemove(req.params.id, (err, deletedGuitarist)=> {
    if (err) {
        console.log('error')
    } else {
        res.redirect('/pedals')
    }
})
});


module.exports = router;