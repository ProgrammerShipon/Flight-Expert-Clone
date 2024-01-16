import { useEffect, useState } from "react";
import Identity from "../../Components/Identity";
import { barsIcon } from "../../Utils/all-icons-svg";
import HeaderRightSide from "./HeaderRightSide";
import SideNav from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 300) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center min-w-full bg-white py-2">
        <div>
          <Identity />
        </div>

        <ul className="hidden md:flex items-center gap-4">
          <HeaderRightSide />
        </ul>

        {/* toggle button */}
        <button onClick={toggle} className="lg:hidden text-blue py-5 px-3">
          <span className="text-3xl">{barsIcon}</span>
        </button>

        {/* side navbar */}
        <SideNav isOpen={isOpen} toggle={toggle} />
      </nav>
    </div>
  );
};

export default Header;
