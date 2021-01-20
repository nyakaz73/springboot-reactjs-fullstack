import React from 'react';
import PropTypes from 'prop-types'

function Header({ title }) {
    return (
        <header style={header} className="header">
            <h2>{title}</h2>
        </header>
    )
}

const header = {
    display: "flex",
    justifyContent: "center",
    padding: '10px',
    color: "#fff"
}

Header.defaultProps = {
    title: 'User Registration'
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header;

