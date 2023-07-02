import Layout from '@/components/Layout'
import TaskAddForm from '@/components/TaskAddForm';
import { useSession } from 'next-auth/react';
import Head from 'next/head'
import { FC } from 'react'

const Home: FC = () => {
  const {data: session} = useSession();
  return (
    
      <Layout>
        <main>
            <h1>Add new Task Page</h1>
            <TaskAddForm
              _id=""
              title=""
              description=""
              points={0}
              description1={[]}
              description2={[]}
              active={false}
              category=""
              properties={{}}
              pdf={null}
              testingSuite={null}
              startDate={new Date()} // Add startDate with current date
              deadline={null} // Set initial deadline as null
            />
        </main>
      </Layout>
    
  )
}

export default Home;
