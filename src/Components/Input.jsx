import React from 'react';
import { TextField } from '@material-ui/core';


const Input = ({name, type, value , onChange, label}) =>{
    return(
        <div className="divInput">
            <TextField
                className='textfieldstyle'
                label={label}
                name={name}
                type={type}
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={value}
                required
            />
        </div>
    );
};

export default Input;