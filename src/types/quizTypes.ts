export type quizQuestionType = {
    id: number
    question: string
    answerVariants: {
        id: number
        text: string
        correct: boolean
    }[]
}