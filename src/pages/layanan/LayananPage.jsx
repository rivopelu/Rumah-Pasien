import { faAmbulance, faBedPulse, faGlassWaterDroplet, faHospital, faHospitalAlt, faWater } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AmbulancePage from './pages/AmbulancePage'
import GolonganDarah from './pages/GolonganDarah'
import RuangRawat from './pages/RuangRawat'


const LayananPage = () => {

    const dataLayanan = [
        { id: 1, title: 'ambulance', icon: faAmbulance, link: '/layanan/ambulance' },
        { id: 2, title: 'rawat inap', icon: faBedPulse, link: '/layanan/ruang-rawat' },
        { id: 3, title: 'darah', icon: faGlassWaterDroplet, link: '/layanan/darah' },
        { id: 4, title: 'IGD', icon: faHospitalAlt, link: '/layanan/igd' }
    ]


    return (



        <>
            <div className="layananPage containerMain">
                <h1 className='text-2xl font-bold lg:text-4xl lg:text-center lg:mt-3'>Layanan Kami</h1>

                <div className="cardLayanan mt-3 flex gap-3 justify-between lg:justify-center">
                    {
                        dataLayanan.map((item) => (

                            <NavLink to={item.link} className='bg-white flex border h-20 w-20 items-center justify-center rounded-lg shadow-lg hover:border-black/40 duration-200'>
                                <FontAwesomeIcon icon={item.icon} className='text-3xl text-blue-600' />
                            </NavLink>
                        ))
                    }
                </div>
                <div className='mt-3 text-xl'>

                    <Routes>
                        <Route path='/layanan/ambulance' element={<AmbulancePage />} />
                        <Route path='/layanan/ruang-rawat' element={<RuangRawat />} />
                        <Route path='/layanan/darah' element={<GolonganDarah />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default LayananPage