import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Signup.module.css';
import TextInput from '../TextInput';
import '../../styles/App.css';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={classes.signup}>
                    <TextInput type="text" placeholder="Enter Name" icon="person"></TextInput>
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email"></TextInput>
                    <TextInput type="password" placeholder="Enter Password" icon="lock"></TextInput>
                    <TextInput type="password" placeholder="Confirm Password" icon="lock_clock"></TextInput>
                    <Checkbox type="checkbox" text="I agree to the Terms &amp; Conditions"></Checkbox>
                    <Button>Submit Now</Button>
                    <div class="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Signup;