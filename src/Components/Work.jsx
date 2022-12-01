/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Junior Software Developer",
    description:
      "Big-A Yazılım & Veri Analiz firmasında doğal dil işleme ile çalışırken firmanın diğer ürünlerinin testlerini yaptım ve ürünler hakkında hem tasarım olarak hem de kullanıcı deneyimi ile ilgili geri bildirimlerde bulundum.",
    date: "08.2021- 02.2022",
  },
  {
    title: "Bilgi İşlem Stajeri",
    description:
      "Erzurum Valiliğinde farklı departmanlardaki personellerin sorunların çözülmesinde ve ihtiyaçlarının giderilmesinde yardımcı oldum.",
    date: "07.2021- 07.2021",
  },
];

const Work = () => {
  return (
    <section className="light" id="work">
      <h2>İş Deneyimi</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
              <i>
                {" "}
                <p className="small">{project.date}</p>{" "}
              </i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
