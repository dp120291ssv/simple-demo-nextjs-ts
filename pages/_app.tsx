import {FC} from 'react';
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";
import '../styles/globals.scss'

const MyApp: FC<AppProps> = ({Component, pageProps}) => (
    <Layout>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Roboto:wght@300&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
)

export default MyApp
