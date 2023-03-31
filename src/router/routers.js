import React from "react"
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Summary from '../pages/summary/Summary';
import { Routes, Route } from 'react-router-dom';

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/nova-estrategia' element={<Home />} />
            <Route path='/estrategias' element={<Summary />} />
        </Routes >
    )
}