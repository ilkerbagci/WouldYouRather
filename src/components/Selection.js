import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Selection extends Component {
    render() {
        const { optionOne, optionTwo } = this.props

        return (
            <div className='ui grid internally celled'>
                <Row>
                    <h1 className='ui header'>Would You Rather...</h1>
                </Row>
                <Row>
                    <div className='twelve wide floated'>
                        <div className='ui two stackable center aligned grid segment'>
                            <Col>
                                <button
                                    className='ui submit button red'
                                    onClick={() => this.props.onSubmit('optionOne')}>
                                    {optionOne}
                                </button>
                            </Col>
                            <div className='ui vertical divider'>or</div>
                            <Col>
                                <button
                                    className='ui submit button red'
                                    onClick={() => this.props.onSubmit('optionTwo')}>
                                    {optionTwo}
                                </button>
                            </Col>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Selection