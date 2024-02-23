import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/about.png")}
          alt="Me sitting with laptop"
        />
        <ui className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am Frontend Developer with Experience in building 
                responsive and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised 
                back-end systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Java Developer</h3>
              <p>
                I have experience developing web applications using java framworks like JSP and Servlet.
              </p>
            </div>
          </li>
        </ui>
      </div>
    </section>
  );
};

export default About;
