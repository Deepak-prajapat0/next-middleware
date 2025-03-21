// import { unstable_noStore } from 'next/cache'
import React from 'react'

const Posts = async () => {
// unstable_noStore()
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

export default Posts