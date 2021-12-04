import React from 'react';
import classes from '../styles/Questions.module.css';
import Answers from './Answers';

const Question = () => {
    return (
        <div class={classes.question}>
        <div class={classes.qtitle}>
            <span class="material-icons-outlined"> help_outline </span>
            Here goes the question from Learn with Sumit?
        </div>
        <Answers></Answers>
        {/* <div class="answers">
            <label class="answer" for="option1"> A New Hope 1 </label>

            <label class="answer" for="option2"> A New Hope 1 </label>

            <label class="answer" for="option3"> A New Hope 1 </label>

            <label class="answer wrong" for="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>


        </div> */}
    </div>
    );
};

export default Question;