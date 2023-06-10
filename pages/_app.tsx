import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { MyUserContextProvider } from '@/utils/useUser'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {

  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createClientComponentClient())

  return (

    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7612880055830834"
      />
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
