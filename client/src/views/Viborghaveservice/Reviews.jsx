import React, { useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { Link } from 'react-router-dom'

const Reviews = () => {
  const { data, isLoading, error, makeRequest } = useRequestData()

  useEffect(() => {
    makeRequest("http://localhost:5023/reviews")
  }, [])

  return (
    <section className='w-5/6 bg-gray-100 m-auto my-10 rounded'>

      <h1 className='font-bold text-5xl text-center pt-5 pb-5'>Kundeudtalelser</h1>
      <hr className='w-48 m-auto'/>

      <div className='flex justify-evenly pb-20 pt-10'>
        {data && data.map((r) => (
          <div key={r.id} className='card bg-green-600 w-1/4 h-auto mx-5'>
            <h3 className='font-bold text-white mb-4 text-lg'>{r.author}</h3>
            <p className='text-white'>{r.content}</p>
          </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <Link to={"/reviewsAdmin"} className='btn font-light text-center'>Admin Reviews</Link>
      </div>

    </section>
  )
}

export default Reviews