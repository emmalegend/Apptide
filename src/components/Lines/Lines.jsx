import React from 'react'
import line1 from '../../assets/left-line.svg'
import line2 from "../../assets/right-line.svg";
import styles from './Lines.module.css'

const Lines = () => {
    return (
      <div>
        <img src={line1} alt="lines" className={styles.line1} />
        <img src={line2} alt="lines" className={styles.line2} />
      </div>
    );
}

export default Lines
