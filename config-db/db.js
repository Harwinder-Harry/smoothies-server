const mongoose = require('mongoose');

const DB_URI ='mongodb+srv://harwinderkaur:harwinderDB123@cluster0.ongfb9h.mongodb.net/smoothie-data';

const connectDB = async() =>
{
    try
    {
        await mongoose.connect(DB_URI);
        console.log('Database connected')
    }
    catch(error)
    {
        console.log('Error while connecting' + error.message);
    }
};

module.exports = connectDB;