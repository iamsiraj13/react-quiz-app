import React from 'react';
import classes from '../styles/Answers.module.css'
import Checkbox from './Checkbox';

const Answers = () => {
    return (

        <div className={classes.answers}>
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
            <Checkbox className={classes.answer} type="checkbox" text="Anew Hope 1" />
        </div>
    );
};

export default Answers;