import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, ADD_NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            const { answer } = action
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [answer]: {
                        ...state[action.qid][answer],
                        votes: state[action.qid][answer].votes.concat([action.authedUser])
                    }
                }
            }
        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                },
            }
        default:
            return state
    }
}