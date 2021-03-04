const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/public')));

const path = require('path');

app.engine('handlebars', expbs ({ defaultLayout: "main", partialsDir: __dirname + './public/views'}));
app.set('view engine', 'handlebars');

// add the filepath to our controller where the / is
const HTMLrouter = require("./routes/html-routes");
// app.use(router);
HTMLrouter(app);

app.listen(PORT, () => {
    console.log('Server is up at PORT ' + PORT);
});