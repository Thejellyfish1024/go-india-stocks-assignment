"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUser } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";

const Drawer = () => {
    const pathname = usePathname();
    return (
        // <div className="w-full bg-gray-700 text-[#FFF] font-semibold">
        //     This is drawer
        // </div>
        <div className="sticky top-0 bg-gray-700 text-gray-300 font-semibold">
            <div className="relative">
                <div
                    className={`mr-2 h-screen xl:block hidden border-r-2 relative `}
                >
                    <div className="h-screen flex flex-col justify-between">
                        <div className="">
                            <div className="flex py-6 justify-between items-center pr-6 border-b-2 border-gray-500">
                                <div className="ms-5 mt-1 flex gap-2 items-center">
                                    <HiUser className="text-4xl" />
                                    <p>Hello, User</p>
                                </div>
                                <IoNotifications className="text-4xl" />
                            </div>
                            <div className="mt-4 space-y-2 px-6">

                                <div className="flex flex-col justify-between">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <HiMiniChatBubbleBottomCenterText className="text-3xl" />
                                            <Link
                                                className={` ${pathname == "/dashboard"
                                                    ? "active"
                                                    : "inactive"
                                                    } rounded-md cursor-pointer font-semibold`}
                                                href="/dashboard"
                                            >
                                                Discussion Fourm
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`flex items-center  gap-x-4 ${pathname ==
                                                    "/dashboard/tasks"
                                                    ? "active"
                                                    : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                href="/dashboard/tasks"
                                            >

                                                Tasks
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className={`flex items-center  gap-x-4 ${pathname ==
                                                    "/dashboard/members"
                                                    ? "active"
                                                    : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                href="/dashboard/members"
                                            >
                                                <div className="flex items-center">

                                                    <p>Members</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className={`flex items-center gap-x-4  ${pathname ==
                                                    "/dashboard/profile"
                                                    ? "active"
                                                    : "inactive"
                                                    } px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                href="/dashboard/profile"
                                            >

                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`flex items-center  gap-x-4 ${pathname ==
                                                    "/dashboard/meeting"
                                                    ? "active"
                                                    : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                href="/dashboard/meeting"
                                            >
                                                <div className="flex items-center">

                                                    <p>Meeting</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`flex items-center  gap-x-4 ${pathname ==
                                                    "/dashboard/add-feedback"
                                                    ? "active"
                                                    : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                href="/dashboard/add-feedback"
                                            >
                                                <div className="flex items-center">

                                                    <p>Add Feedback</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div

                            className="relative ms-6 me-6 bg-secondary/15 border-2 border-secondary flex flex-col items-center justify-between rounded-xl px-6 py-8 gap-3"
                        >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;