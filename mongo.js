const { MongoClient } = require('mongodb');

const uri = 
    "mongodb+srv://database_user:iuGBR83GFk3eGGLY@firstcluster.ynxjxrm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

client.connect((_) => {
  const collection = client.db("test").collection("devices");
  collection
    .findOne({greeting: 'Hello Mongo'})
    .then((document) => console.log(document.greeting));
});