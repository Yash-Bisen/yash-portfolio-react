import React from 'react'
import EducationCard from './EducationCard';
import educations from "../../data/education.json"
import styles from "./Education.module.css";

const Education = () => {
  return (
   <section id="education" className={styles.container}>
    <div className={styles.wrapper} >
        <h2 className={styles.title}>Education</h2>
    </div>
    <div  className={styles.educations}>{
            educations.map((education,id)=>{
                return <EducationCard key={id} education ={education}/>
    
            })}</div>
  
   </section>
  )
}

export default Education;
