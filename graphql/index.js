const { request } = require("express");
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queryType = require('./queries/user.queries').queryType;
const mutation = require('./mutations/mutations.index');


exports.userSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})
