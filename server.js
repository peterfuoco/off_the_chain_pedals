const express = require('express');
const app = express();
const mongoose = require('mongoose')
 const methodOverride = require('method-override');

 //Middleware
 app.use(express.urlencoded({extended: false}))
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pedals'
const PORT = process.env.PORT || 3000;

// app.get('/', (req,res) => res.render ('show.ejs'));

// const Guitarist = require('./models/pedals.js')
const Guitarist = require('./models/pedals.js')

app.get('/pedals', (req, res) => {
        Guitarist.find({}, (error, allPedals) => {
            res.render('index.ejs', {
                pedals: allPedals
            });
        });
    });

    app.get('/pedals/new', (req, res) => {
        res.render('new.ejs')
    })

    app.post('/pedals', (req, res) => {
        if (req.body.Analog === 'on') {
            req.body.Analog = true
        } else {
            req.body.Analog = false
        }
        Guitarist.create(req.body, (error, createdGuitarist) => {
            if (error) {
                res.send(error)
            } else {
                res.redirect('/pedals');
            }
        });
    })
//SHOW
app.get('/pedals/:id', (req, res) => {
    const currentPedal = Guitarist[req.params.id]
    res.render('show.ejs', {
        thisPedal: currentPedal
    })
}
)

// have actual info rendering on index. then have show page to go to individual page for pedal.
// 


mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, ()=> {
    console.log('connected to mongo db')
});

app.listen(PORT, ()=> console.log('app is running'));
