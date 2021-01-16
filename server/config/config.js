// ********
// Puerto
// ********

process.env.PORT = process.env.PORT || 3000;

// ********
// Entorno
// ********

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ********
// BD
// ********

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe'
} else {
    urlBD = 'mongodb://ninfan:MEreDIthGRey12_@cluster0-shard-00-00.brxyf.mongodb.net:27017,cluster0-shard-00-01.brxyf.mongodb.net:27017,cluster0-shard-00-02.brxyf.mongodb.net:27017/test?replicaSet=atlas-b8vxba-shard-0&ssl=true&authSource=admin'
}


process.env.URLDB = urlBD;