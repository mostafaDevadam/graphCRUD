const { GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('../types/user.types');
const UserModel = require('../../models/user.model');

exports.remove = {
    type: UserType.userType,
    args: {
        id: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(root, params) {
        const removeduser = UserModel.findByIdAndRemove(params.id).exec();
        if(!removeduser){
            throw new Error('Error');
        }
        return removeduser;

    }
    
}