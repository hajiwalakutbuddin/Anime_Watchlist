const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

//Express
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Anime_watchlist")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

//schema and model 
const animeSchema = new mongoose.Schema({ name: String });
const Anime = mongoose.model("Anime_names", animeSchema);

//Endpoints
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home',params)
})
app.get('/about',(req,res)=>{
    const params = {}
    res.status(200).render('about',params)
})

//add anime
    app.post("/add",async (req, res) => {
        const {name} = req.body;
        if (name) await Anime.create({ name });
        res.redirect("/watched");
    });

//delete anime
app.post("/delete", async (req, res) => {
    const { name } = req.body;
    await Anime.deleteOne({ name });
    res.redirect("/watched");
});
// Watched list
  app.get("/watched", async (req, res) => {
    const animeList = await Anime.find(); //  Fetch all anime from the database
    res.render("watched", { animeList }); //  Render 'watched.pug' and pass animeList data
});

//Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});