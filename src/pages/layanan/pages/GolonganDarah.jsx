import React from 'react'
import { dataRelawanDonor } from '../../../utils/DataStokDarah'

const GolonganDarah = () => {
    const dataBankDarah = [
        { id: 1, name: "A", stok: 23 },
        { id: 2, name: "B", stok: 10 },
        { id: 3, name: "AB", stok: 12 },
        { id: 4, name: "O", stok: 62 },
    ]
    return (
        <div className=''>
            <div className='lg:my-10'>

                <h1 className='text-center  lg:text-3xl font-bold'>Darah</h1>
                <h1 className='text-center '>Daftar stok darah dan relawan pendonor</h1>
            </div>

            <div className='mx-auto mt-5 flex items-center justify-center flex-col w-full'>

                <h1 className='text-center bg-blue-100 py-2 lg:w-fit px-6 rounded-lg mb-6'>Data Bank Darah </h1>
                <div className='flex items-center  justify-between gap-3 lg:justify-center'>


                    {
                        dataBankDarah.map((item) => (
                            <div className="card border border-gray-300 bg-white rounded-lg w-20 h-20  px-3 py-3 shadow-md mt-3 lg:mt-0 flex items-center justify-center">

                                <div className="kanan flex flex-col justify-cente items-center justify-center">
                                    <h1 className=' font-bold'>{item.name}</h1>

                                    <p className='text-sm'>{item.stok}</p>

                                </div>
                            </div>
                        ))
                    }
                </div>


                <div className=''>
                    <div className='my-10 flex items-center justify-center'>

                        <h1 className='text-center bg-blue-100 py-2 lg:w-fit px-6 rounded-lg'>Relawan Pendonor</h1>
                    </div>
                    <div className='lg:flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-3'>


                        {
                            dataRelawanDonor.map((item) => (
                                <div key={item.id} className="card border border-gray-300 bg-white rounded-lg lg:w-[40%]  px-3 py-2 shadow-md mt-3 lg:mt-0 flex">

                                    <div className="kanan ml-4 flex flex-col justify-center">
                                        <h1 className=' font-bold'>{item.name}</h1>
                                        <div className='flex  gap-1 items-center'>
                                            <p className='text-sm'>Ketersedian</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default GolonganDarah