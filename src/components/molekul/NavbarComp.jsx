import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BrandLogo, BtnComp } from '../atoms'
// import ProfileMenu from './ProfileMenu'
import './style/Navbar.scss'
import { ProfileMenu } from '../atoms'


const NavbarComp = () => {
    const [color, setColor] = useState(false)


    const token = localStorage.getItem('token')
    console.log(token)




    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    const [klikToggle, setKlikToggle] = useState(true)

    const onClickToggle = () => {
        setKlikToggle(!klikToggle)

    }

    const NavbarLink = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Layanan', link: '/layanan' },

    ]
    return (
        <div className={`fixed  z-40 navbarComp py-3 border-b ${color ? 'border-ijo' : 'border-base'} bg-white`}>
            <div className="containerMain  w-screen flex justify-between ">

                <Link to='/' className="brand lg:text-2xl ">
                    <BrandLogo />
                </Link>
                <div id="navMenu" onClick={onClickToggle} className={`${klikToggle ? '' : 'active'} z-50`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`kanan ${klikToggle ? '' : 'kanan-active'} flex lg:items-center`}>
                    <ul className='navlist lg:flex lg:gap-3'>
                        {
                            NavbarLink.map((item) => (

                                <li key={item.id}><NavLink activeClassName='active ' className='lg:hover:text-main-orange duration-200' to={item.link}>{item.title}</NavLink></li>
                            ))
                        }
                    </ul>
                    <div className='lg:px-10'>
                        <span className='garisTengahNavbar'></span>
                    </div>
                    <ul className='login-register  gap-1 lg:gap-3  flex  lg:items-center pl-[20px] lg:pl-0 '>
                        {(() => {
                            if (!token) {
                                return (
                                    <KananAuth />
                                )
                            } else {
                                return (

                                    <ProfileMenu />
                                )
                            }
                        })()}

                    </ul>

                </div>
            </div>
        </div >
    )
}

export default NavbarComp


const KananAuth = () => {
    return (
        <>
            <li><Link className={'hover:text-main-orange duration-200 p-0'} to={'/register'}>Daftar</Link></li>
            <li><Link to={'/login'}><BtnComp title={'masuk'} /></Link></li>

        </>
    )
}

