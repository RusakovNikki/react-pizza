import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено </h1>
            <span>🤧</span>
        </div>
    )
}

export default NotFoundBlock
