//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de Datos
let urlDB;

//Vencimiento Token
process.env.CADUCIDAD_TOKEN = '48h';

//SEED
process.env.SEED = process.env.SEED || 'este-es-el-see-desarrollo';

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//GOO LE CLIENT ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '805146371618-rn6i7a37ll6rfp7aavoj5sga4r75pql4.apps.googleusercontent.com';