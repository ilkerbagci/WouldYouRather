import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        isSubmitted: false
    }

    handleOptionOneChange = e => {
        const text = e.target.value

        this.setState({
            optionOneText: text
        })
    }
    
    handleOptionTwoChange = e => {
        const text = e.target.value

        this.setState({
            optionTwoText: text
        })
    }

    handleSubmit = () => {
        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        this.setState({
            isSubmitted: true
        })

        dispatch(handleAddQuestion({ optionOneText, optionTwoText }))
    }

    render() {
        const { optionOneText, optionTwoText, isSubmitted } = this.state

        if (isSubmitted) {
            return <Redirect to='/' />
        }

        return (

            <form onSubmit={this.handleSubmit} className='ui form'>
                <h1 className='ui dividing header'>Create New Question</h1>
                <h2 className=''>Woud you rather... </h2>
                <div className='field'>
                    <label>Option One</label>
                    <input
                        value={optionOneText}
                        placeholder='Option One'
                        onChange={this.handleOptionOneChange}
                    />
                </div>
                <div className='field'>
                    <label>Option Two</label>
                    <input
                        value={optionTwoText}
                        placeholder='Option Two'
                        onChange={this.handleOptionTwoChange}
                    />
                </div>
                <div>
                    <button
                        className='ui button red'
                        disabled={optionOneText === '' || optionTwoText === ''}
                    >
                        Submit
                    </button>
                </div>
            </form>

        )
    }
}

export default connect()(NewQuestion)
