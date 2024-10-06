import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AnimatedBackground.css";

const AnimatedBackground = ({ clickCount }) => {
  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: `rgb(${clickCount % 255}, ${(clickCount * 2) % 255}, ${
        (clickCount * 3) % 255
      })`,
    }),
    [clickCount]
  );

  return <div className="animated-background" style={backgroundStyle}></div>;
};

AnimatedBackground.propTypes = {
  clickCount: PropTypes.number.isRequired,
};
export default AnimatedBackground;
