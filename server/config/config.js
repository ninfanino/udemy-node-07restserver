// ********
// Puerto
// ********

process.env.PORT = process.env.PORT || 3000;

// ********
// Entorno
// ********

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ********
// Vencimiento token
// ********

process.env.EXPIRES_TOKEN = 60 * 60 * 24 * 30;

// ********
// SEED de autenticación
// ********

process.env.SEED = process.env.SEED || 'seed-desarrollo';

// ********
// BD
// ********

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe'
} else {
    urlBD = `${process.env.MONGO_URI}&ssl=true&authSource=admin`;
}


process.env.URLDB = urlBD;


// ********
// Google client ID
// ********

process.env.CLIENT_ID = process.env.CLIENT_ID || '386017570632-2rt6rgd7k9kurujtv4cuhvt96ctdl1cm.apps.googleusercontent.com';