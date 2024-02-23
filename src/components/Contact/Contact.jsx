import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free To Reach Out!!</p>
      </div>
      <ul className={styles.links}> 
        <li className={styles.link}>
          <img className={styles.img} src={getImageUrl("contact/emailIcon.png")} alt="as"/>
          <a href="mailto:yashbisen0803@gmail.com">yashbisen0803@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.img}  src={getImageUrl("contact/linkedinIcon.png")} alt="as"/>
          <a href="https://www.linkedin.com/in/yash-bisen-820b2420a">linkedin.com/yashBisen</a>
        </li>
        <li className={styles.link}>
          <img  className={styles.img}  src={getImageUrl("contact/githubIcon.png")} alt="as"/>
          <a href="https://github.com/Yash-Bisen">github.com/Yashbisen</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact;
