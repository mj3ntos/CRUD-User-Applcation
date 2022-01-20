import React, { useState , useEffect} from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

const HomePage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () =>{
            try{
                const response = await axios.get('http://localhost:4000/users/get');
                const {data} = response;
                setUsers((prevState) => [
                    ...prevState,
                    ...data
                ])
            }catch(err){
                console.log(err)
            }
        }
        getUsers();
    },[]);

    const handleDelete = async(e, id) => {
        const elementId = e.target.parentElement.id;
        axios.delete(`http://localhost:4000/users/delete/${id}`, {params:{_id:elementId}})
        .then(response => console.log(response))
        .then(window.location.reload(true));

    };

    return(
        <div>
        <Container className={useStyles.cardGrid} maxWidth="md">
        <ul>
        <Grid container spacing={4}>
            {users.length>0 ? users.map((user) => (
            <Grid item xs={12} sm={8} md={6}>
            <Card className={useStyles.card}>
                <li id={user._id} key={user._id}>
                <CardContent className={useStyles.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                            <p><span>Name</span>: {user.name}</p>
                            <p><span>Date of Birth</span>: {user.dateOfBirth}</p>
                            <p><span>Registered At</span>: {user.registeredAt}</p>
                            <p><span>Gender</span>: {user.gender}</p>
                            <p><span>Surveys</span>: {user.surveys}</p>
                            <p><span>E-Mail</span>: {user.email}</p>
                    </Typography>
                </CardContent>
                <div className="buttons">
                    <Button
                        className="btn"
                        size="small"
                        color="primary"
                        variant="contained"
                        type="submit"
                        onClick={(e) => handleDelete(e, user._id)}>
                            Delete
                    </Button>
                    <NavLink to={`/user/${user._id}`} className="nav_link space">
                        <Button
                            className="btn"
                            size="small"
                            color="primary"
                            variant="contained"
                            >
                            Edit
                        </Button>
                    </NavLink>
                </div>
                </li>
                </Card>
                </Grid>
            ) ) : <p>Brak danych</p>}
            </Grid>
        </ul>
        </Container>
        </div>
    );
}

export default HomePage;