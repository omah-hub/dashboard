import React, { ReactNode } from "react";
import Nav from "../general/sidebar";
import Sidebar from "../general/sidebar";


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div className="bg-slate-900 flex max-w-screen overflow-hidden min-h-screen">
        <div className="w-[200px] bg-black pt-10 ">
          <Sidebar />
        </div>
        <div className="pt-10">{children}</div>
      </div>
    );
}
export default MainLayout;
