import React from 'react';
import signup from '../assets/images/signup.svg'
import classes from '../styles/Illustration.module.css';

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={signup} alt="Signup" />
        </div>
    );
};

export default Illustration;