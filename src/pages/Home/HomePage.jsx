import { faAmbulance, faBed, faHospital, faHospitalSymbol, faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { MedicHome } from "../../img";

const HomePage = () => {

    const dataLayanan = [
        { icon: faHospital, title: 'ketersediaan stok darah' },
        { icon: faAmbulance, title: 'Layanan Ambulance' },
        { icon: faHospitalUser, title: 'Layanan UGD' },
        { icon: faBed, title: 'Ketersediaan Ruang inap' },
    ]

    return (
        <div className="HomePage">
            <div className="containerMain flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center min-h-[90vh] ">
                <div className="kiri pt-6 lg:pt-0 lg:w-[40%]">
                    <img src={MedicHome} alt="" />
                </div>
                <div className="kanan pt-5 lg:pt-0 lg:w-[60%] lg:pr-10">
                    <h1 className="text-xl font-bold pb-3 lg:text-5xl ">Hay Selemat Datang Di Layanan RumahPasien</h1>
                    <p className="text-gray-500">
                        Temukan berbagai manfaat menarik dalam pelayanan public di bidang kesehatan di aplikasi RumahPasien
                    </p>

                    <div className="flex flex-col lg:flex-row flex-wrap gap-3 pt-5 ">
                        {
                            dataLayanan.map((item) => (

                                <div className="card flex  items-center gap-3 w-full border border-gray-200 hover:border-blue-500 hover:-translate-y-1 duration-200 px-2 relative text-center justify-center lg:w-80 rounded-sm py-1 cursor-pointer ">
                                    <FontAwesomeIcon icon={item.icon} className={'absolute left-5 text-blue-500'} />
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
