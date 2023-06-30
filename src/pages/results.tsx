import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react';
import Head from 'next/head'
import { FC } from 'react'

const Home: FC = () => {
  const {data: session} = useSession();
  return (
    
      <Layout>
        <main>
          <h1>Results Section!!!! SECTION Hello, {session?.user?.name}!!!!</h1>
        </main>
        <table className="basic-table-products mt-2 mb-2">
                <thead>
                    <tr>
                        <td>Surname Name</td>
                        <td>Identificator</td>
                        <td>Task</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
        </table>
      </Layout>
    
  )
}

export default Home;
