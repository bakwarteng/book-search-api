const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bakwarteng:Pathology!0@cluster0.t6cnd2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' || 'mongodb://127.0.0.1:27017/googlebooks');
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
