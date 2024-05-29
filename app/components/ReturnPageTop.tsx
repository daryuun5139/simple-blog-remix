import { useEffect, useState } from "react";

const ReturnPageTop = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const { innerHeight: height, innerWidth: width } = window;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    }
  }, []);

  return (
    <>
      {scroll >= 1000 ? (
        <a href="#header" id="page_top">
          <span>PAGE TOP</span>
        </a>
      ) : null}
    </>
  );
};

export default ReturnPageTop;
