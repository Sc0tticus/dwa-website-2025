import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function page_meta_component() {
return (
   <Head>
       <meta charset="UTF-8">   
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta name="description" content="DWA India is an NGO that supports low-income earners of the Dalit tribe in India. <br>Good schools are provided for children and women get the tools and resources they need to earn a living."> 
       <meta name="keywords" content="NGO, Dalit, India, Dalit women, Dalit children, welfare, donate, support">
       <meta property="og:title" content="Dalit Welfare Association">
       <meta property="og:description" content="DWA India is an NGO that supports low-income earners of the Dalit tribe in India. <br>Good schools are provided for children and women get the tools and resources they need to earn a living.">
       <meta property="og:image" content="/public/favicon/social_mediaSEO.jpg">
       <meta property="og:url" content="https://dwaindia.com/">
       <link rel="canonical" href="https://dwaindia.com/">
       <link rel="apple-touch-icon" sizes="57x57" href="/public/favicon/apple-icon-57x57.png"> 
       <link rel="apple-touch-icon" sizes="60x60" href="/public/favicon/apple-icon-60x60.png"> 
       <link rel="apple-touch-icon" sizes="72x72" href="/public/favicon/apple-icon-72x72.png"> 
       <link rel="apple-touch-icon" sizes="76x76" href="/public/favicon/apple-icon-76x76.png"> 
       <link rel="apple-touch-icon" sizes="114x114" href="/public/favicon/apple-icon-114x114.png">
       <link rel="apple-touch-icon" sizes="120x120" href="/public/favicon/apple-icon-120x120.png"> 
       <link rel="apple-touch-icon" sizes="144x144" href="/public/favicon/apple-icon-144x144.png"> 
       <link rel="apple-touch-icon" sizes="152x152" href="/public/favicon/apple-icon-152x152.png"> 
       <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-icon-180x180.png"> 
       <link rel="icon" type="image/png" sizes="192x192" href="/public/favicon/android-icon-192x192.png"> 
       <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png"> 
       <link rel="icon" type="image/png" sizes="96x96" href="/public/favicon/favicon-96x96.png"> 
       <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon/favicon-16x16.png"> 
       <link rel="manifest" href="/public/favicon/manifest.json">        
       <meta name="msapplication-TileColor" content="#ffffff"> 
       <meta name="msapplication-TileImage" content="/public/favicon/ms-icon-144x144.png">
       <meta name="theme-color" content="#ffffff">
       <link rel="stylesheet" href="/src/app/resources/styles/resourcesPage.module.css">
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
       <title>DALIT WELFARE ASSOCIATION</title>
   </Head>
);
}
