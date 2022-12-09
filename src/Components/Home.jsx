/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/notebook.jpg";
const homeDescription =
  "Merhabalar🤚 Ben Çağrı bu benim portfolio web sitem. Bu web sitesini codespace'in portfolio template'i üzerinden oluşturdum ve burada hem react'tı uygulayarak öğrenirken hem de codespace'i deniyorum. Kendimi geliştirdikçe burayı da günceleyeceğim.";
const imageAltText = "Laptop";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="dark">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "30%", left: "2rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p
          style={{
            textAlign: "left",
            padding: "2rem 60% 0 0 ",
            animation: "2s ease-out 0s 1 slideInLeft",
          }}
        >
          <i>{homeDescription}</i>
        </p>
      </div>
      <div style={{ position: "absolute", bottom: "8rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
