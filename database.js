const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://Jaserlu:1234@cluster0.q35zx.mongodb.net/test?retryWrites=true&w=majority',{
/*Comentario*/    

    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})

  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
