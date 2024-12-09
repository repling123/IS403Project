let express = require("express");
let app = express();
let path = require("path");
const port = 5002;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

const knex = require("knex") ({
    client : "pg",
    connection : {
        host : "localhost",
        user : "postgres",
        password : "admin123",
        database : "assignment3",
        port : 5432
    }
});
app.get('/', (req, res) => {
    res.render('index')});


app.get('/login', (req, res) => {
    res.render('login')});

// app.get("/searchPokemon", (req, res) => {
//     //NOTICE query since I am retrieving data from a form using the get method
//     knex.select().from('pokemon').where('description', req.query.searchName.toLowerCase() ).first().then( pokes => {
//         res.render("displayPoke", { pokemon: pokes });
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({err});
//     });
// });

app.listen( port, () => console.log("Start your engines!"));