import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//     res.send('Server is ready');
// });

// get a list of 5 aesthetics
app.get('/aesthetics', (req, res)=>{
    const aesthetics = [
        {
            "id": 1,
            "title": "Dark Academia",
            "content": "Late nights in Gothic libraries, the smell of old leather-bound books, ink-stained fingers, and classical music playing softly in the background."
        },
        {
            "id": 2,
            "title": "Cottagecore",
            "content": "Sun-drenched meadows, baking fresh sourdough bread in a rustic kitchen, picking wild berries, and wearing flowy linen clothing."
        },
        {
            "id": 3,
            "title": "Cyberpunk",
            "content": "Neon-lit city streets drenched in midnight rain, towering skyscrapers, holographic advertisements, and high-tech underground hacker dens."
        },
        {
            "id": 4,
            "title": "Vaporwave",
            "content": "Glitched 90s computer graphics, pastel pink and purple sunsets, marble Greek statues, and slowed-down lo-fi electronic tracks."
        },
        {
            "id": 5,
            "title": "Minimalism",
            "content": "Clean white spaces, geometric simplicity, neutral tones, functional furniture, and a focus on intentional living with fewer belongings."
        }
    ];

    res.send(aesthetics);
})

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
});