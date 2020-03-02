import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from './LeaderBoardItem'

class LeaderBoard extends Component {
    render() {
        const { sortedUsers } = this.props
        
        const users = sortedUsers.map(id => {
            return <LeaderBoardItem 
                        userId={id} 
                        key={id} 
                    />
        })

        return (
            <div style={{ width: '25%' }}>
                <ul>{users}</ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    let sortedUsers = Object.keys(users).sort((a, b) => {
        return (
            Object.keys(users[b].answers).length +
            users[b].questions.length -
            (Object.keys(users[a].answers).length + users[a].questions.length)
        )
    })
    return {
        sortedUsers
    }
}

export default connect(mapStateToProps)(LeaderBoard)
