const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/user.types');
const UserModel = require('../../models/user.model');


exports.add = {
    type: UserType.userType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        const uModel = new UserModel(params);
        const newUser = uModel.save();
        if(!newUser)
        {
            throw new Error('Error');
        }
        return newUser;
    }
}