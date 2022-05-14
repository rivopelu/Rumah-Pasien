import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Main, RegisterPage } from '../../pages'
import Hello from '../../pages/Hello'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/hello' element={<Hello />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='*' element={<Main />} />
        </Routes>
    )
}

export default MainRoute