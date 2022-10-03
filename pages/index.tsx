import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import Head from "next/head";
import {Socials} from './api/socials';
import SocialsItems from "../components/Socials";

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/api/socials`);
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
            <Heading text="Next.js App"/>
            <SocialsItems socials={socials}/>
        </div>

    );
};

export default Home;