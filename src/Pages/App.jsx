import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from '../Layout/Layout';
import AddUserPage from './AddUserPage';
import HomePage from './HomePage';
import UpdateUserPage from "./UpdateUserPage";

const App = () =>{
    return(
        <div>
            <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" >
                        <HomePage />
                    </Route>
                    <Route path="/create">
                        <AddUserPage />
                    </Route>
                    <Route path="/user/:id" >
                        <UpdateUserPage />
                    </Route>
                </Switch>
            </Layout>
            </Router>
        </div>
    );

};

export default App;