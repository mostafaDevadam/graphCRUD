const { GraphQLID, GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');


// User Type
exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            }
        }

    }
});






