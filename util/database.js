const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongodbConnect = (callback) => {
  MongoClient.connect('mongodb+srv://nayakpriya612:drLWnLL1gUHz0qdD@cluster0.omctxzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then((client) => {
      console.log("Connected successfully!")
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = mongodbConnect;