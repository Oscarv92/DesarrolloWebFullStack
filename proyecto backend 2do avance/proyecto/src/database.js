const mongoose = require('mongoose');

URL = ('mongodb+srv://urbantours:urbantours1@bd1.o1ent.mongodb.net/test');

mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('Conexión exitosa a la bd: ', db.connection.name))
    .catch(error => console.log(error))

module.exports = mongoose