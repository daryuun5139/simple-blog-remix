import { useEffect, useState } from "react";

const ReturnPageTop = () => {
  const [scroll, setScroll] = useState(0);
  console.log(scroll);
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
      {scroll >= 500 ? (
        <a href="#header" id="page_top">
          PAGE TOP
        </a>
      ) : null}
    </>
  );
};

export default ReturnPageTop;
