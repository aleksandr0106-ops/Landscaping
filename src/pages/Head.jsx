import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function useActiveBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { width };
}


function AdaptiveImage({ desktop, tablet, mobile, width, height }) {
  const { width: windowWidth } = useActiveBreakpoint();

  let src = desktop;
  if (windowWidth < 1280) src = tablet;
  if (windowWidth < 800) src = mobile;

  return (
    <div style={{ width, height, overflow: "hidden" }}>
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}


function Overlay({ title, subtitle, width, height, top, bottom }) {
  const defaultBg = "#1D231C";

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: top ?? "auto",
        bottom: bottom ?? "auto",
        width,
        height,
        background: defaultBg,
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E6D0B")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = defaultBg)}
    >
      <div style={{ fontSize: "20px",  }}>{title}</div>
      <div style={{ fontSize: "16px", opacity: 0.8 }}>{subtitle}</div>
    </div>
  );
}


function Block1() {
  return (
    <div style={{ position: "relative", width: "100%", height: "762px", marginBottom: 136 }}>
      <AdaptiveImage
        desktop="http://azargd100g.temp.swtest.ru/imges/Image-section.png"
        tablet="http://azargd100g.temp.swtest.ru/imges/Image-section-1.png"
        mobile="http://azargd100g.temp.swtest.ru/imges/Image-section-2.png"
        width="100%"
        height="100%"
      />

      <Overlay
        title="Жизнь на открытом воздухе переосмыслена"
        subtitle="Дизайн патио и наружное освещение 2025"
        width={320}
        height={250}
        bottom="0"
      />
    </div>
  );
}


function Block2() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "640px", margin: "0 auto" }}>
      <AdaptiveImage
        desktop="http://azargd100g.temp.swtest.ru/imges/Project-Link.png"
        tablet="http://azargd100g.temp.swtest.ru/imges/Project-Link-1.png"
        mobile="http://azargd100g.temp.swtest.ru/imges/Project-Link-2.png"
        width="100%"
        height="662px"
      />

      <Overlay
        title="Садовое искусство в полном расцвете"
        subtitle="Дизайн сада, посадка растений, цветочные композиции 2025"
        width={320}
        height={250}
        top="0"
      />
      <div style={{ maxWidth: "640px", margin: "20px auto", fontSize: "18px", lineHeight: "1.6" }}>
        <p>
          Вот уже более трёх десятилетий наша преданная своему делу команда создаёт шедевры...
        </p>

        <Link
          to="/gallery"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#1D231C",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "0.3s",
            marginTop: "20px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#D2FD9C";
            e.currentTarget.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#1D231C";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Просмотреть Галерею
        </Link>
      </div>
    </div>
  );
}


function Block3() {
  const { width } = useActiveBreakpoint();
  const isMobile = width < 800;

  return (
    <div
      style={{
        marginTop: "136px",
        display: "flex",
        flexWrap: isMobile ? "wrap" : "nowrap",
        justifyContent: isMobile ? "center" : "space-around",
        gap: "20px",
      }}
    >

      <div style={{ position: "relative", width: isMobile ? "100%" : "780px", height: "662px" }}>
        <AdaptiveImage
          desktop="http://azargd100g.temp.swtest.ru/imges/Project-link-7.png"
          tablet="http://azargd100g.temp.swtest.ru/imges/Project-link-8.png"
          mobile="http://azargd100g.temp.swtest.ru/imges/Project-link-9.png"
          width="100%"
          height="100%"
        />

        <Overlay
          title="Вдохновение для вашего сада"
          subtitle="Ландшафтный дизайн, освещение 2025"
          width={320}
          height={250}
          top="0"
        />
      </div>


      <div
        style={{
          position: "relative",
          width: "325px",
          height: "331px",
          marginTop: isMobile ? "0" : "180px",
        }}
      >
        <AdaptiveImage
          desktop="http://azargd100g.temp.swtest.ru/imges/Project-link-10.png"
          tablet="http://azargd100g.temp.swtest.ru/imges/Project-link-11.png"
          mobile="http://azargd100g.temp.swtest.ru/imges/Project-link-12.png"
          width="100%"
          height="100%"
        />

        <Overlay
          title="Элегантность структурированного сада"
          subtitle="Формальный дизайн сада 2025"
          width={325}
          height={125}
          top="0"
        />
      </div>
    </div>
  );
}


function Block4() {
  return (
    <div style={{ marginTop: "144px", position: "relative", width: "100%", maxWidth: "1500px", height: "662px", marginInline: "auto" }}>
      <AdaptiveImage
        desktop="http://azargd100g.temp.swtest.ru/imges/Project-link-13.png"
        tablet="http://azargd100g.temp.swtest.ru/imges/Project-link-14.svg"
        mobile="http://azargd100g.temp.swtest.ru/imges/Project-link-15.svg"
        width="100%"
        height="100%"
      />

      <Overlay
        title="Эстетика и функциональность в каждом проекте"
        subtitle="Дизайн открытых пространств 2025"
        width={320}
        height={250}
        top="0"
      />
    </div>
  );
}


function Block5() {
  const { width } = useActiveBreakpoint();
  const isMobile = width < 800;

  return (
    <div style={{ marginTop: "122px" }}>
      <div
        style={{
          position: "relative",
          width: isMobile ? "300px" : "325px",
          height: isMobile ? "300px" : "325px",
          marginInline: isMobile ? "auto" : "110px",
        }}
      >
        <AdaptiveImage
          desktop="http://azargd100g.temp.swtest.ru/imges/Project-Link-16.png"
          tablet="http://azargd100g.temp.swtest.ru/imges/Project-Link-17.png"
          mobile="http://azargd100g.temp.swtest.ru/imges/Project-Link-18.png"
          width="100%"
          height="100%"
        />

        <Overlay
          title="Гармония камня и листвы"
          subtitle="Дизайн посадки, выбор растений 2025"
          width={isMobile ? 300 : 325}
          height={isMobile ? 125 : 125}
          top="0"
        />
      </div>


      <div
        style={{
          maxWidth: "300px",
          marginInline: isMobile ? "auto" : "110px",
          textAlign: isMobile ? "center" : "left",
          marginTop: "20px",
          marginBottom: "80px",
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Мы предлагаем полный спектр услуг, включая проектирование, установку и обслуживание.
          Ознакомьтесь с нашим перечнем услуг, чтобы узнать, как мы можем преобразить ваше открытое пространство.
        </p>

        <Link
          to="/services"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#1D231C",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            transition: "0.3s",
            marginTop: "20px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#D2FD9C";
            e.currentTarget.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#1D231C";
            e.currentTarget.style.color = "#fff";
          }}
        >
          Ознакомьтесь с нашими услугами
        </Link>
      </div>
    </div>
  );
}


export default function Head() {
  return (
    <div>
      <p style={{ fontSize: "18px", margin: "10px" }}>
        Создание неподвластных времени пейзажей на протяжении более 30 лет
      </p>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
    </div>
  );
}