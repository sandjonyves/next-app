import Image from "next/image";
import SideBar from "../pages/sideBar/SideBar";
import AvatrChild from "./components/AvatarChild";
import ButtonNew from "./components/ButtonNew";

export default function Home() {
  return (
     <main>
        <SideBar/>
        <div className="relative">
          {/* <AvatrChild child_name="Yves"/> */}
          <ButtonNew/>
        </div>
        

    </main>
  );
}
