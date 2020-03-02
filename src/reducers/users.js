import { RECEIVE_USERS, SAVE_USER_ANSWER, ADD_QUESTION_USER } from '../actions/users'

export default function users(state = {}, action) {
    const { authedUser, qid, answer } = action

    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case ADD_QUESTION_USER:
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([qid])
                }

            }
        default:
            return state
    }
}