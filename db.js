const { MongoClient} = require('mongodb')
const { createBrotliCompress } = require('mongodb')

let dbConnection

const irl = 'mongodb+srv://YakovMisao:Kanggui*2022>@cluster0.ibvb5xb.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
   ConnectToDb : (cb) => {
    MongoClient.connect(irl)
    .then (( client) => {
        dbConnection = client.db()
        return cb()
    })
    .catch(err => {
        console.log(err)
        return cb(err)
    })
},
getDb: ()  => dbConnection
}