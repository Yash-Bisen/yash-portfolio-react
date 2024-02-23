import  styles  from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <>
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash</h1>
        <p className={styles.description}>
          I'm a full-stack developer and I'm a fresher. Reach out if you'd like
          to learn more!
        </p>
        <a className={styles.contactBtn} href="hero/Yashresume.pdf" download="" role="button">Download CV</a>
        <a href="mailto:yashbisen0803@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/office-worker.png")}
        alt="img"
        className={styles.heroImg}
      />
      <div className={styles.topbar} />
      <div className={styles.bottombar} />
    </section>
    </>
  );
};

