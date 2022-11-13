import React from 'react';
import Image from 'next/image'
import HeroImg from '../public/Graphics4.png'
import Typewriter from 'typewriter-effect';
import styles from '../styles/courses.module.css';

const courses = () => {
  return (
    <>
     {/* Main Courses Page Starts  */}
     <section className={styles.courses}>
        <div className={styles.twocol}>
          <div className={styles.leftcol}>
          <div className={styles.deem}>Master React Concepts Step By Step</div>
            <div className={styles.h3}><Typewriter options={{
                strings: ['Reactjsofficial Presents ReactJS Pro Training Program!', 'For Beginners', 'Experienced Learners'],
                autoStart: true,
                loop: true,}} /></div>
            <div className={styles.h1}>FRONTEND DEVELOPMENT WITH REACT SPECIALIZATION - TRANING PROGRAM</div>
            <div className={styles.p}>Build real-world projects by mastering React & javascript. Learn the essential frontend development concepts from scratch.</div>
            <div className={styles.blah}>
            <button className={styles.btn}>Explore Now</button>
            <button className={styles.btnwithborder}>Try For Free</button>
            </div>
          </div>
          <div className={styles.rightcol}>
            <Image src={HeroImg} />
          </div>
        </div>
      </section>
      {/* Main Courses Page Ends  */}
      {/* ============================================ */}
    </>
  );
}

export default courses;
