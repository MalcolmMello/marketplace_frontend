import * as C from './styles'
import logo from '../../assets/logopink.svg'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const SignUp = () => {
    const [perCent, setPercent] = useState(33.3);
    const { pathname } = useLocation(); 

    useEffect(() => {
        if(pathname == '/signup') {
            setPercent(33.3);
        } else if(pathname == '/signup/company-data') {
            setPercent(66.6);
        } else if(pathname == '/signup/address-data') {
            setPercent(100);
        }
    }, [pathname])

    return (
        <C.SignUp percent={perCent}>
            <header>
                <img src={logo} alt="Windpet Logo" />
            </header>
            <div className='border'></div>
            <Outlet />
        </C.SignUp>
    )
}
