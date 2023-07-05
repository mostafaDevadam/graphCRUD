const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
//const db = mongoose();
const app = express();
const port = process.env.PORT
//

mongoose.connect(`${process.env.DB_URL}`, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('mongoDB is connected');
})
//


//
app.use('*', cors());

const userSchema = require('./graphql/index').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true,
}));



//
app.listen(port, () => {
    console.log('A GraphQL API running at port ' + port);
})







