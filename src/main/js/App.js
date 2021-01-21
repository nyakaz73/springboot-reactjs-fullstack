import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../frontend/src/components/layout/Header';
import RegisterUser from '../../../frontend/src/components/register-user/RegisterUser';
import Users from '../../../frontend/src/components/users/Users';
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('/user/all')
            .then(response => setUsers(response.data))
    }

    const removeUser = (id) => {

        axios.delete(`/user/${id}`)
            .then(
                () => {
                    setUsers(
                        users.filter(
                            (user) => user.id !== id
                        )
                    )
                }
            );
    }

    const addUser = (newUser) => {
        axios.post('/user/save', newUser)
            .then(
                (response) => {
                    setUsers([...users, response.data])
                }
            );
    }


    return (
        <div>
            <Header />
            <RegisterUser addUser={addUser} />
            <Users users={users} removeUser={removeUser} />
        </div>
    )
}


export default App;

ReactDOM.render(<App />, document.querySelector('#app'))