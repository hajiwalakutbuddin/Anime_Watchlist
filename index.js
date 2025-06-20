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

// export MONGODB_URI="mongodb://localhost:27017/Anime_watchlist"
// node index.js "use this in your terminal to run the server on local machine"
// mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

//schema and model for watched.pug
const animeSchema = new mongoose.Schema({ name: String, favorite: { type: Number, default: 0} });
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
app.post("/comments", async (req, res) => {
    const { comment } = req.body;
    if (comment && comment.trim() !== "") {
        await Comment.create({ comment });
    }
    res.redirect("/about");
});

//add anime
    app.post("/add",async (req, res) => {
        const {name} = req.body;
        if (name) await Anime.create({ name });
        res.redirect('/?added=1');
    });

//delete anime
app.post("/delete", async (req, res) => {
    const { name } = req.body;
    await Anime.deleteOne({ name });
    res.redirect("/watched");
});
// Watched list
app.get("/watched", async (req, res) => {
    const { letter, favorite } = req.query;
    let animeList;

    if (typeof favorite !== "undefined") {
        animeList = await Anime.find({ favorite: parseInt(favorite, 10) });
    } else if (letter === 'special') {
        animeList = await Anime.find({ name: { $regex: '^[^a-zA-Z]', $options: 'i' } });
    } else if (letter) {
        animeList = await Anime.find({ name: new RegExp('^' + letter, 'i') });
    } else {
        animeList = await Anime.find();
    }
    res.render("watched", { animeList, letter, favorite });
});
//Favorites
app.post('/favorite/:id', async (req, res) => {
    const { id } = req.params;
    const fav = parseInt(req.body.fav, 10);
    const letter = req.body.letter;
    await Anime.findByIdAndUpdate(id, { favorite: fav });
    if (letter) {
        res.redirect('/watched?letter=' + letter);
    } else {
        res.redirect('/watched');
    }
});

//Mongoose schema for comment-box
const commentSchema = new mongoose.Schema({
    comment: String,
    createdAt: { type: Date, default: Date.now }
});
const Comment = mongoose.model("Comment", commentSchema);

//Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});