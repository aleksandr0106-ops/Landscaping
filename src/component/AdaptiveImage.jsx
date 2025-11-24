import React, { useState, useEffect } from "react";

export default function AdaptiveImage({ desktop, tablet, mobile, alt, style, className }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let src = desktop;
  if (windowWidth < 1280) src = tablet;
  if (windowWidth < 800) src = mobile;

  return (
    <img
      src={src}
      alt={alt}
      style={{ ...style }}
      className={className}
    />
  );
}