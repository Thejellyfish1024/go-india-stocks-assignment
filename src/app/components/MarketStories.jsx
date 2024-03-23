import SingleStory from "./SingleStory";

const MarketStories = ({allMarketStories}) => {
    return (
        <div>
            <h2 className='hidden md:block uppercase text-xl font-bold bg-slate-200 p-2 w-fit rounded-sm text-red-500'>Market Stories</h2>
            <div className="flex flex-col gap-5 p-4 md:p-0">
                {
                    allMarketStories?.map(story => <SingleStory
                        key={story?.id}
                        story={story}
                    ></SingleStory>)
                }
            </div>
        </div>
    );
};

export default MarketStories;