"use client"
import { HiUser } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaSortDown } from "react-icons/fa";


const Drawer = () => {
    return (
        <div className="w-full bg-blue-950 text-gray-300 font-semibold">
                <div
                    className={` h-screen xl:block hidden relative `}
                >
                    <div className={`h-screen flex flex-col justify-between overflow-hidden`}>
                        <div className="">
                            <div className="flex py-6 justify-between items-center pr-6 border-b-2 border-gray-500">
                                <div className="ms-5 mt-1 flex gap-2 items-center">
                                    <HiUser className="text-4xl" />
                                    <p>Hello, User</p>
                                </div>
                                <IoNotifications className="text-4xl" />
                            </div>
                            <div className="mt-4">

                                <div className="flex flex-col justify-between">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 bg-gray-900 px-6 py-2">
                                            <HiMiniChatBubbleBottomCenterText className="text-3xl" />
                                            <p className="flex justify-between w-full">
                                                <span
                                                    className={` rounded-md cursor-pointer font-semibold`}
                                                >
                                                    Discussion Fourm
                                                </span>
                                                <FaSortDown></FaSortDown>
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-600 px-6 py-2">
                                            <AiFillDollarCircle className="text-3xl" />
                                            <span
                                                className={` rounded-md cursor-pointer font-semibold`}
                                            >
                                                Market Stories
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-700 px-6 py-2">

                                            <span
                                                className={`ml-[38px] rounded-md cursor-pointer font-semibold`}
                                            >
                                                Sentiment
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-700 px-6 py-2">

                                            <span
                                                className={`ml-[38px] rounded-md cursor-pointer font-semibold`}
                                            >
                                                Market
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-700 px-6 py-2">

                                            <span
                                                className={`ml-[38px] rounded-md cursor-pointer font-semibold`}
                                            >
                                                Sector
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-700 px-6 py-2">

                                            <span
                                                className={`ml-[38px] rounded-md cursor-pointer font-semibold`}
                                            >
                                                Watchlist
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-700 px-6 py-2">

                                            <span
                                                className={`ml-[38px] rounded-md cursor-pointer font-semibold`}
                                            >
                                                Events
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 hover:bg-gray-700 px-6 py-2">

                                            <span
                                                className={`ml-[38px] rounded-md cursor-pointer font-semibold`}
                                            >
                                                News/Interview
                                            </span>
                                        </li>


                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Drawer;