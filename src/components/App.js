import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import Home from './Home'
import Poll from './Poll'
import NavigationBar from './NavigationBar'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { isAuthed } = this.props

        if (!isAuthed) {
            return (
                <div className='container'>
                    <Login />
                </div>
            )
        }
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <NavigationBar />
                    <div className='container'>
                        <Route path='/' exact component={Home} />
                        <Route path='/add' exact component={NewQuestion} />
                        <Route path='/leaderboard' exact component={LeaderBoard} />
                        <Route path='/questions/:id' component={Poll} />
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        isAuthed: authedUser !== null,
        users,
    }
}

export default connect(mapStateToProps)(App)