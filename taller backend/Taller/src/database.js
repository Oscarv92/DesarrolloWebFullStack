const mongoose = require('mongoose');
URL = ('mongodb://localhost/bdMascotas');

mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(db => console.log('Base de datos conectada: ', db.connection.name))
    .catch(error => console.log(error))

module.exports = mongoose