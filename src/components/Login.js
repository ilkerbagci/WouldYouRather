import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import UserListDropdown from './UserListDropdown'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        selectedUserId: null,
    }

    handleUserSelect = (userId) => {
        this.setState({
            selectedUserId: userId,
        })
    }

    handleLogin = () => {
        const { dispatch } = this.props
        const { selectedUserId } = this.state
        if (selectedUserId !== null) {
            dispatch(setAuthedUser(selectedUserId))
        }
    }

    render() {
        return (
            <div className='justify-content-md-center'>
                <Card className='text-center'>
                    <Card.Img variant='top' src={process.env.PUBLIC_URL + '/login.png'} />
                    <Card.Body>
                        <Card.Text>
                            Select user and Sign In to continue
                        </Card.Text>
                        <UserListDropdown
                            handleUserSelect={this.handleUserSelect}
                            selectedUser={this.state.selectedUserId}
                        />
                        <Button
                            variant='success'
                            onClick={this.handleLogin}
                        >
                            Sign In
                            </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default connect()(Login)