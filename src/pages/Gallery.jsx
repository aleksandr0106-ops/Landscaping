import React, { useState, useEffect } from "react";
import { useScrollFade } from "../component/useScrollFade.jsx";


const images = {

  block1: {
    large: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery1.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery2.png",
    },
    small1: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery3.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery4.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery5.png",
    },
    small2: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery6.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery7.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery8.png",
    },
  },
  block2: {
    left: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery9.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery10.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery11.png",
    },
    right: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery12.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery13.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery14.png",
    },
  },
  block3: {
    large: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery15.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery16.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery17.png",
    },
    small: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery18.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery19.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery20.png",
    },
  },
  block4: {
    left: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery21.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery22.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery23.png",
    },
    right: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery24.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery25.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery26.png",
    },
  },
  block5: {
    large: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery27.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery28.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery29.png",
    },
    small: {
      desktop: "http://azargd100g.temp.swtest.ru/imges/gallery30.png",
      tablet: "http://azargd100g.temp.swtest.ru/imges/gallery31.png",
      mobile: "http://azargd100g.temp.swtest.ru/imges/gallery32.png",
    },
  },
};



function useActiveBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return { width };
}

function AdaptiveImage({ desktop, tablet, mobile, alt, style, className }) {
  const { width } = useActiveBreakpoint();
  let src = desktop;
  if (width < 1280) src = tablet;
  if (width < 800) src = mobile;
  return <img src={src} alt={alt} style={style} className={className} />;
}

