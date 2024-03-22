"use client"
import React, { useEffect, useState } from 'react';
import SingleDiscussion from './SingleDiscussion';

const Discussions = () => {
    const [allDiscussions, setAllDiscussions] = useState([]);

    useEffect(() => {
        fetch('/dummy.json')
            .then(res => res?.json())
            .then(data => {
                // console.log(data);
                setAllDiscussions(data)
            })
    }, [])
    return (
        <div className='px-3'>
            <h2 className='text-2xl font-bold bg-slate-200 p-2 w-fit rounded-sm text-red-500'>Disscussions Fourm</h2>
            <div className='flex flex-col gap-4 mt-8'>
                {
                    allDiscussions?.map(discussion =>
                        <SingleDiscussion
                            key={discussion?.id}
                            discussion={discussion}
                        ></SingleDiscussion>)
                }
            </div>
        </div>
    );
};

export default Discussions;