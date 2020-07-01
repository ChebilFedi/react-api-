import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { userList } from './Actions/actions'
import './App.css';



const UserList = ({ users, userList }) => {
    useEffect(() => {
        userList()
    }, [])

    return (
        <div className='user-list'>
            <div className='title'>
                <h1>Users List</h1>
            </div>
            {users.map(el =>

                <div className='card-container'>

                    <div className='users'>
                        <div className="upper-container">
                            <h2>{el.name}</h2
                            ></div>
                        <div className="lower-container">
                            <h3>Email:{el.email}</h3>
                            <h3>address:{el.address.city}</h3>
                            <h3>Phone:{el.phone}</h3>
                        </div>
                    </div>
                </div>

            )}

        </div>
    )

}
const mapStateToProps = state => {
    return {
        users: state.ListReducer
    }
}
export default connect(mapStateToProps, { userList })(UserList)