const mongoose = require('mongoose');
const mysql = require('mysql');

// MongoDB Connection
const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/my-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err);
        // Exit process with failure
        process.exit(1);
    }
};

// MySQL Connection
const connectMySQL = () => {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'my-app'
    });

    db.connect(err => {
        if (err) {
            console.error(err);
            // Exit process with failure
            process.exit(1);
        }
        console.log('MySQL connected...');
    });

    return db;
};

module.exports = { connectMongoDB, connectMySQL };
