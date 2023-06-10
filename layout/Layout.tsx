import Head from 'next/head'
import Script from 'next/script'
import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode;
    title?: string | 'India Travelling Host';
}

function Layout({children, title}: Props) {
  return (
    <div>
        <Script data-ad-client="ca-pub-7612880055830834" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
        <Script strategy={'lazyOnload'} src={'https://www.googletagmanager.com/gtag/js?id=G-K7DZ7PCY95'}/>
        <Script id='my-script' strategy={'lazyOnload'} dangerouslySetInnerHTML={{
            __html:`
            window.datalayer = window.dataLayer || [];
            window.dataLayer.push({
                'ith': 'value'
             });
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K7DZ7PCY95',{
                page_path: window.location.pathname,
            });
            `
        }}/>

        <Head>
            <link rel='shortcut icon' href={'/static/favicon.svg'}/>
            <meta name='robots' content='index, follow'/>
            <meta httpEquiv='Content-type' content='text/html; charset=utf-8'/>
            <meta name='language' content='English'/>
            <meta name='author' content='Shiwank Negi'/>
            <title>{title}</title>
        </Head>
        {children}
    </div>
  )
}

export default Layout