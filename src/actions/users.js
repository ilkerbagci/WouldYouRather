export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function saveUserAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function addQuestion({ authedUser, qid }) {
    return {
        type: ADD_QUESTION_USER,
        authedUser,
        qid,
    }
}