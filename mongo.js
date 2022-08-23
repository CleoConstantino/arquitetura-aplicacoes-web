
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 
    "mongodb+srv://usuario_database:YNsbORZulGo54Ruc@firstcluster.6q2t1mj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

client.connect(err => {
    if(err) {
        console.log(err);
        return;
    }
  const collection = client.db("test").collection("devices");
  const result = collection.insertOne({ greeting: 'Hello Mongo'})
  console.log(result);
});