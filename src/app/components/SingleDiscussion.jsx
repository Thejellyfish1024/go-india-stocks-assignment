import Image from 'next/image';
import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";
const SingleDiscussion = ({ discussion }) => {

    return (
        <div className='w-full pr-2 pb-2 bg-gray-300 rounded-lg shadow-xl'>
            <div className='w-full flex gap-3 border bg-white md:px-6 md:py-4 p-2 rounded-lg'>
                <Image
                    src={discussion?.image}
                    width={500}
                    height={500}
                    className='md:w-10 md:h-10 h-8 w-8'
                    alt='user'
                ></Image>
                <div className='space-y-2 w-full'>
                    <div className='flex justify-between'>
                        <p>
                            <span className='md:text-lg font-semibold'>{discussion?.name}</span>
                            <span className='bg-blue-800 text-white md:text-xs text-[10px] md:px-5 px-3 py-1 rounded-full md:ml-6 ml-3'>Sector {discussion?.sector}</span>
                        </p>
                        <p className='text-blue-500 font-semibold md:text-sm text-xs'>2 min ago</p>
                    </div>
                    <p className='md:w-[90%]'>{discussion?.description}</p>
                    <div className='flex justify-between md:w-4/5 text-sm'>
                        <p className='flex font-semibold items-center gap-1'>
                            <FaRegHeart className='text-xl'></FaRegHeart>
                            <span>2k</span>
                        </p>
                        <p className='flex font-semibold items-center gap-1'>
                            <FiEye className='text-xl'></FiEye>
                            <span>2k</span>
                        </p>
                        <p className='flex font-semibold items-center gap-1'>
                            <FaRegCommentAlt className='text-xl'></FaRegCommentAlt>
                            <span>2k Comments</span>
                        </p>
                        <p className='flex font-semibold items-center gap-1'>
                            <LuShare2 className='text-xl'></LuShare2>
                            <span>2k</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDiscussion;