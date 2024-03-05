import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl'>Github followers: {data.followers}
    <img 
    
    src={data.avatar_url} alt="Git picture" width={300} />
    <h1>{data.name} and {data.twitter_username}</h1>
    </div>
    
  )
}

export default Github


export const githubInfoLoader = async () => {
   const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
   return response.json()
}