import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class NavigationBar extends Component {
    handleLogout = () => {
        const { dispatch } = this.props
        this.props.history.push('/')
        dispatch(setAuthedUser(null))
    }

    render() {
        const { user } = this.props
        return (
            <div className='ui secondary menu red'>
                <NavLink className='item' to='/' exact activeClassName='active'>
                    Home
                </NavLink>
                <NavLink className='item' to='/add' activeClassName='active'>
                    New Question
                </NavLink>
                <NavLink className='item' to='/leaderboard' activeClassName='active'>
                    Leaderboard
                </NavLink>

                <div className='right menu'>
                    <div className='item'>
                        <img
                            className='ui avatar image'
                            src={user.avatarURL}
                            alt={`Avatar of ${user.name}`}
                        />
                        <span>{user.name}</span>
                    </div>
                    <div className='item'>
                        <div
                            className='ui fluid large submit button red'
                            onClick={this.handleLogout}
                        >
                            Logout
              </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
      user: authedUser
        ? users[authedUser]
        : null,
        isAuthed: authedUser !== null
    };
  }
  
  export default withRouter(connect(mapStateToProps)(NavigationBar));