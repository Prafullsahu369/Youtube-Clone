import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/Authprovider";
import ListItems from "./ListItems";

function Home() {
  const { data } = useAuth();
  console.log(data);

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
        <ListItems/>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5 ">
          {data.map((items) => {
            if (items.type !== "video") return false;
            return <Video key={items.id} video={items?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
