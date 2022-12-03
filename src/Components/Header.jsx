/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(200,200,200,1.0)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="#home">Anasayfa</a>
      <a href="#about">Hakkımda</a>
      <a href="#work">İş Deneyimi</a>
      <a href="#portfolio">Projeler</a>
      <a href="#contact">İletişim</a>
    </div>
  );
};

export default Header;
