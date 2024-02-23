import styles from "./EducationCard.module.css";
import { getImageUrl } from '../../utils';


const EducationCard = ({
    education: {img, school,date,grade,desc, degree}}) => {
  return (
    <div className={styles.container}>
      
      <img
        src={getImageUrl(img)}
        alt={`image of ${school}`}
        className={styles.image}
      />
      
      <div className={styles.content}>
      <h3 className={styles.title}> {school}</h3>
      <h5 className={styles.description}>{degree}</h5>
      <h6 className={styles.date}>{date}</h6>
      <h4 className={styles.grade}>Grade: {grade}</h4>
      <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  )
}

export default EducationCard
