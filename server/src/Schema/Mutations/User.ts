import { UserType } from '../TypeDefs/User';
import { GraphQLID, GraphQLString } from 'graphql';
import { Users } from '../../Entities/Users';
import { MessageType } from '../TypeDefs/Messages';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        await Users.insert({ name, username, password });
        return args;
    },
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword } = args;
        const user = await Users.findOne({ username });

        if (!user) {
            throw new Error("Username doesn't exist");
        }
        const userPassword = user?.password;

        if (oldPassword === userPassword) {
            await Users.update({ username }, { password: newPassword });

            return { successful: true, message: 'Password changed' };
        } else {
            throw new Error('Passwords do not match!');
        }
    },
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(id);

        return { successful: true, message: 'User deleted' };
    },
};
