import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../GraphQL/Queries';
import { DELETE_USER } from '../GraphQL/Mutations';

const ListOfUsers = () => {
    const { data } = useQuery(GET_ALL_USERS);
    const [deleteUser] = useMutation(DELETE_USER);

    return (
        <div>
            {data &&
                data.getAllUsers.map((user: any) => (
                    <p key={user.id}>
                        {user.name} / {user.username}
                        <button
                            onClick={() =>
                                deleteUser({ variables: { id: user.id } })
                            }
                        >
                            Delete user
                        </button>
                    </p>
                ))}
        </div>
    );
};

export default ListOfUsers;

