const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 
    "mongodb+srv://usuario_database:YNsbORZulGo54Ruc@firstcluster.6q2t1mj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

var collection;

module.exports = {
    connect: () => {
        client.connect(err => {
            if(err) {
                console.log(err);
                return;
            }   
            const collection = client.db("test").collection("devices");
        });
    },
    collection: () => {
        return collection;
    },     
};