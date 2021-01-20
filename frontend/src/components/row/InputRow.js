import React, { Children } from 'react';

const InputRow = (props) => {
    const singleChild = Children.only(props.children);
    const hasInputElement = Children.map(props.children, child => {
        if (child.type === 'input')
            return true;
        return false;
    });
    //console.log(typeof hasInputElement[0])
    return (
        <div style={container}>
            <p style={label}>{props.label}</p>
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
const label = {
    color: '#1010108a',
    fontWeight: '500',
    paddingLeft: '16px'
}

export default InputRow;
