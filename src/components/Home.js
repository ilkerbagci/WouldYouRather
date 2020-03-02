import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs } from 'react-bootstrap'
import QuestionItem from './QuestionItem'
import Login from './Login'

class Home extends Component {
    state = {
        //default selectedTab is unanswered
        selectedTab: 'unanswered'
    }

    onSelect = (eventKey) => {
        this.setState({
            selectedTab: eventKey,
        })
    }

    render() {

        const { answeredQuestionIds, unAnsweredQuestionIds, isAuthenticated } = this.props
        const { selectedTab } = this.state
        let questionList = []

        //login control
        if (!isAuthenticated) {
            return (
                <div className='container'>
                    <Login />
                </div>
            )
        }

        if (selectedTab === 'unanswered') {
            questionList = unAnsweredQuestionIds
        } else if (selectedTab === 'answered') {
            questionList = answeredQuestionIds
        }

        const listItems = questionList.map((question) => {
            return (
                <QuestionItem key={question} id={question} />
            )
        })

        return (
            <div className='full-width'>
                <Tabs defaultActiveKey='unanswered' onSelect={this.onSelect} className='justify-content-md-center'>
                    <Tab
                        eventKey='unanswered'
                        title='Unanswered Questions'>
                    </Tab>
                    <Tab
                        eventKey='answered'
                        title='Answered Questions'>
                    </Tab>
                </Tabs>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    const unAnsweredQuestionIds = Object.keys(questions)
        .filter((i) => (
            !questions[i].optionOne.votes.includes(authedUser) &&
            !questions[i].optionTwo.votes.includes(authedUser)
        ))
        .sort((a, b) => (
            questions[b].timestamp - questions[a].timestamp
        ))
    const answeredQuestionIds = Object.keys(questions)
        .filter((i) => (
            questions[i].optionOne.votes.includes(authedUser) ||
            questions[i].optionTwo.votes.includes(authedUser)
        ))
        .sort((a, b) => (
            questions[b].timestamp - questions[a].timestamp
        ))
    return {
        unAnsweredQuestionIds,
        answeredQuestionIds,
        isAuthenticated: authedUser !== null
    }
}

export default connect(mapStateToProps)(Home)