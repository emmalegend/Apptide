import React from 'react'
import styles from './Button.module.css'

const Button = ({label}) => {
    return (
        <div className={styles.button}>
            <button>{label}</button>
        </div>
    )
}

export default Button
