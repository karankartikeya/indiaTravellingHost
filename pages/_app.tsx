import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { MyUserContextProvider } from '@/utils/useUser'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {

  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-K7DZ7PCY95" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7DZ7PCY95');
        `}
      </Script>
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <MyUserContextProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </MyUserContextProvider>
    </SessionContextProvider>
    </>
  )
}
