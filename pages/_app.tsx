import React from "react";
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import '../styles/globals.scss'
import Image from 'next/image'
import boratImg from '../public/borat.webp'
import Head from "next/head";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Roboto:wght@300&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        {/*<Image src={boratImg} width={500} height={900} alt="preview" placeholder="blur"  />*/}
    </Layout>
)

export default MyApp
