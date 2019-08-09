const Guitarists = [
    {   
        Name: 'Jimi Hendrix: ',
        Pedals: [{ 
            Name: 'is famous for using a Wah pedal',
            Price: 200,
            Analog: true
        }],
        Image: '/hendrix.png',
        Show: '/HendrixPedal.png'
    },
    {
        Name: 'Jimmy Page: ',
        Pedals: [{ 
            Name: 'is famous for using a Phaser pedal',
            Price: 80,
            Analog: true
        }],
        Image: '/jimmyPage.jpg',
        Show: '/Phaser.jpg'
    },
    {
        Name: 'Carlos Santana: ',
        Pedals: [{ 
            Name: 'is famous for using a Fuzz pedal',
            Price: 80,
            Analog: true
        }],
        Image: '/carlos.jpg',
        Show: '/bigmuff.jpg'
    }
]

module.exports = Guitarists;

