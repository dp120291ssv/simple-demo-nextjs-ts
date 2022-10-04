import {FC} from 'react';
import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import Head from "next/head";
import SocialsItems from "../components/Socials";
import {GetStaticProps} from "next";
import {SocialsType} from "../types";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_HOST}/socials`);
        const data = await response.json();
        // const data = null;
        /**
         * для перехвата ошибок, например если data = null
         * */
        if (!data) {
            return {
                notFound: true,
            }
        }
        return {
            props: {socials: data}
        }
    } catch {
        return {
            props: {socials: null}
        }
    }
}

export type HomeProps = {
    socials: SocialsType;
}

const Home: FC<HomeProps> = ({socials}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Home</title>
            </Head>
            <Heading text="Next.js App"/>
            <SocialsItems socials={socials}/>
        </div>

    );
};

export default Home;