import Drawer from "./components/Drawer";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="w-[45%]">
          <Drawer></Drawer>
        </div>
        <div className="w-full bg-blue-500">s</div>
        <div className="w-2/5 bg-green-500">s</div>
      </div>
    </main>
  );
}
