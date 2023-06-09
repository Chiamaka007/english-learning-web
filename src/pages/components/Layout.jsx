import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <main className="bg-[#F6F8FE] h-full">{children}</main>
      <div className="footer self-end ">
        <div className="  flex justify-between bg-white rounded-full p-3 text-[#D3D3D3]">
          <Link href="/">
            <Icon
              icon="mdi:home-variant"
              width={30}
              className={`${router.pathname == "/" ? "text-[#6672BA]" : ""}`}
            />
          </Link>
          <Link href="/stats">
            <Icon
              icon="ion:stats-chart"
              width={30}
              className={`${
                router.pathname == "/stats" ? "text-[#6672BA]" : ""
              }`}
            />
          </Link>
          <Link href="/">
            <Icon icon="ic:round-people-alt" width={30} />
          </Link>
          <Link href="/">
            <Icon icon="material-symbols:settings" width={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
