import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./styles.css";

const GoToTop = () => {
  const [goToTop, setGoToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    });
  }, []);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="top-btn" onClick={goToBtn}>
      {goToTop && <FaArrowUp className="button-style" />}
    </div>
  );
};

export default GoToTop;
