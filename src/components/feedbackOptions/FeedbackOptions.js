import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Feedback.module.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <>
        {options[0].map(option => (
            <button type="button" key={uuidv4()} onClick={() => onLeaveFeedback(option)} className={styles.btn}>
                {option}
            </button>
        ))}
    </>
);

export default FeedbackOptions;
