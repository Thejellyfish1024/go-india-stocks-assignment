"use client"
import { useEffect, useState } from "react";
import Discussions from "./components/Discussions";
import Drawer from "./components/Drawer";
import { FaCaretRight } from "react-icons/fa";
import MarketStories from "./components/MarketStories";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [allDiscussions, setAllDiscussions] = useState([]);
  const [allMarketStories, setAllMarketStories] = useState([]);
  const [contents, setContents] = useState("discussions");

  useEffect(() => {
    fetch('/dummy.json')
      .then(res => res?.json())
      .then(data => {
        // console.log(data);
        setAllDiscussions(data)
      })
  }, [])

  useEffect(() => {
    fetch('/market-stories.json')
      .then(res => res?.json())
      .then(data => {
        // console.log(data);
        setAllMarketStories(data)
      })
  }, [])

  return (
    <main>
      <div className="flex max-h-screen overflow-y-auto">
        {/*  */}
        {/* For large devices */}
        {/*  */}

        {/* Drawer */}
        <div className={`hidden lg:block h-screen sticky top-0  transition-width duration-300
           ${openDrawer ? "lg:w-[550px] xl:w-[630px]" : "w-0"} `}>
          <Drawer></Drawer>
        </div>
        {/* Drawer toggle button */}
        <div className={`h-screen hidden lg:flex sticky top-0   items-center ${openDrawer ? "bg-slate-200" : ""}`}>
          <button onClick={() => setOpenDrawer(!openDrawer)} className=" w-fit py-10 bg-blue-950">
            <FaCaretRight className="text-2xl text-white" />
          </button>
        </div>
        {/* Discussions section */}
        <div className="w-full pt-2 ml-2 hidden lg:block">
          <Discussions allDiscussions={allDiscussions}></Discussions>
        </div>
        {/* Market Stories section */}
        <div className="w-2/5 pt-2 ml-4 hidden lg:block">
          <MarketStories allMarketStories={allMarketStories}></MarketStories>
        </div>

        {/*  */}
        {/* For small devices */}
        {/*  */}

        <div className="lg:hidden">
          {/* toggle bar */}
          <div className="font-semibold flex w-screen">
            <button onClick={() => setContents("discussions")}
              className={` text-white w-full py-3 ${contents === "discussions" ? "bg-blue-950 border-b-2 border-red-500" : "bg-blue-800"}`}>
              Disscussion Fourm
            </button>
            <button onClick={() => setContents("stories")}
              className={` text-white w-full py-3 ${contents === "stories" ? "bg-blue-950 border-b-2 border-red-500" : "bg-blue-800"}`}>
              Market Stories
            </button>
          </div>
          {/* Discussions section */}
          {
            contents === "discussions" &&
            <Discussions allDiscussions={allDiscussions}></Discussions>
          }
            {/* Market Stories section */}
          {
            contents === "stories" &&
            <MarketStories allMarketStories={allMarketStories}></MarketStories>
          }
          {/* drawer for small devices */}
          <div className={`absolute w-64 md:w-96   top-0 flex transition-all duration-300
           ${openDrawer ? "left-0" : "-left-[237px] md:-left-[365px]"} `}>
            <Drawer></Drawer>
            <div className={`h-screen top-0 flex items-center ${openDrawer ? "bg-slate-200" : ""}`}>
              <button onClick={() => setOpenDrawer(!openDrawer)} className=" w-fit py-8 bg-blue-950">
                <FaCaretRight className="text-xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
