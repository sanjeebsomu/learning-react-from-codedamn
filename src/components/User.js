import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const [userData, setUserData] = useState({})
    const {username} = useParams();
    useEffect(() => {
        fetch('/users.json').then(data =>{
            return data.json();
        }).then((data =>{
            setUserData(data[username])             //this username is come from useparams and path variable from app.js /user/:username
                                                    //this means show the data of that person which username is provided
        }))
    }, [username])
    return (
        <div>
            <h1>I am a user component ({username})</h1>
            <h5>Name: {userData.name}</h5>
            <h5>Age: {userData.age}</h5>
        </div>
    )
}

export default User
