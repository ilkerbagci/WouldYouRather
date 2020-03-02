import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveQuestions, saveAnswerQuestion, addNewQuestion } from './questions'
import { receiveUsers, saveUserAnswer, addQuestion } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveAnswer({ qid, answer }) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
            .then(() => {
                dispatch(saveAnswerQuestion({ authedUser, qid, answer }))
                dispatch(saveUserAnswer({ authedUser, qid, answer }))
                dispatch(hideLoading())
            })

    }
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => {
                dispatch(addNewQuestion(question))
                dispatch(addQuestion({ authedUser, qid: question.id }))
                dispatch(hideLoading())
            })
    }
} 