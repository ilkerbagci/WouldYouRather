import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

class Results extends Component {

    renderDiv(optionVoteCount, totalCount) {
        const percentage = Math.round((optionVoteCount * 100) / totalCount)
        return (
            <div className='ui red progress' data-percent={percentage}>
                <div className='bar' style={{ width: `${percentage}%` }}>
                    <div className='ui black progress'>
                        {percentage}%
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { optionOneCount, optionTwoCount, optionOne, optionTwo, answer } = this.props
        const totalCount = optionOneCount + optionTwoCount

        return (
            <div className='ui grid internally celled'>
                <Row>
                    <Col className='twelve wide floated column'>
                        <h1 className='ui header'>
                            Results:
                        </h1>
                    </Col>
                </Row>

                <Row>

                    <Col className='twelve wide floated column'>
                        <div className='ui segment'>
                            <h2 className='ui header'>
                                {optionOne}
                            </h2>

                            <span>
                                {answer === 'optionOne' && (
                                    <div className='ui red ribbon label'>
                                        Your Vote
                                    </div>
                                )}
                            </span>

                            {this.renderDiv(
                                optionOneCount, totalCount
                            )}

                            <p>
                                {`${optionOneCount} out of ${totalCount} votes`}
                            </p>
                        </div>
                        <div className='ui segment'>
                            <h2 className='ui header'>
                                {optionTwo}
                            </h2>

                            <span>
                                {answer === 'optionTwo' && (
                                    <div className='ui red ribbon label'>
                                        <i className='star icon' /> Your Vote
                                    </div>
                                )}
                            </span>

                            {this.renderDiv(
                                optionTwoCount, totalCount
                            )}

                            <p>
                                {`${optionTwoCount} out of ${totalCount} votes`}
                            </p>
                            
                            <div />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Results