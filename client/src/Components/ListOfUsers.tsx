import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../GraphQL/Queries';

interface IUser {
    id: string | undefined;
    name: string | undefined;
    username: string | undefined;
}

const ListOfUsers = () => {
    const { data } = useQuery(GET_ALL_USERS);

    return (
        <div>
            {data &&
                data.getAllUsers.map((user: IUser) => (
                    <p key={user.id}>
                        {user.name} / {user.username}
                    </p>
                ))}
        </div>
    );
};

export default ListOfUsers;
