import { useEffect, useState } from "react";

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 992,
};

const checkIsDesktop = (width) => width > BREAKPOINTS.TABLET;
const checkIsTablet = (width) => width <= BREAKPOINTS.TABLET && width > BREAKPOINTS.MOBILE;
const checkIsMobile = (width) => width <= BREAKPOINTS.MOBILE;

const useResponsive = () => {
  const [innerWidth, setInnerWidth] = useState();
  const [isDesktop, setIsDesktop] = useState(checkIsDesktop(innerWidth));
  const [isTablet, setIsTablet] = useState(checkIsTablet(innerWidth));
  const [isMobile, setIsMobile] = useState(checkIsMobile(innerWidth));

  function handleResize() {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", () => handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth) {
      setIsDesktop(checkIsDesktop(innerWidth));
      setIsTablet(checkIsTablet(innerWidth));
      setIsMobile(checkIsMobile(innerWidth));
    }
  }, [innerWidth]);

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};

export default useResponsive;
