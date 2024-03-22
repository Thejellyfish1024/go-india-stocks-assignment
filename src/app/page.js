import Discussions from "./components/Discussions";
import Drawer from "./components/Drawer";
import { FaCaretRight } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="w-[43%] h-screen flex">
          <Drawer></Drawer>
          <div className="bg-slate-200 h-full flex items-center">
            <button className=" w-fit py-10 bg-blue-950">
              <FaCaretRight className="text-2xl text-white" />
            </button>
          </div>

        </div>
        <div className="w-full">
          <Discussions></Discussions>
        </div>
        <div className="w-2/5 bg-green-500">s</div>
      </div>
    </main>
  );
}
