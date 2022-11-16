import * as C from './styles'
import logo from '../../assets/logopink.svg'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const SignUp = () => {
    const [perCent, setPercent] = useState(33.3);
    const { pathname } = useLocation(); 

    useEffect(() => {
        if(pathname == '/') {
            setPercent(33.3);
        } else if(pathname == '/company-data') {
            setPercent(66.6);
        } else if(pathname == '/address-data') {
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
