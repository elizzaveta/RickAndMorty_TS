import React from 'react';
import {quizQuestionType} from "../../consts/QuizQuestions";
import styles from "../../styles/css/pages/quiz/Quiz.module.css"

const QuizCard = (props:{question: quizQuestionType, callback(e: React.MouseEvent):void, answerStyles:{correct: string, unselected: string}}) => {
    const {question} = props;

    return (
        <div className={styles.cardWrapper}>
            <p className={styles.question}>{question.question}</p>
            {question.answerVariants.map((answer) => {
                return (
                    <div className={styles.answerVariant} key={answer.id}>
                        <p onClick={props.callback}
                           className={answer.correct ? props.answerStyles.correct:''}
                           id={answer.id.toString()}>{answer.text}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default QuizCard;