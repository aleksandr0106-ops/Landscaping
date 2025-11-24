import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Хук для определения ширины окна
function useActiveBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}

export default function Navbar() {
  const { width } = useActiveBreakpoint();

  // Определяем размеры и шрифты по брейкпоинтам
  let navHeight = "200px";
  let logoFontSize = "32px";
  let linkFontSize = "26px";
  let linkGap = "10px";
  let paddingRight = "20px";

  if (width < 1280 && width >= 800) { // планшет
    navHeight = "160px";
    logoFontSize = "28px";
    linkFontSize = "22px";
    linkGap = "8px";
    paddingRight = "15px";
  } else if (width < 800) { // мобильные
    navHeight = "120px";
    logoFontSize = "24px";
    linkFontSize = "18px";
    linkGap = "5px";
    paddingRight = "10px";
  }

  return (
    <nav
      style={{
        width: "100%",
        height: navHeight,
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: "border-box",
        fontFamily: "'Figtree', sans-serif",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      {/* Левый верхний угол */}
      <div
        style={{
          fontSize: logoFontSize,
          margin: "10px",
        }}
      >
        A. D. P.
      </div>

      {/* Правая навигация по вертикали по центру */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: linkGap,
          fontSize: linkFontSize,
          marginRight: paddingRight,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>Главная</Link>
        <Link to="/gallery" style={{ textDecoration: "none", color: "black" }}>Галерея</Link>
        <Link to="/services" style={{ textDecoration: "none", color: "black" }}>Услуги</Link>
      </div>
    </nav>
  );
}