function GalleryBlock({ block }) {
  const { width } = useActiveBreakpoint();
  const isDesktop = width >= 1280;

  return (
    <div className="reveal" style={{ width: "100%", }}>
      {isDesktop ? (
        block.desktopLayout
      ) : (
        <div style={{ display: "flex", flexDirection: "column", }}>
          <AdaptiveImage
            desktop={block.large.desktop}
            tablet={block.large.tablet}
            mobile={block.large.mobile}
            alt="Large"
            style={{ width: "100%", height: "auto", }}
            className="reveal"
          />
          <div style={{ fontSize: 18, marginTop: 8, marginBottom: 10 }}>{block.largeTitle}</div>
          <div style={{ fontSize: 13, color: "#4E6D0B" }}>{block.largeSubtitle}</div>
          <div style={{ fontSize: 13, color: "#4E6D0B", marginBottom: 70 }}>{block.largeYear}</div>

          {block.smallItems.map((item, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <AdaptiveImage
                desktop={item.desktop}
                tablet={item.tablet}
                mobile={item.mobile}
                alt={`Small${idx}`}
                style={{ width: "100%", maxWidth: 200, height: "auto" }}
                className="reveal"
              />
              <div style={{ fontSize: 18, marginTop: 8, marginBottom: 10 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>{item.subtitle}</div>
              <div style={{ fontSize: 13, color: "#4E6D0B", marginBottom: 70 }}>{item.year}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default function Gallery() {
  useScrollFade(".reveal");
  const blockData = [
    {
      large: images.block1.large,
      largeTitle: "Гармония камня и листвы",
      largeSubtitle: "Дизайн посадки, выбор растений",
      largeYear: "2025",
      smallItems: [
        { ...images.block1.small1, title: "Непреходящая красота хвойных деревьев", subtitle: "Пейзаж", year: "2025" },
        { ...images.block1.small2, title: "Классические акценты из гортензии", subtitle: "Пейзаж", year: "2025" },
      ],
      desktopLayout: (
        <div style={{ width: "100%", height: "511px", position: "relative", marginBottom: 80 }}>
          <AdaptiveImage
            desktop={images.block1.large.desktop}
            tablet={images.block1.large.tablet}
            mobile={images.block1.large.mobile}
            alt="Block1 Large"
            style={{ position: "absolute", left: -20, top: 0, width: 539, height: 403 }}
            className="reveal"
          />
          <div style={{ position: "absolute", top: 0, left: 550, maxWidth: 300, lineHeight: 1.4 }}>
            <div style={{ fontSize: 18, marginBottom: 10, maxWidth: 200, }}>Гармония  камня и листвы</div>
            <div style={{ fontSize: 13, color: "#4E6D0B", maxWidth: 200, }}>Дизайн посадки, выбор растений</div>
            <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
          </div>
          <div style={{ position: "absolute", top: 0, right: 200, display: "flex", gap: 50 }}>
            {[images.block1.small1, images.block1.small2].map((img, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <AdaptiveImage desktop={img.desktop} tablet={img.tablet} mobile={img.mobile} alt={`Small${i}`} style={{ width: 200, height: 200 }} className="reveal" />
                <div style={{ marginTop: 8, maxWidth: 200, }}>
                  <div style={{ fontSize: 18, marginBottom: 10 }}>
                    {i === 0 ? "Непреходящая красота хвойных деревьев" : "Классические акценты из гортензии"}
                  </div>
                  <div style={{ fontSize: 13, color: "#4E6D0B" }}>Пейзаж</div>
                  <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      large: images.block2.right,
      largeTitle: "Пышные, многослойные текстуры",
      largeSubtitle: "Дизайн посадки",
      largeYear: "2025",
      smallItems: [
        { ...images.block2.left, title: "Деталь декоративного растения", subtitle: "Пейзаж", year: "2025" },
      ],
      desktopLayout: (
        <div style={{ width: "100%", height: "503px", position: "relative", marginBottom: 80 }}>
          <div style={{ width: 640, height: 265, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>
            <AdaptiveImage
              desktop={images.block2.left.desktop}
              tablet={images.block2.left.tablet}
              mobile={images.block2.left.mobile}
              alt="Block2 Left"
              style={{ width: 200, height: 200 }}
              className="reveal"
            />
            <div style={{ marginTop: 8, maxWidth: 200, }}>
              <div style={{ fontSize: 18, marginBottom: 10, maxWidth: 200, }}>Деталь декоративного  растения</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>Пейзаж</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
            </div>
          </div>
          <div style={{ width: 640, height: 403, position: "absolute", right: 0, top: 0 }}>
            <AdaptiveImage desktop={images.block2.right.desktop} tablet={images.block2.right.tablet} mobile={images.block2.right.mobile} alt="Block2 Right" style={{ width: 450, height: 403 }} className="reveal" />
            <div style={{ position: "absolute", top: 0, left: -150, maxWidth: 170, color: "#000", lineHeight: 1.4 }}>
              <div style={{ fontSize: 18, marginBottom: 10, maxWidth: 200, }}>Пышные,  многослойные текстуры</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>Дизайн посадки</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
            </div>
          </div>
        </div>
      ),
    },

    {
      large: images.block3.large,
      largeTitle: "Гармония камня и листвы",
      largeSubtitle: "Дизайн посадки, выбор растений",
      largeYear: "2025",
      smallItems: [
        { ...images.block3.small, title: "Цветет элегантная роза", subtitle: "Пейзаж", year: "2025" },
      ],
      desktopLayout: (
        <div style={{ width: "100%", height: "503px", position: "relative", marginBottom: 80 }}>
          <AdaptiveImage desktop={images.block3.large.desktop} tablet={images.block3.large.tablet} mobile={images.block3.large.mobile} alt="Block3 Large" style={{ position: "absolute", left: -20, top: 0, width: 539, height: 403 }} className="reveal" />
          <div style={{ position: "absolute", top: 0, left: 550, maxWidth: 300, color: "#000", lineHeight: 1.4 }}>
            <div style={{ fontSize: 18, marginBottom: 10, maxWidth: 200, }}>Гармония камня и листвы</div>
            <div style={{ fontSize: 13, color: "#4E6D0B", maxWidth: 200, }}>Дизайн посадки, выбор растений</div>
            <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
          </div>
          <div style={{ position: "absolute", right: 500, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <AdaptiveImage desktop={images.block3.small.desktop} tablet={images.block3.small.tablet} mobile={images.block3.small.mobile} alt="Block3 Small" style={{ width: 200, height: 200 }} className="reveal" />
            <div style={{ marginTop: 8, maxWidth: 200, }}>
              <div style={{ fontSize: 18, marginBottom: 10 }}>Цветет элегантная роза</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>Пейзаж</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
            </div>
          </div>
        </div>
      ),
    },

    {
      large: images.block4.left,
      largeTitle: "Деталь декоративного растения",
      largeSubtitle: "Пейзаж",
      largeYear: "2025",
      smallItems: [
        { ...images.block4.right, title: "Тщательная проработка деталей газона", subtitle: "Архитектура + Ландшафт", year: "2025" },
      ],
      desktopLayout: (
        <div style={{ width: "1280px", height: "398px", position: "relative", marginBottom: 80, display: "flex", justifyContent: "space-between", padding: "0 10px" }}>
          <div style={{ width: 635, height: 298, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <AdaptiveImage desktop={images.block4.left.desktop} tablet={images.block4.left.tablet} mobile={images.block4.left.mobile} alt="Block4 Left" style={{ width: 212, height: 212 }} />
            <div style={{ marginTop: 8, maxWidth: 200, }}>
              <div style={{ fontSize: 18, marginBottom: 10, maxWidth: 200, }}>Деталь  декоративного растения</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>Пейзаж</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
            </div>
          </div>
          <div style={{ width: 635, height: 86, display: "flex", alignItems: "center", gap: 20 }}>
            <AdaptiveImage desktop={images.block4.right.desktop} tablet={images.block4.right.tablet} mobile={images.block4.right.mobile} alt="Block4 Right" style={{ width: 375, height: 86 }} className="reveal" />
            <div style={{ lineHeight: 1.4 }}>
              <div style={{ fontSize: 16, marginBottom: 10 }}>Тщательная проработка деталей газона</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>Архитектура + Ландшафт</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
            </div>
          </div>
        </div>
      ),
    },

    {
      large: images.block5.large,
      largeTitle: "Садовое искусство в полном расцвете",
      largeSubtitle: "Дизайн сада, посадка растений, цветочные композиции",
      largeYear: "2025",
      smallItems: [
        { ...images.block5.small, title: "Изысканая красота зелени", subtitle: "Пейзаж", year: "2025" },
      ],
      desktopLayout: (
        <div style={{ width: "100%", height: "503px", position: "relative", marginBottom: 80 }}>
          <AdaptiveImage desktop={images.block5.large.desktop} tablet={images.block5.large.tablet} mobile={images.block5.large.mobile} alt="Block5 Large" style={{ position: "absolute", left: -20, top: 0, width: 539, height: 403 }} className="reveal" />
          <div style={{ position: "absolute", top: 0, left: 550, maxWidth: 300, color: "#000", lineHeight: 1.4 }}>
            <div style={{ fontSize: 18, marginBottom: 10, maxWidth: 200, }}>Садовое искусство  в полном расцвете</div>
            <div style={{ fontSize: 13, color: "#4E6D0B", maxWidth: 200, }}>Дизайн сада, посадка  растений, цветочные композиции</div>
            <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
          </div>
          <div style={{ position: "absolute", right: 500, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <AdaptiveImage desktop={images.block5.small.desktop} tablet={images.block5.small.tablet} mobile={images.block5.small.mobile} alt="Block5 Small" style={{ width: 200, height: 200 }} className="reveal" />
            <div style={{ marginTop: 8, maxWidth: 200, }}>
              <div style={{ fontSize: 18, marginBottom: 10, }}>Изысканая красота  зелени</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>Пейзаж</div>
              <div style={{ fontSize: 13, color: "#4E6D0B" }}>2025</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "10px", marginLeft: 100 }}>Галерея</h2>
      <div style={{ width: "90%", borderBottom: "1px solid #bdbdbd", margin: "0 auto 40px auto" }} />
      {blockData.map((block, idx) => (
        <GalleryBlock key={idx} block={block} />
      ))}
    </div>
  );
}


