import React, { useState } from 'react';
function RegisterUser() {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
        </form>
    )
}


export default RegisterUser;
