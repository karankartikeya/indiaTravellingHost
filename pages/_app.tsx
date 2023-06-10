import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { MyUserContextProvider } from '@/utils/useUser'
import Layout from '@/layout/Layout'

export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {

  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createClientComponentClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <MyUserContextProvider>
        <Layout>  
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </MyUserContextProvider>

    </SessionContextProvider>
  )
}
