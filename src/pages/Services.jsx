import React from "react";
import { useScrollFade } from "../component/useScrollFade.jsx"; 

export default function Services() {
  useScrollFade(".reveal");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1800px",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 20px",
      }}
    >
      <h2 className="services-title reveal">Услуги</h2>

      <div className="services-line reveal"></div>

      <p className="services-description reveal">
        На протяжении трёх десятилетий A.D.P. Landscaping создаёт в Роли эталон качества,
        превращая открытые пространства в захватывающие дух ландшафты. Компания,
        основанная Александром Азаровым, выросла на любви к природе и исключительном
        мастерстве. Сегодня мы — надёжное имя, известное своим художественным подходом и
        качеством. Мы создаём не просто ландшафты — мы создаём связь между людьми и
        природой вокруг них. Ваше видение — наш холст, и мы стремимся воплотить ваши
        мечты с внимательностью к деталям и уважением к природной красоте Роли.
        Почувствуйте разницу с ландшафтным дизайном от A.D.P. — процветающим наследием красоты и мастерства.
      </p>


      <div className="services-line reveal"></div>


      <div className="services-label reveal">НАШИ УСЛУГИ ВКЛЮЧАЮТ</div>


      <div className="services-grid-wrapper reveal">
        <div className="services-grid">

          <div className="services-title-block reveal">
            Создание своего видения
            <div className="services-subtitle">Смета расходов</div>
          </div>

          <ul className="services-list reveal">
            <li>
              Индивидуальный ландшафтный дизайн: персонализированные планы, отражающие
              ваш стиль и дополняющие ваш участок.
            </li>
            <li>
              Инновационные схемы посадки: профессиональный подбор и размещение
              растений для круглогодичной красоты.
            </li>
            <li>
              Изысканный ландшафтный дизайн: элегантные патио, дорожки и подпорные стены,
              построенные из материалов премиум-класса.
            </li>
            <li>
              Решения для водных объектов и освещения: создание особой атмосферы с
              помощью водных объектов и продуманного освещения.
            </li>
          </ul>


          <div className="services-title-block reveal">
            Стройте: воплощайте мечты в реальность
            <div className="services-subtitle">Смета расходов</div>
          </div>

          <ul className="services-list reveal">
            <li>
              Индивидуальные решения для отдыха на свежем воздухе: патио, кухни и
              конструкции, созданные специально для вас.
            </li>
            <li>
              Прочные дорожки и тропинки: профессиональное строительство для долговечной
              красоты и функциональности.
            </li>
            <li>
              Усовершенствованные системы орошения: эффективные и надёжные системы для
              поддержания оптимального состояния растений.
            </li>
            <li>
              Художественные элементы ландшафта: уникальные детали, призванные повысить
              ценность вашей недвижимости.
            </li>
          </ul>


          <div className="services-title-block reveal">
            Уход: сохранение красоты вашего сада
            <div className="services-subtitle">Смета расходов</div>
          </div>

          <ul className="services-list last reveal">
            <li>
              Комплексный уход за садом и газоном: регулярная стрижка, обрезка и
              сезонное обслуживание.
            </li>
            <li>
              Уход за двором: профессиональное обслуживание патио, дорожек и наружных
              конструкций.
            </li>
            <li>
              Сезонная уборка и благоустройство: как сделать так, чтобы ваш сад
              выглядел наилучшим образом круглый год.
            </li>
            <li>
              Бытовые и коммерческие услуги: индивидуальные планы технического
              обслуживания для всех типов недвижимости.
            </li>
          </ul>
        </div>
      </div>


      <style>{`
       
        .services-title {
          font-size: 24px;
          margin-top: 35px;
          margin-left: 100px;
          margin-bottom: 10px;
        }

        .services-line {
          width: 90%;
          border-bottom: 1px solid #bdbdbd;
          margin: 0 auto 40px auto;
        }

        .services-description {
          font-size: 20px;
          line-height: 1.6;
          max-width: 650px;
          margin-left: 90px;
          margin-bottom: 40px;
        }

        .services-label {
          font-size: 14px;
          letter-spacing: 2px;
          margin-left: 90px;
          margin-bottom: 40px;
        }

        .services-grid-wrapper {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .services-grid {
          width: 60%;
          max-width: 900px;
          margin-right: 10px;
          display: grid;
          grid-template-columns: 280px 1fr;
          column-gap: 60px;
          row-gap: 60px;
        }

        .services-title-block {
          font-size: 20px;
          line-height: 1.4;
        }

        .services-subtitle {
          font-size: 16px;
        }

        .services-list {
          font-size: 18px;
          line-height: 1.6;
          list-style: disc;
          padding-left: 20px;
          max-width: 480px;
        }

        .services-list.last {
          margin-bottom: 80px;
        }

       
        @media (max-width: 1024px) {
          .services-title {
            margin-left: 40px;
          }

          .services-description {
            margin-left: 40px;
            max-width: 80%;
            font-size: 18px;
          }

          .services-label {
            margin-left: 40px;
          }

          .services-grid-wrapper {
            justify-content: center;
          }

          .services-grid {
            width: 90%;
            grid-template-columns: 1fr;
            margin-right: 0;
          }

          .services-list {
            max-width: 100%;
          }
        }

        @media (max-width: 599px) {
          .services-title {
            margin-left: 10px;
            font-size: 22px;
          }

          .services-line {
            width: 95%;
          }

          .services-description {
            margin-left: 10px;
            margin-right: 10px;
            font-size: 16px;
            max-width: 100%;
          }

          .services-label {
            margin-left: 10px;
            font-size: 12px;
          }

          .services-grid {
            width: 100%;
            grid-template-columns: 1fr;
            row-gap: 40px;
          }

          .services-title-block {
            font-size: 18px;
          }

          .services-subtitle {
            font-size: 14px;
          }

          .services-list {
            font-size: 16px;
            line-height: 1.4;
          }
        }
      `}</style>
    </div>
  );
}