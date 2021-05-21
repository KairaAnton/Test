import React from 'react';
import styles from './Card.module.sass'
import { useState } from 'react'
function Card(props) {
    const [value, setValue] = useState(1);
    const {nameCard} = props;
    const circleColor = { 1: styles.circleRed, 2: styles.circleBlue, 3: styles.circleGreen, 4: styles.circleYellow, 5: styles.circleCyan, 6: styles.circleMagenta, 7: styles.circleBlack, 8: styles.circleGray }
    const lengthColor = Object.keys(circleColor).length;

    const increment = () => value === lengthColor ? setValue(1) : setValue(value + 1);
    const decrement = () => value === 1 ? setValue(lengthColor) : setValue(value - 1);


    return (
        <article className={styles.card}>
            <section className={styles.countContainer}>
                <div className={styles.count}>
                    <h3>{nameCard}</h3>
                    <p>Count: {value}</p>
                </div>
                <div className={circleColor[value]}></div>
            </section>
            <section>
                <a onClick={decrement} className={styles.countMinus}>minus</a>
                <a onClick={increment} className={styles.countPlus}>plus</a>
            </section>
        </article>
    )
}

export default Card;