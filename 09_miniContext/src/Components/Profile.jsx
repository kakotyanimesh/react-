import React, {useContext} from 'react'
import UsContext from '../Context/UserContext'



function Profile() {
    const {user} = useContext(UsContext)
    if (!user) return <div>please log in</div>
    
    return <div>welcome {user.username}</div>
}

export default Profile