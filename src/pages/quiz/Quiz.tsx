import React, {useEffect, useState} from 'react';
import {getNextQuestion, QuizQuestions, quizQuestionType} from "../../consts/QuizQuestions";
import styles from "../../styles/css/pages/quiz/Quiz.module.css"
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";

enum quizProgressEnum {
    NOT_STARTED = "Start",
    IN_PROGRESS = "Next Question",
    DONE = "See Results",
    TRY_AGAIN = "Try Again"
}

const Quiz = () => {
    const [quizProgress, setQuizProgress] = useState<quizProgressEnum>(quizProgressEnum.NOT_STARTED)
    const [score, setScore] = useState<number>(0)
    const [nextQuestionGenerator, setNextQuestionGenerator] = useState(getNextQuestion())
    const [currentQuestion, setCurrentQuestion] = useState<quizQuestionType>();
    const [answerStyles, setAnswerStyles] = useState({correct: "", unselected: ""})
    const [userAnswer, setUserAnswer] = useState({selected: '', answered: false});

    const nextQuestion = () => {
        if (!userAnswer.answered && quizProgress !== quizProgressEnum.NOT_STARTED) return;
        const nextQuestion = nextQuestionGenerator.next();
        console.log(nextQuestion)
        if (!nextQuestion.done) {
            setCurrentQuestion(nextQuestion.value);
            setQuizProgress(quizProgressEnum.IN_PROGRESS);
            setAnswerStyles({correct: '', unselected: ''})
            setUserAnswer({selected: '', answered: false})
            const userSelect = document.getElementById(userAnswer.selected);
            if (userSelect) userSelect.className = ''

        } else {
            setQuizProgress(quizProgressEnum.DONE);
        }
    }

    useEffect(()=>{
        if(currentQuestion && QuizQuestions.questions.indexOf(currentQuestion)===QuizQuestions.questions.length-1)setQuizProgress(quizProgressEnum.DONE);

    }, [currentQuestion])

    const showResults = () => {
        setQuizProgress(quizProgressEnum.TRY_AGAIN)
    }
    const resetQuiz = ()=>{
        setQuizProgress(quizProgressEnum.NOT_STARTED);
        setScore(0);
        setNextQuestionGenerator(getNextQuestion());
        setUserAnswer({selected: '', answered: false})
        setCurrentQuestion(undefined);
    }
    const handleButtonClick = () => {
        switch (quizProgress) {
            case quizProgressEnum.NOT_STARTED:
            case quizProgressEnum.IN_PROGRESS:
                nextQuestion();
                break;
            case quizProgressEnum.DONE:
                showResults(); break;
            case quizProgressEnum.TRY_AGAIN:
                resetQuiz()
        }
    }
    const handleUserAnswer = (e: React.MouseEvent) => {
        if (!currentQuestion || userAnswer.answered) return;
        setUserAnswer({selected: e.currentTarget.id, answered: true})

        const answerIsCorrect = currentQuestion.answerVariants
            .find((answer) => answer.id.toString() === e.currentTarget.id)?.correct;

        if (answerIsCorrect) setScore(score + 1)

        setAnswerStyles({correct: styles.correct, unselected: ''})
        if (!answerIsCorrect) e.currentTarget.className = styles.wrong
    }
    return (
        <div className={`container ${styles.wrapper}`}>
            <h1 className={`orangeText ${styles.centerText}`}>Rick And Morty Quiz</h1>
            {quizProgress === quizProgressEnum.NOT_STARTED &&
                <h2 className={styles.centerText}>Prove you're not Jerry</h2>}
            {currentQuestion &&
                <>
                    {quizProgress !== quizProgressEnum.TRY_AGAIN ?
                        <>
                            <p><b>Score:</b> {score}</p>
                            <p>{currentQuestion.id}/{QuizQuestions.questions.length}</p>
                            <QuizCard question={currentQuestion} callback={handleUserAnswer}
                                      answerStyles={answerStyles}/>
                        </>
                        :<QuizResults score={score} totalQuestions={QuizQuestions.questions.length}/>
                    }
                </>
            }
            <button className={styles.button} onClick={handleButtonClick}>{quizProgress}</button>
        </div>
    );
};

export default Quiz;