import Heading from "../components/Heading";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import styles from '../styles/404.module.scss'
import Head from "next/head";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [router])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>NotFound</title>
            </Head>
            <div>
                <Heading text="404 Not Found"/>
                <Heading tag="h3" text="Ups.. this page is not found"/>
            </div>
        </div>
    );
};

export default NotFound;