import * as C from './styles'
import logo from '../../assets/logopink.svg'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const SignUp = () => {
    const [perCent, setPercent] = useState(33.3);
    const { pathname } = useLocation(); 

    useEffect(() => {
        if(pathname === '/signup') {
            setPercent(25);
        } else if(pathname === '/signup/company-data') {
            setPercent(50);
        } else if(pathname === '/signup/address-data') {
            setPercent(75);
        } else if(pathname === '/signup/subscription-info') {
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
