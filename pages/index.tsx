import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import Head from "next/head";
import {Socials} from './api/socials';
import SocialsItems from "../components/Socials";

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/socials');
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
}

export type HomeProps = {
    socials: Socials;
}

const Home = ({socials}: HomeProps) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Home</title>
            </Head>
            <Heading text="Demo Next.js application"/>
            <SocialsItems socials={socials}/>
        </div>

    );
};

export default Home;