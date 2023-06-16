import React from 'react'
import './page-CSS/NotFound.scss'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {

    const navigate = useNavigate()
    return (
        <div className='not-found'>
            <h1>404</h1>
            <div className='wrapper-not-found'>
                <h2>we are sorry, page not found!</h2>
                <p>the page you are looking for might have been removed or had its name changed or temporary unavailable</p>
                <button onClick={()=>navigate('/')}>Return to homepage</button>
            </div>
        </div>
    )
}
