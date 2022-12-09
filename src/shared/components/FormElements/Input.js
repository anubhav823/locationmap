import React from 'react';

import './Input.css'

const Input = props => {
    const element = props.element === 'input' ? <input id={props.id} type={props.type} placeholder={props.placeholder}></input>
        : <textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder}></textarea>
    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
}

export default Input;  