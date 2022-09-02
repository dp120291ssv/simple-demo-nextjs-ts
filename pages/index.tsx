import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Heading text="Hello Next TS"/>
        </div>
    );
};

export default Home;