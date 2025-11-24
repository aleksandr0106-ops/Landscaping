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

export default function Footer() {
  const { width } = useActiveBreakpoint();

  // Адаптивные параметры
  let footerHeight = "468px";
  let logoFontSize = "32px";
  let linkFontSize = "18px";
  let gapBetweenLinks = "10px";
  let mainGap = "300px";
  let contactFontSize = "18px";
  let bottomFontSize = "20px";
  let padding = "40px";

  if (width < 1280 && width >= 800) { // планшет
    footerHeight = "380px";
    logoFontSize = "28px";
    linkFontSize = "16px";
    gapBetweenLinks = "8px";
    mainGap = "150px";
    contactFontSize = "16px";
    bottomFontSize = "18px";
    padding = "30px";
  } else if (width < 800) { // мобильные
    footerHeight = "320px";
    logoFontSize = "24px";
    linkFontSize = "14px";
    gapBetweenLinks = "6px";
    mainGap = "0px";
    contactFontSize = "14px";
    bottomFontSize = "16px";
    padding = "20px";
  }

  return (
    <footer
      style={{
        width: "100%",
        height: footerHeight,
        backgroundColor: "#1D231C",
        color: "white",
        boxSizing: "border-box",
        padding: padding,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Figtree', sans-serif",
      }}
    >
      {/* Верхняя часть */}
      <div
        style={{
          display: "flex",
          justifyContent: width < 800 ? "center" : "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: width < 800 ? "20px" : mainGap,
        }}
      >
        {/* Логотип */}
        <div style={{ fontSize: logoFontSize, textAlign: width < 800 ? "center" : "left" }}>
          A. D. P.
        </div>

        {/* Навигация и контакты */}
        <div
          style={{
            display: "flex",
            flexDirection: width < 800 ? "column" : "row",
            gap: width < 800 ? "20px" : mainGap,
            width: width < 800 ? "100%" : "auto",
            alignItems: width < 800 ? "center" : "flex-start",
          }}
        >
          {/* Навигация */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: gapBetweenLinks,
              alignItems: width < 800 ? "center" : "flex-start",
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: linkFontSize }}>Главная</Link>
            <Link to="/gallery" style={{ color: "white", textDecoration: "none", fontSize: linkFontSize }}>Галерея</Link>
            <Link to="/services" style={{ color: "white", textDecoration: "none", fontSize: linkFontSize }}>Услуги</Link>
          </div>

          {/* Контакты */}
          <div
            style={{
              textAlign: width < 800 ? "center" : "right",
              fontSize: contactFontSize,
            }}
          >
            <span>ул. Лесная, 15</span><br />
            <span>г. Москва</span><br />
            <span>Россия, 125040</span><br />
            <span>adp@company.ru</span><br />
            <span>+7 (495) 123-45-67</span>
          </div>
        </div>
      </div>

      {/* Нижняя часть */}
      <div
        style={{
          display: "flex",
          justifyContent: width < 800 ? "center" : "space-between",
          alignItems: "center",
          flexDirection: width < 800 ? "column" : "row",
          gap: width < 800 ? "10px" : "0",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="https://logo-teka.com/telegram/" target="_blank" rel="noreferrer">
            <img src="https://logo-teka.com/wp-content/uploads/2025/06/telegram-logo.svg" style={{ width: 24 }} />
          </a>
          <a href="https://logo-teka.com/vk/" target="_blank" rel="noreferrer">
            <img src="https://logo-teka.com/wp-content/uploads/2025/06/vk-logo.svg" style={{ width: 24 }} />
          </a>
          <a href="https://logo-teka.com/max/" target="_blank" rel="noreferrer">
            <img src="https://logo-teka.com/wp-content/uploads/2025/07/max-messenger-sign-logo.svg" style={{ width: 24 }} />
          </a>
        </div>

        <div style={{ fontSize: bottomFontSize, marginTop: width < 800 ? "10px" : "0" }}>
          © 2025 Все права защищены.
        </div>
      </div>
    </footer>
  );
}