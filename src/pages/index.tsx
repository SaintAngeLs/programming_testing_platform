import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react';
import Head from 'next/head'
import { FC } from 'react'

const Home: FC = () => {
  const {data: session} = useSession();
  return (
    
      <Layout>
        <main>
          <h1>Hello, {session?.user?.name}!!!!</h1>
        </main>
      </Layout>
    
  )
}

export default Home;
