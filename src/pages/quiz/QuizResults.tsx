import React from 'react';
import rick from "../../assets/images/rick congrats.png"
import jerry from "../../assets/images/jerry.png"
import styles from "../../assets/css/pages/quiz/QuizResults.module.css"

const QuizResults = (props: { score: number, totalQuestions: number }) => {
    let enoughPoints: boolean = props.score >= props.totalQuestions / 2;
    let result
    enoughPoints
        ? result = {
            image: rick,
            text1: `Congrats! Your score is ${props.score} out of ${props.totalQuestions}.`,
            text2: 'You\'re not Jerry.'
        }
        : result = {
            image: jerry,
            text1: `After all, It's not that bad to be Jerry... `,
            text2: `Your score is ${props.score} out of ${props.totalQuestions}. Better luck next time`
        }

    return (
        <div className={`container ${styles.wrapper}`}>
            <img src={result.image} className={styles.image} alt={result.image.toString()}/>
            <div className={styles.textWrapper}>
                <h2>{result.text1}</h2>
                <p>{result.text2}</p>
            </div>
        </div>
    );
};

export default QuizResults;