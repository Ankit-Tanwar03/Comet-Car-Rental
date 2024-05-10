import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollPositions = {
      "/": 0,
      "/about": 0,
      "/models": 0,
      "/testimonials": 0,
      "/contact": 0,
    };

    window.scrollTo(0, scrollPositions[pathname]);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
