import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/services/dummy`);
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
}

export default async function Page({ params }) {
    const { id, name, templateColor, profilePicture} = await getPost(params.id);

    if (!name) {
        return notFound();
    }

    return (
        <div className={styles.blogContainer}>
            <div className={styles.cardImage}>
                <Image
                    src={profilePicture}
                    alt={title}
                    fill
                />
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p>{body}</p>
        </div>
    );
}
