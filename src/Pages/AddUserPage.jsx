import React, { useState } from 'react';
import Input from '../Components/Input';
import axios from 'axios';
import { Button } from '@material-ui/core';

const AddUserPage = () => {
    const [data, setData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        surveys: '',
        email: ''
    });

    const onValueChange = (e) =>{
        setData(prevValue => {
            return{
                ...prevValue,
                [e.target.name]: e.target.value
            };
        });
    };

    const onSubmit = async(e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/users/create', data)
        .then(response => console.log(response))
        .then(setData({
            name: '',
            dateOfBirth: '',
            gender: '',
            surveys: '',
            email: ''
        }));
    }

    return(
        <div className="content">
        <form onSubmit={onSubmit} autoComplete="off">
                <Input
                    type='text'
                    label='Name'
                    name= 'name'
                    onChange={onValueChange}
                    value={data.name}
                />
                <Input
                    type='date'
                    label='Date of birth'
                    name= 'dateOfBirth'
                    onChange={onValueChange}
                    value={data.dateOfBirth}
                />
                <Input
                    type='text'
                    label='Gender'
                    name= 'gender'
                    onChange={onValueChange}
                    value={data.gender}
                />
                <Input
                    type='text'
                    label='Surveys'
                    name= 'surveys'
                    onChange={onValueChange}
                    value={data.surveys}
                />
                <Input
                    type='email'
                    label='E-Mail'
                    name= 'email'
                    onChange={onValueChange}
                    value={data.email}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                        Create
                </Button>
            </form>
        </div>
    );
};

export default AddUserPage;