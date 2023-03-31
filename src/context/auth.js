import { toast } from 'react-toastify';
import { api } from "../services/api.js"
import React, { createContext, useState } from 'react'
const AuthContextData = {
    signed: false,
    user: {},
    signIn: function (login, password) { },
    signOut: function () { }
}

export const AuthContext = createContext(AuthContextData);

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [signed, setSigned] = useState(false)
    
    const signIn = async (login, password) => {
        try {
            // let response = await api.post('/login/auth', { login, password })
            // const token = response.data.token
            if (login === 'dev' && password === '123') {
                var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZBTERJUiBDT1JSRUlBIFNJTFZBIiwiaWQiOiJjbGN0ajJ2c28wMDAwdjJ2dzY2eGhpdWU1IiwiaWF0IjoxNjc5NTA0NzAwLCJleHAiOjE2Nzk1OTEwNjB9.UDiWs5-2_ZvIv25F5H92d8CW4YRAj-Y8wRPOKPe0nc8'
            } else {
                toast.error(`Usuário ou senha inválidos`)
            }

            // setUser(response.data.user)
            if(!token) {
                return false;
            }

            localStorage.setItem('@Auth:token', token)
            setSigned(true)
            return true
        } catch (err) {
            setSigned(false)
            toast.error(`${err.response.data.error}`)
        }
    }

    const signOut = () => {
        setUser(null)
        setSigned(false)
        localStorage.removeItem('@Auth:token')
    }

    return (
        <AuthContext.Provider value={{ signed, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider >
    )
}