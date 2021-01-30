import React, { Children } from 'react';
import PropTypes from "prop-types";
const InputRow = ({ children, label }) => {
    const singleChild = Children.only(children);
    const hasInputElement = Children.map(children, child => {
        if (child.type === 'input')
            return true;
        return false;
    });
    return (
        <div style={container}>
            <p style={labelStyle}>{label}</p>
            <div className="styledInput" >
                {
                    hasInputElement[0] ? singleChild : new Error('an input element is required!')
                }
            </div>
        </div>
    );
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
}
const labelStyle = {
    color: '#1010108a',
    fontWeight: '500',
    paddingLeft: '16px'
}

InputRow.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
}
export default InputRow;
