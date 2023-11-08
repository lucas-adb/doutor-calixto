import React from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./headerMobile";

export function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 960;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <header className="flex container header-mobile bg-light">
      <HeaderMobile />
    </header>
  ) : (
    <header className="flex container header-desktop bg-light">
      <HeaderDesktop />
    </header>
  );
}
