const mongoose = require('mongoose');

// MongoDB Connection
const connectMongoDB = async (connectionString = 'mongodb://localhost/my-app') => {
    try {
        const db = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
        return db;
    } catch (err) {
        console.error(err);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = { connectMongoDB };
