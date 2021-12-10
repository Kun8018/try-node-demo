var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/mongoosesample'

mongoose.connect(
    DB_URL,
    { useNewUrlParser: true,
    useUnifiedTopology: true })

mongoose.connection.on('connected',function(){
    console.log('mongoose connection open to ')
})

module.exports = mongoose;