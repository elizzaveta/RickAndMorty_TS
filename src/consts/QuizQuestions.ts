// eslint-disable-next-line require-yield
export function* getNextQuestion():Generator<quizQuestionType>{
    yield* QuizQuestions.questions
}
export function quizIterator():()=>number{
    let currentQuestion:number = 0;

    return function (){
        currentQuestion++;
        return currentQuestion;
    }
}

export type quizQuestionType = {
    id: number
    question: string
    answerVariants: {
        id: number
        text: string
        correct: boolean
    }[]
}

export const QuizQuestions = {
    questions:[
        {
            id: 1,
            question: 'Which is the dimension of the original Rick?',
            answerVariants: [
                {
                    id: 1,
                    text: 'C-126',
                    correct: false
                },
                {
                    id: 2,
                    text: 'C-132',
                    correct: false
                },
                {
                    id: 3,
                    text: 'C-137',
                    correct: true
                },
                {
                    id: 4,
                    text: 'C-129',
                    correct: false
                }
            ]
        },
        {
            id: 2,
            question: 'What is "Schmeckle"?',
            answerVariants: [
                {
                    id: 1,
                    text: 'Ricks favorite food',
                    correct: false
                },
                {
                    id: 2,
                    text: 'A currency',
                    correct: true
                },
                {
                    id: 3,
                    text: 'The name of fly-guards',
                    correct: false
                },
                {
                    id: 4,
                    text: 'Ricks Cat-person friend',
                    correct: false
                }
            ]
        },
        {
            id: 3,
            question: 'Which of the following is NOT one of Rick catch phrases?',
            answerVariants: [
                {
                    id: 1,
                    text: 'No jumping in the sewer.',
                    correct: false
                },
                {
                    id: 2,
                    text: 'GRASSSSS... tastes bad!',
                    correct: false
                },
                {
                    id: 3,
                    text: 'Hit the deck, Jack!',
                    correct: true
                },
                {
                    id: 4,
                    text: 'Uh ohhhh! Somersoult jump!',
                    correct: false
                }
            ]
        },
        {
            id: 4,
            question: 'What is the name of the planet that Mortys sex robot is from?',
            answerVariants: [
                {
                    id: 1,
                    text: 'Gazorpazorp',
                    correct: true
                },
                {
                    id: 2,
                    text: 'Smegmalon',
                    correct: false
                },
                {
                    id: 3,
                    text: 'Chundlopia',
                    correct: false
                },
                {
                    id: 4,
                    text: 'Glaagablaaga',
                    correct: false
                }
            ]
        },
        {
            id: 5,
            question: "What is the name of Morty's High School",
            answerVariants: [
                {
                    id: 1,
                    text: 'Beerwah State High School',
                    correct: false
                },
                {
                    id: 2,
                    text: 'Harry Herpson High School',
                    correct: true
                },
                {
                    id: 3,
                    text: 'Gene Vegan High School',
                    correct: false
                },
                {
                    id: 4,
                    text: 'The name is not presented',
                    correct: false
                }
            ]
        },
        {
            id: 6,
            question: "What is the name of Jerry's favorite Rick?",
            answerVariants: [
                {
                    id: 1,
                    text: 'Doofus',
                    correct: true
                },
                {
                    id: 2,
                    text: 'Roofus',
                    correct: false
                },
                {
                    id: 3,
                    text: 'Goofus',
                    correct: false
                },
                {
                    id: 4,
                    text: 'Rick G-506',
                    correct: false
                }
            ]
        },
        {
            id: 7,
            question: "What is the name of Rick's ex-wife",
            answerVariants: [
                {
                    id: 1,
                    text: 'Joyce',
                    correct: false
                },
                {
                    id: 2,
                    text: 'Janet',
                    correct: false
                },
                {
                    id: 3,
                    text: 'Diane',
                    correct: true
                },
                {
                    id: 4,
                    text: 'Ellen',
                    correct: false
                }
            ]
        },
        {
            id: 8,
            question: 'What is Job does Beth have?',
            answerVariants: [
                {
                    id: 1,
                    text: 'Chef',
                    correct: false
                },
                {
                    id: 2,
                    text: 'Astronomer',
                    correct: false
                },
                {
                    id: 3,
                    text: 'Novel Writer',
                    correct: false
                },
                {
                    id: 4,
                    text: 'Horse Surgeon',
                    correct: true
                }
            ]
        },
        {
            id: 9,
            question: 'What does wubba lubba dub dub mean?',
            answerVariants: [
                {
                    id: 1,
                    text: 'Please leave',
                    correct: false
                },
                {
                    id: 2,
                    text: "I'm a genius",
                    correct: false
                },
                {
                    id: 3,
                    text: "Let's party",
                    correct: false
                },
                {
                    id: 4,
                    text: "I'm in great pain",
                    correct: true
                }
            ]
        }
    ]
}