import React from 'react'
import './UserProfile.css'
import { DATA } from '../../static'

function UserProfile() {
    console.log(DATA)
    return (
        <div className='userProfile container'>
            <div className="userDatas">
                <div className="profile__img">{(DATA[0].name).slice(0, 1)}</div>
                <h2>{DATA[0].name}</h2>
                <h3>+998{DATA[0].phone}</h3>
                <h3>Username: @{DATA[0].username}</h3>
            </div>
        </div>
    )
}

export default UserProfile