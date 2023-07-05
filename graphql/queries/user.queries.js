const { request } = require('express');
const { GraphQLObjectType, GraphQLList } = require('graphql');
const UserModel = require('../../models/user.model');
const userType = require('../types/user.types').userType;


// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users:{
                type: new GraphQLList(userType),

                resolve: function() {
                    const users = UserModel.find().exec()
                    if(!users) {
                        throw new Error('Error')
                    }

                    return users;
                }
            }

           
        }
        
    }
});