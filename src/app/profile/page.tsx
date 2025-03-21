
import { unstable_noStore } from 'next/cache'
import React, { Suspense } from 'react'
// import Posts from '../components/Posts'

const Posts = async () => {
unstable_noStore()
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const posts = await data.json()
    return (
        <div>
            {posts.title}
            {/* {posts.map((p: any, index: number) => {
                <div key={index}>
                    {p.title}
                </div>
            })} */}
        </div>
    )
}


const page = () => {

  return (
    <div>
      <h1 className='bg-red-600'>Profile</h1>
      <Suspense fallback={<h1>Loading ....</h1>}>
        <Posts />  
    </Suspense>
    </div>
  )
}

export default page