import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

class UserListDropdown extends Component {
    render() {
        const { users, selectedUser, handleUserSelect } = this.props

        let dropdownItems = []
        if (users.length !== undefined) {
            dropdownItems = users.map((user) => {
                return (
                    <Dropdown.Item key={user} onClick={() => handleUserSelect(user)}>
                        {user}
                    </Dropdown.Item>
                )
            })
        }

        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle
                        variant='secondary'
                        id='dropdown-basic'
                    >
                        {selectedUser === null ? 'Select User' : selectedUser}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dropdownItems}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users),
    }
}
export default connect(mapStateToProps)(UserListDropdown)