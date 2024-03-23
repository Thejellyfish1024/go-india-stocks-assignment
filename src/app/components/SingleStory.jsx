import Image from "next/image";

const SingleStory = ({story}) => {
    return (
        <div className="p-5 shadow-xl rounded-md space-y-2 md:w-[90%]">
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