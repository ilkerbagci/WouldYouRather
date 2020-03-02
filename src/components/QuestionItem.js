import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionItem extends Component {

    render() {
        const { question, author, id } = this.props

        return (
            <Fragment>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className='image'>
                                    <img
                                        className=' profile-photo'
                                        src={author.avatarURL}
                                        alt={`Avatar of ${author.name}`}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div> {author.name} asked:</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className='meta'>
                            <span> 
                                Would you rather 
                            </span>
                        </div>
                        <div className='middle aligned content'>
                            {question.optionOne.text}
                        </div>
                        <div>...OR...</div>
                        <div className='middle aligned content'>
                            {question.optionTwo.text}
                        </div>
                    </Col>
                    <Col>
                        <div className='bottom aligned'>
                            <Link to={`/questions/${id}`}>
                                <button className='ui button red'>
                                    View Poll
                                </button>
                            </Link>
                        </div>
                        <br />
                    </Col>
                </Row>
                <br />
                <br />
            </Fragment>
        )
    }

}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    const author = users[question.author]

    return ({
        question: question,
        author: author,
    })
}

export default connect(mapStateToProps)(QuestionItem)