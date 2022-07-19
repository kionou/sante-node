const express = require('express');
const app = express();

app.use(express.static('public'))
app.set('view engine','ejs' )

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/connexion',(req,res) =>{
    res.render('connexion')
})

app.get('/inscription',(req,res) =>{
    res.render('inscription')
})


app.get('/monde',(req,res) =>{
    res.render('monde')
})

app.listen(process.env.PORT || 8080,()=>{
    console.log('connecter au port  8080');
});
