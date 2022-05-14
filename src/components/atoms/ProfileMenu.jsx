import { faGear, faSignOut, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { USER_NAME_LOCAL } from '../../utils/utils'
import { BtnComp } from '../atoms'

const ProfileMenu = () => {


    const userName = USER_NAME_LOCAL


    const [drop, setDrop] = useState(false)

    const onClickDropdown = () => {
        setDrop(!drop)
    }


    const onClickLogout = () => {
        // alert('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('nama')
        localStorage.removeItem('username')
        window.location.href = window.location.href
    }

    const dropDownItem = [
        { id: 1, title: 'Profile', icon: faUser },
        { id: 2, title: 'Setting', icon: faGear }
    ]
    return (
        <div className='relativ'>
            <BtnComp onClick={onClickDropdown} title={


                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faUserCircle} className='text-xl' />
                    <div>{userName}</div>
                </div>
            } />

            <ul className={`${drop ? '' : 'hidden'} dropdownMenu absolute bg-white mt-4 w-40 shadow-lg`}>
                {
                    dropDownItem.map((item) => (

                        <li key={item.id} className='flex items-center justify-between px-5 py-2 hover:bg-[#80808044] border-b hover:border-text-abu border-white cursor-pointer '>
                            <p>{item.title}</p>
                            <FontAwesomeIcon icon={item.icon} />
                        </li>
                    ))

                }
                <li onClick={onClickLogout} className='flex items-center justify-between px-5 py-2 bg-[#f54e4e44] border-b hover:border-[#a03434ef] hover:bg-[#a03434ef]   border-[#f54e4e44] hover:text-white duration-200  cursor-pointer '>
                    <p>Logout</p>
                    <FontAwesomeIcon icon={faSignOut} />
                </li>
            </ul>
        </div>
    )
}

export default ProfileMenu