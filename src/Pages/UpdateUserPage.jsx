import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Input from '../Components/Input';
import {Typography, Button} from '@material-ui/core';

const UpdateUserPage = () =>{
    const {id} = useParams();
        const [user, setUser]= useState({});
        useEffect(() => {
            const getUser = async () =>{
                try{
                    const response = await axios.get(`http://localhost:4000/users/get/${id}`, {params:{_id:id}});
                    const {data} = response;
                    setUser({
                        ...data
                    })
                }catch(err){
                    console.log(err)
                }
            }
            getUser();
        },[id]);

    const onValueChange = (e) =>{
        setUser(prevValue => {
            return{
                ...prevValue,
                [e.target.name]: e.target.value
            };
        });
    };

    const onSubmit = async(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:4000/users/update/${id}`, user)
        .then(response => console.log(response));
    };

    return(
        <div className="content">
        <form onSubmit={onSubmit} autoComplete="off">
                <Input
                    type='text'
                    label='Name'
                    name= 'name'
                    onChange={onValueChange}
                    require='false'
                />
                <Input
                    type='date'
                    label='Date of birth'
                    name= 'dateOfBirth'
                    onChange={onValueChange}
                />
                <Input
                    type='text'
                    label='Gender'
                    name= 'gender'
                    onChange={onValueChange}
                />
                <Input
                    type='text'
                    label='Surveys'
                    name= 'surveys'
                    onChange={onValueChange}
                />
                <Input
                    type='email'
                    label='E-Mail'
                    name= 'email'
                    onChange={onValueChange}
                />

                <Button
                    className="btn"
                    size="small"
                    color="primary" //dodane
                    variant="contained"
                    type="submit"
                    > Update
                </Button>
            </form>
            <Typography gutterBottom variant="h5"  component="h2">
            <p><span>Name</span>: {user.name}</p>
            <p><span>Date of Birth</span>: {user.dateOfBirth}</p>
            <p><span>Registered At</span>: {user.registeredAt}</p>
            <p><span>Gender</span>: {user.gender}</p>
            <p><span>Surveys</span>: {user.surveys}</p>
            <p><span>E-Mail</span>: {user.email}</p>
        </Typography>
        </div>
    );
}

export default UpdateUserPage;