
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../context/auth'
import { Fragment, useContext, useState } from 'react'
// import Particles from '../../components/particles/Particles'
import css from '../login/login.module.css'

export default function Login() {
    const navigation = useNavigate()
    const { signIn } = useContext(AuthContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (login === '' || password === '') {
            console.error('Usuário ou senha inválidos.')
        }

        const result = await signIn(login, password)
        if (result) {
            navigation('/estrategias')
            return;
        }
    }

    return (
        <div className={css.backgroundLogin} >
            <Fragment>
                {/* <Particles /> */}

                <form onSubmit={handleSubmit} method="post">
                    <span> <ToastContainer /></span>
                    <div className={css.display}>
                        <div className={css.login}>
                            <div className={css.logoBg}>
                                <img src="/logo.png" alt="Logo Grupo Mais Valor" />
                            </div>

                            <div className={css.contentLogin}>
                                <label htmlFor='login'>Seu login</label>
                                <div className={css.field}>
                                    <span className={`large material-icons ${css.materialIcons}`}>person</span>
                                    <input type="text" id='login' name="email" placeholder='Informe seu login' onChange={
                                        (e) => setLogin(e.target.value)
                                    } />
                                </div>
                            </div>

                            <div className={css.contentPassword}>
                                <label htmlFor='senha'>Senha</label>
                                <div className={css.field}>
                                    <span className={`large material-icons ${css.materialIcons}`}>lock</span>
                                    <input
                                        type="password"
                                        id='senha'
                                        name="senha"
                                        placeholder='Informe sua senha'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={css.contentSubmit}>
                                <button type='submit' >Acessar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        </div>
    )
}