"use client"
import { useState } from "react";
import Discussions from "./components/Discussions";
import Drawer from "./components/Drawer";
import { FaCaretRight } from "react-icons/fa";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <main>
      <div className="flex max-h-screen overflow-y-auto">
        {/* Drawer */}
        <div className={`h-screen sticky top-0  transition-width duration-300
           ${openDrawer ? " w-[550px]" : "w-0"} `}>
          <Drawer></Drawer>
        </div>
        {/* Drawer toggle button */}
        <div className="bg-slate-200 h-screen flex items-center">
          <button onClick={() => setOpenDrawer(!openDrawer)} className=" w-fit py-10 bg-blue-950">
            <FaCaretRight className="text-2xl text-white" />
          </button>
        </div>
        {/* Discussions section */}
        <div className="w-full">
          <Discussions></Discussions>
        </div>
        {/* Market Stories section */}
        <div className="w-2/5 bg-green-500">s</div>
      </div>
    </main>
  );
}
