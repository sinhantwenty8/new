const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

let database;

const connectToDatabase = async function(){
    const client = await MongoClient.connect('mongodb://localhost:27017')
    database = client.db('online-shop')
}

const getDB = function(){
    if(!database){
        throw new Error()
    }

    return database
}

module.exports ={
    getDB,
    connectToDatabase
}