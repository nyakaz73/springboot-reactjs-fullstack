import React from 'react';

function Header() {
    return (
        <header style={header} className="header">
            <h2>User Registration</h2>
        </header>
    )
}

const header = {
    display: "flex",
    justifyContent: "center",
    padding: '10px',
    color: "#fff"
}

export default Header;

