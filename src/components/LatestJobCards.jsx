import React from 'react'
import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

const LatestJobCards = () => {
    // const navigate = useNavigate();
    return (
        <div className='rounded-xl  bg-gray-300 m-1 border-red w-4/5 pl-4'>
        {/* // <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'> */}
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit am
                Assumenda</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold rounded'} variant="ghost">Positions</Badge>
                <Badge className={'text-[#F83002] font-bold rounded'} variant="ghost">Job Type</Badge>
                <Badge className={'text-[#7209b7] font-bold rounded'} variant="ghost">40 LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards  