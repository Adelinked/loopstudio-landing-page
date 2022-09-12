import { useEffect, useState, useMemo } from "react";
import throttle from "lodash.throttle";

export default ({ title }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window?.innerWidth);
  }, []);

  const handleResize = () => {
    setWindowWidth(window?.innerWidth);
  };

  const throttleResizeHandler = useMemo(
    () => throttle(handleResize, 300),
    [windowWidth]
  );

  useEffect(() => {
    window.addEventListener("resize", throttleResizeHandler);
    return function cleanup() {
      throttleResizeHandler?.cancel();
      window.removeEventListener("resize", throttleResizeHandler);
    };
  });

  return (
    <div className="creationPad">
      <img
        className="creationImage"
        src={`./images/${
          windowWidth > 375 ? "desktop" : "mobile"
        }/${title}.jpg`}
      />
      <p className="creationPadTitle">{title.toUpperCase()}</p>
    </div>
  );
};
