import SingleDiscussion from './SingleDiscussion';

const Discussions = ({allDiscussions}) => {
    
    return (
        <div className='px-3 mb-6'>
            <h2 className='hidden lg:block uppercase text-2xl font-bold bg-slate-200 p-2 w-fit rounded-sm text-red-500'>Disscussions Fourm</h2>
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