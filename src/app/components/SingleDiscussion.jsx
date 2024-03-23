import Image from 'next/image';
import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
const SingleDiscussion = ({ discussion }) => {

    return (
        <div className='w-full pr-2 pb-2 bg-gray-300 rounded-lg shadow-xl'>
            <div className='w-full flex gap-3 border bg-white px-6 py-3 rounded-lg'>
                <Image
                    src={discussion?.image}
                    width={500}
                    height={500}
                    className='w-10 h-10'
                    alt='user'
                ></Image>
                <div className='space-y-2 w-full'>
                    <div className='flex justify-between'>
                        <p>
                            <span className='text-lg font-semibold'>{discussion?.name}</span>
                            <span className='bg-blue-800 text-white text-xs px-5 py-1 rounded-full ml-6'>Sector {discussion?.sector}</span>
                        </p>
                        <p className='text-blue-500 font-semibold text-sm'>2 min ago</p>
                    </div>
                    <p className='w-[90%]'>{discussion?.description}</p>
                    <div className='flex justify-between w-4/5'>
                        <p className='flex font-semibold items-center gap-1'>
                            <FaRegHeart className='text-xl'></FaRegHeart>
                            <span>2k</span>
                        </p>
                        <p className='flex font-semibold items-center gap-1'>
                            <FaRegHeart className='text-xl'></FaRegHeart>
                            <span>2k</span>
                        </p>
                        <p className='flex font-semibold items-center gap-1'>
                            <FaRegHeart className='text-xl'></FaRegHeart>
                            <span>2k</span>
                        </p>
                        <p className='flex font-semibold items-center gap-1'>
                            <FaRegHeart className='text-xl'></FaRegHeart>
                            <span>2k</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDiscussion;