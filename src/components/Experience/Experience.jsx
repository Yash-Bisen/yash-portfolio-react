
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Experience</h2>
      <div
        className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id}  className={styles.skill}>
                <div  className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>

                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul  className={styles.history}>
          {history.map((hisItem, id) => {
            return (
              <li key={id}  className={styles.historyItem}>
                <img
                  src={getImageUrl(hisItem.imageSrc)}
                  alt={`${hisItem.organisation} Logo`}
                />
                <div  className={styles.historyItemDetails}>
                  <h3>{`${hisItem.role}, ${hisItem.organisation}`}</h3>
                  <p> {`${hisItem.startDate} - ${hisItem.endDate}`}</p>
                  <ul>
                    {hisItem.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
