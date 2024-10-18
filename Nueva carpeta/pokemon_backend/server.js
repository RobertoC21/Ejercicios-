const express = require('express'); //importacion express!! 
const app = express();
const PORT = process.env.PORT || 3000; // definimos nuestro puerto!


//pasear JSON
app.use(express.json());


//PRUEBA 
app.get('/',(req,res)=> {
    res.send('bienvenido prueba');

});

//iniciar server
app.listen(PORT, () => {
    console.log('server funcionando ${PORT}');
});