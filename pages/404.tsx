import Heading from "../components/Heading";
import {useEffect} from "react";
import {useRouter} from "next/router";
import styles from '../styles/404.module.scss'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [router])

    return (
        <div className={styles.wrapper}>
            <div>
                <Heading text="404 Not Found"/>
                <Heading tag="h3" text="Ups.. this page is not found"/>
            </div>
        </div>
    );
};

export default NotFound;