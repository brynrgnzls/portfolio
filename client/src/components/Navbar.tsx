import { ReactSVG } from "react-svg";
import homeAccent from "../assets/home_accent_30x30.svg";
import homeGray from "../assets/home_gray_30x30.svg";
import infoAcecnt from "../assets/info_accent_30x30.svg";
import infoGray from "../assets/info_gray_30x30.svg";
import codeAccent from "../assets/code_accent_30x30.svg";
import codeGray from "../assets/code_gray_30x30.svg";
import contactAccent from "../assets/contact_accent_30x30.svg";
import contactGray from "../assets/contact_gray_30x30.svg";
import React, { memo, useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState<NavStateProps>("home");

  const handleSetActiveNav = (nav: NavStateProps) => {
    setActiveNav(nav);
  };
  return (
    <NavLayout>
      <NavButton
        src={homeGray}
        activeSrc={homeAccent}
        active={activeNav === "home"}
        setNavHandler={handleSetActiveNav.bind(null, "home")}
      >
        Home
      </NavButton>
      <NavButton
        src={infoGray}
        activeSrc={infoAcecnt}
        active={activeNav === "info"}
        setNavHandler={handleSetActiveNav.bind(null, "info")}
      >
        Info
      </NavButton>
      <NavButton
        src={codeGray}
        activeSrc={codeAccent}
        active={activeNav === "project"}
        setNavHandler={handleSetActiveNav.bind(null, "project")}
      >
        Project
      </NavButton>
      <NavButton
        src={contactGray}
        activeSrc={contactAccent}
        active={activeNav === "contact"}
        setNavHandler={handleSetActiveNav.bind(null, "contact")}
      >
        Contact
      </NavButton>
    </NavLayout>
  );
}

function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed bottom-0 z-50 w-full bg-accent pt-0.5 sm:hidden">
      <div className="relative flex justify-stretch bg-dark-950 after:absolute after:inset-0 after:-z-10 after:bg-accent after:blur-lg">
        {children}
      </div>
    </nav>
  );
}

function NavButton({
  children,
  src,
  activeSrc,
  active = false,
  setNavHandler,
}: NavButtonProp) {
  const handleNavChange = () => {
    setNavHandler();
  };
  return (
    <div
      className="-pt-0.5 relative flex flex-grow basis-0 flex-col items-center justify-center gap-2 p-2 text-xs text-[#3d3d3d] hover:cursor-pointer hover:bg-[#171717]"
      onClick={handleNavChange}
    >
      <ReactSVG src={active ? activeSrc : src} />
      {children}
    </div>
  );
}

//  Types
type NavStateProps = "home" | "info" | "project" | "contact";

interface NavButtonProp {
  children: React.ReactNode;
  src: string;
  activeSrc: string;
  active: boolean;
  setNavHandler: () => void;
}

export default memo(Nav);
