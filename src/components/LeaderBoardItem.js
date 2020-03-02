import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'

class LeaderBoardItem extends Component {
    render() {
        const { userId, users } = this.props
        const user = users[userId]

        const answerCount = Object.keys(user.answers).length
        const questionCount = user.questions.length
        const totalCount = answerCount + questionCount

        return (
            <div className='center' style={{ width: '100%' }}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <img
                                    src={user.avatarURL}
                                    alt={`Avatar of ${user.name}`}
                                    className=' profile-photo'
                                />
                            </Col>
                            <Col md={8}>
                                <h6>
                                    {`${user.name}`} <small>({totalCount} pts)</small>
                                </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>Questions Answered : {answerCount}</Col>
                        </Row>
                        <Row>
                            <Col>Questions Asked : {questionCount}</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoardItem)
