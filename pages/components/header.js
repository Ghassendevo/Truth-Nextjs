import React from 'react'
import styles from '../../styles/Home.module.css'
export const Header = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1 className={styles.title}>
                Welcome to <a>TRUTH!</a>
            </h1>
            <p className={styles.description}>
                Get started developed by {' '}
                <code className={styles.code}>GhassenDevo</code>
            </p>
        </div>
    )
}
