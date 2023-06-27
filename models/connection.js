const mongoose = require ('mongoose')

const connectionString = 'mongodb+srv://admin:mongodb@ncluster.qj6mlhs.mongodb.net/ndatabase'

mongoose.connect (connectionString,
    {
    connectTimeoutMS: 2000
    })
.then (() => console.log("Database CONNECTED !"))
.catch (error => console.error(error))