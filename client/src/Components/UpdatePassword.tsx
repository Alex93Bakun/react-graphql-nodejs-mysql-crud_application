import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_PASSWORD} from '../GraphQL/Mutations';

const UpdatePassword = () => {
    const [userName, setUserName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD);

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <input
                type="text"
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Current Password"
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
                onClick={() =>
                    updatePassword({
                        variables: {
                            username: userName,
                            oldPassword: currentPassword,
                            newPassword,
                        },
                    })
                }
            >
                Update password
            </button>
        </div>
    );
};

export default UpdatePassword;
