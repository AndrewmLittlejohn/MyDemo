const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { connectMongoDB, connectMySQL } = require('./config/connection');

// Create an Express server
const app = express();

// Use CORS middleware
app.use(cors());

// Connect to databases
connectMongoDB();
const db = connectMySQL();

// Dummy GraphQL schema
const schema = {};  // TODO: Define your schema

// Use GraphQL with Express
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,  // Use GraphiQL interface
}));

app.listen(5000, () => console.log('Server running on port 5000'));
