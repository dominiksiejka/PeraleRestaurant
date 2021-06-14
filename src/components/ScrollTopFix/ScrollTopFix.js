import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopFix = () => {
  const { pathname: currentLocation } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLocation]);

  return null;
};

export default ScrollTopFix;
