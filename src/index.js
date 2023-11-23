const express= require('express');
const morgan= require('morgan');
const exphbs = require('express-handlebars');
const path= require('path');
const flash= require('connect-flash');
const session = require('express-session');
const sessmysql = require('express-mysql-session');
const { database } = require('./keys');
const cors = require('cors');

const app=express();
//Configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views' ));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars'),
}));
app.set('view engine','.hbs');

//peticiones
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(flash());
app.use(session({
    secret:'mysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new sessmysql(database),
}));


//variables globales
app.use((req,res,next)=>{
    app.locals.msncreate=req.flash('Creado');
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

// rutas de "Creación de Tienda" //
app.use('/casa',require('./routes/home'));
app.use('/pedir',require('./routes/pedidos'));
app.use('/product',require('./routes/productos'));
app.use('/report',require('./routes/reportes'));
app.use('/rols',require('./routes/roles'));
app.use('/user',require('./routes/usuarios'));

/* Rutas del Proyecto uno
app.use('/ini',require('./routes/galery/inicio'));
app.use('/artis',require('./routes/galery/artistas'));
app.use('/cate',require('./routes/galery/categoria'));
app.use('/clien',require('./routes/galery/clientes'));
app.use('/crear',require('./routes/galery/crearcuenta'));
app.use('/decora',require('./routes/galery/decoracion'));
app.use('/ent',require('./routes/galery/entrega'));
app.use('/esti',require('./routes/galery/estilos'));
app.use('/eve',require('./routes/galery/evento'));
app.use('/iniciar',require('./routes/galery/iniciarsesion'));
app.use('/tien',require('./routes/galery/tienda'));
app.use('/rega',require('./routes/galery/regalos'));
app.use('/varie',require('./routes/galery/variedades'));*/

// Rutas del Trabajo1 corte 2 - Liquidos //
app.use('/liqgaseosa',require('./routes/gaseosarr/gaseosados'));
app.use('/liqagua',require('./routes/aguar/aguados'));
app.use('/liqjugo',require('./routes/jugor/jugodos'));

// Rutas de Simulación corte 3 - Café Castillo //
app.use('/cafecastillo',require('./routes/castillorr/castillo'));
app.use('/ini',require('./routes/castillorr/inicastillo'));

//De un trabajo de recordatorio - express con Postman //
app.use('/pedididi',require('./routes/pedidor/pedidodos'));

/* Rutas de Postman - React - Servicios API - Proyecto dos */
app.use('/adobebe',require('./routes/adober/adobone'));

/* Rutas de Postman - React - Servicios API - Parcial uno */
app.use('/aspf',require('./routes/aspfr/aspfone'));

/* Ruta examen
app.use('/chiquifacebook',require('./routes/minifar/minifaar'));*/

//De la carpeta public
app.unsubscribe(express.static(path.join(__dirname,'public')));

//Inicia el server
app.listen(app.get('port'),()=>{
    console.log('Puerto subido por el N°',app.get('port'));
});

app.use('*/css',express.static('public/css'));