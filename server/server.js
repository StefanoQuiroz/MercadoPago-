require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales
mercadopago.configure({
     
    access_token: 'APP_USR-6144352613999705-091915-792c057ca3243f1576db188fce03b4fa-826916951'
});

//Middleware parser reemplazar√° a body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.post("/api/checkout", (req, res) => {
    //res.send('<h1>Checkout</h1>');
    // Crea un objeto de preferencia
    //Orden de compra que vamos enviarle a mercado pago
    let preference = {
        items: [
        {
            title: req.body.name,
            unit_price: parseFloat(req.body.price),
            quantity: 1,
        }
        ]
    };
    
    mercadopago.preferences.create(preference)
    .then((response) => {
    // Este valor reemplazar√° el string "<%= global.id %>" en tu HTML
    //    global.id = response.body.id;
    //Respuesta del servidor
        //console.log(response.body);
        //res.send("checkout - test");
        //redirecciona al checkout de mercado pago!
        res.redirect(response.body.init_point)
    }).catch((error) => console.log(error));
})

app.listen(PORT, ()=>{
    console.log(`1 : Server lock and loading at PORT: ${PORT}`);
})

