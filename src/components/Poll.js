import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'
import Selection from './Selection'
import Results from './Results'
import { handleSaveAnswer } from '../actions/shared'
import PageNotFound from './PageNotFound'

class Poll extends Component {
    onSubmit = (selectedOption) => {
        const { id, dispatch } = this.props
        if (selectedOption !== '') {
            dispatch(handleSaveAnswer({ qid: id, answer: selectedOption }))
        }
    }

    render() {
        const { question, author, isAnswered, answer, optionOneCount, optionTwoCount } = this.props

        if (question === undefined) {
            return (
                <div>
                    <PageNotFound errorMessage='Question not found!'/>
                </div>)
        }

        return (
            <div>
                <Card className='tweet'>
                    <Card.Title>{author.name + ' asks:'}</Card.Title>
                    <Card className='tweet'>
                        <Row>
                            <Col sm={2}>
                                <img
                                    src={author.avatarURL}
                                    alt={`Avatar of ${author.name}`}
                                    className=' profile-photo'
                                />
                            </Col>
                            <Col sm={10}>
                                {isAnswered ?
                                    <Results
                                        optionOneCount={optionOneCount}
                                        optionTwoCount={optionTwoCount}
                                        optionOne={question.optionOne.text}
                                        optionTwo={question.optionTwo.text}
                                        answer={answer}
                                    /> :
                                    <Selection
                                        optionOne={question.optionOne.text}
                                        optionTwo={question.optionTwo.text}
                                        onItemSelected={this.onItemSelected}
                                        onSubmit={this.onSubmit}
                                    />}

                            </Col>
                        </Row>
                    </Card>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]

    if (question === undefined) {
        return ({ question })
    }

    const user = users[authedUser]
    const author = users[question.author]
    let optionOneCount, optionTwoCount
    let isAnswered = false
    let answer

    if (user.answers[id] !== undefined) {
        isAnswered = true
        answer = user.answers[id]
        optionOneCount = question.optionOne.votes.length
        optionTwoCount = question.optionTwo.votes.length
    }

    return ({
        question,
        optionOneCount,
        optionTwoCount,
        author,
        isAnswered,
        id,
        answer,
    })
}

export default connect(mapStateToProps)(Poll)