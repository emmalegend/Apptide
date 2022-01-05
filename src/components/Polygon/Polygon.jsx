import React from 'react'
import styles from './Polygon.module.css'
import {ReactComponent as Polygon1} from '../../assets/polygon-1.svg'
import { ReactComponent as Polygon2} from "../../assets/polygon-2.svg";

const Polygon = () => {
    return (
      <div className={styles.polygon_container}>
        <Polygon1 />
        <Polygon2 className={styles.polygon2}/>
      </div>
    );
}

export default Polygon
