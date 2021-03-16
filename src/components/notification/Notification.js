import React from "react";
import styles from "./Notification.module.css";

const Notification = ({message})=>(
    <section className={styles.text}>
    {message}
    </section>
);

export default Notification;
