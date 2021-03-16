import React from "react";
import style from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, totalFeedback, countFeedback})=>{
        return(
            <>
                    <p className={style.text}>Good: {good}</p>
                    <p className={style.text}>Neutral: {neutral}</p>
                    <p className={style.text}>Bad: {bad}</p>
                    <p className={style.text}>Total: {totalFeedback()}</p>
                    <p className={style.text}>Positive feedback: {countFeedback()}%</p>
            </>
        );
}



export default Statistics;
