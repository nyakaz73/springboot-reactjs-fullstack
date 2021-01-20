import React, { useState } from 'react';
import InputRow from '../row/InputRow';

function RegisterUser() {
    const [state, setState] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        confirm_password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div className="formCard">
            <form >
                <div className="pill"></div>
                <br />
                <div style={row}>
                    <InputRow label="Name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={state['name']}
                            onChange={handleInputChange}
                        />
                    </InputRow>
                    <InputRow label="Surname">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            value={state['surname']}
                            onChange={handleInputChange}
                        />
                    </InputRow>
                </div>

                <div style={row}>
                    <InputRow label="Email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={state['email']}
                            onChange={handleInputChange}
                        />
                    </InputRow>
                    <InputRow label="Username">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={state['username']}
                            onChange={handleInputChange}
                        />
                    </InputRow>
                </div>

                <div style={row}>
                    <InputRow label="Password">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={state['password']}
                            onChange={handleInputChange}
                        />
                    </InputRow>
                    <InputRow label="Confirm Password">
                        <input
                            type="password"
                            name="confirm_password"
                            placeholder="password"
                            value={state['confirm_password']}
                            onChange={handleInputChange}
                        />
                    </InputRow>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}


const row = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}

export default RegisterUser;
