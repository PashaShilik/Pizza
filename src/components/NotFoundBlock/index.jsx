import React from "react";
import styles from "./NotFoundBlock.module.scss"

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <span className={styles.smile}>🤬🖕🏻</span>
            <h1>Ничего не найдено</h1>   
            <div>
                Сразу что-то выбери, а потом сюда ЗАХОДИ
            </div>
        </div> 
    )
}

export default NotFoundBlock; 