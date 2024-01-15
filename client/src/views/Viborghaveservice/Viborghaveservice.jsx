import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData"

const Viborghaveservice = () => {
    const { makeRequest, isLoading, data, error } = useRequestData()

    const {
        data: dataImg,
        isLoading: isLoadingImg,
        error: errorImg,
        makeRequest: makeRequestImg
    } = useRequestData()

    useEffect(() => {
        makeRequest("http://localhost:5023/aboutus")
    }, []);

    useEffect(() => {
        makeRequestImg("http://localhost:5023/services?limit=2")
    }, [])
  
    return (
        <section className='grid grid-cols-2 m-5 bg-gray-100 rounded'>
        
        {data && (
            <div className='grid-span-1 flex flex-col py-5 px-5'>
                <h1 className="font-bold text-6xl mb-3">Velkommen til <span className="text-green-600">Viborg Haveservice</span></h1>
                <div dangerouslySetInnerHTML={ {__html: data.content} }/>
                <Link to={"/adminHaveservice"} className='btn font-light w-48 text-center mt-10'>VIS ALLE YDELSER</Link>
            </div>
        ) }

        <div className='grid-span-1 flex py-5 px-5 m-auto'>
        {dataImg && dataImg.map((e) =>(
            <div className='flex-col m-4'>
                <figure>
                    <img className='' src={ "http://localhost:5023/images/" + e.image } alt="" />
                    <h3 className='font-semibold mt-3 text-xl'>{e.title}</h3>
                    <p className='font-light w-60 mt-3'>{e.content}</p>
                </figure>
            </div>
        ) )}
        </div>

        </section>
  )
}

export default Viborghaveservice