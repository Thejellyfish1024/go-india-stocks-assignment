import Image from "next/image";

const SingleStory = ({story}) => {
    return (
        <div className="xl:p-5 lg:p-2 p-5 shadow-xl rounded-md space-y-2 lg:w-[90%]">
            <Image
            src={story?.image}
            alt="sunset"
            width={500}
            height={500}
            className="w-full"
            ></Image>
            <p className="font-semibold">{story?.name}</p>
            <p>{story?.description}</p>
        </div>
    );
};

export default SingleStory;