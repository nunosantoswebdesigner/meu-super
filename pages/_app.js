import "@/styles/globals.css";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
                {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
                <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="144x144" href="/icons/android-icon-144x144.png" />
                <link rel="icon" type="image/png" sizes="36x36" href="/icons/android-icon-36x36.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/icons/android-icon-48x48.png" />
                <link rel="icon" type="image/png" sizes="72x72" href="/icons/android-icon-72x72.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icons/android-icon-96x96.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="542x542" href="/favicon-542x542.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

                <title>Meu Super | Foz do Arelho</title>
                <meta name="description" content="Mini-Mercado Meu Super Foz do Arelho"/>
  
            </Head>
            <Header />
                <Component {...pageProps} />
            <Footer />
        </>
    );
}
