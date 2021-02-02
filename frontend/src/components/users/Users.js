import React from 'react'
import UserInfo from '../user-info/UserInfo';
import PropTypes from "prop-types";
const Users = ({ users, removeUser }) => {
    return (
        <div style={(users !== undefined || users.length !== 0) ? container : null}>
            {
                users.map(user => (
                    <UserInfo user={user} key={user.id} removeUser={removeUser} />
                ))
            }
        </div>
    )
}


const container = {
    border: '2px solid #544073',
    margin: '50px',
    padding: '10px'
}

Users.propTypes = {
    users: PropTypes.array,
    removeUser: PropTypes.func.isRequired
}
export default Users;
