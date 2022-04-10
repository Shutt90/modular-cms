import styles from '/styles/comps/tab.module.css';
import {motion} from 'framer-motion';
import { useState } from 'react';

function Tab({name, onClick}) {
    const [isHovered, setIsHovered]  = useState(false)
    const variants = {
        initial: {
            width: 0,
            height: '2px',
            backgroundColor: 'transparent',
            margin: '0 0 1rem 0',
        },
        onHover: {
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            transition: {
                duration: 0.8,
                ease: 'linear'
            }
        }
    }
  return (
    <motion.div onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} variants={variants} className={styles.tab} onClick={onClick}>
        <h3 className={styles.title}>{name}</h3>
        <motion.p variants={variants} initial="initial" animate={isHovered ? "onHover" : ""} className={styles.border}></motion.p>
    </motion.div>
  )
}

export default Tab