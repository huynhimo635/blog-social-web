import { useEffect } from 'react'

import Head from 'next/head'

// import testApi from '../service/testApi'

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      try {
        // const data = await testApi.get()
        // console.log({ data })
      } catch (error) {
        console.log({ error })
      }
    }
    fetch()
  }, [])

  return (
    <div className="theme-light">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="flex bg-slate-600 text-center text-red">
        Test merge branch
      </h1>
    </div>
  )
}
