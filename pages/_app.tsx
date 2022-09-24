import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import '../styles/globals.scss'
import Image from 'next/image'
import boratImg from '../public/borat.webp'
import Head from "next/head";
import React from "react";

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <main>
            <Component {...pageProps} />
        </main>
        {/*<Image src={boratImg} width={500} height={900} alt="preview" placeholder="blur"  />*/}
    </Layout>
)

export default MyApp
