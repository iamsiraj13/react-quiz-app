import React from 'react';
import classes from '../../styles/Login.module.css';
import login from '../../assets/images/login.svg'
import '../../styles/App.css';
import ok from  '../../styles/Illustration.module.css';

import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <div className={ok.illustration}>
                    <img src={login} alt="Login" />
                </div>
                <Form className={classes.login}>
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email"></TextInput>

                    <TextInput type="password" placeholder="Enter Password" icon="lock"></TextInput>


                     
                    <Button className="button">Login In</Button>

                    <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    );
};

export default Login;