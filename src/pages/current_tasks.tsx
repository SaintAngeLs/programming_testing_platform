import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react';
import Head from 'next/head'
import Link from 'next/link';
import { FC } from 'react'

const Home: FC = () => {
  const {data: session} = useSession();
  return (
    
      <Layout>
        <main>
          <h1>Current TASKS SECTION Hello, {session?.user?.name}!!!!</h1>
          <Link className = "button-primary-version" href={"/tasks/new_task"}>Add new task</Link>
        </main>
      </Layout>
    
  )
}

export default Home;
