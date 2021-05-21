import React from 'react';
import Card from '../Card';
import styles from './Page.module.sass';
import Icon from '@mdi/react';
import { mdiRhombusSplit } from '@mdi/js';

function Page() {


    return (
        <>
            <header>
                <p>Header</p>
            </header>
            <main>
                <section className = {styles.mainContainer}>
                    <article className ={styles.mainHeader}>
                        <h4>Counters</h4>
                        <div className={styles.iconContainer}><Icon path={mdiRhombusSplit} size={0.7}/> <p>Card</p></div>
                    </article>
                    <section className={styles.cardContainer}>
                        <Card nameCard="Card 1" />
                        <Card nameCard="Card 2" />
                        <Card nameCard="Card 3" />
                        <Card nameCard="Card 4" />
                        <Card nameCard="Card 5" />
                        <Card nameCard="Card 6" />
                        <Card nameCard="Card 7" />
                        <Card nameCard="Card 8" />
                        <Card nameCard="Card 9" />
                        <Card nameCard="Card 10" />
                        <Card nameCard="Card 11" />
                        <Card nameCard="Card 12" />
                    </section>
                </section>
            </main>
            <footer>
                <p>Footer 2021</p>
            </footer>
        </>
    );
}

export default Page;