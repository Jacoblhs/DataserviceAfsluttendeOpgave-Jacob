import React, { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { formatDistanceToNow } from "date-fns"
import { da } from "date-fns/locale"
import { Link, useFetcher } from 'react-router-dom'

const News = () => {
  
  const { makeRequest, isLoading, data, error } = useRequestData()

  //State til søgeord (fra input)
  const [ searchKey, setSearchKey ] = useState( "ai" )

  //State til language (fra select/dropdown)
  const [ language, setLanguage ] = useState( "da" )

  useEffect( () => {
    handleSearch()
  }, [ language ] ) //lyt om der er valgt et anden sprog

  // Håndter keyUp (indtastning) i inputfeltet - hvis Enter = start søgning
  const handleSearchKeyUp = ( e ) => {
    if ( e.key === 'Enter' || e.code === 'Enter' ) handleSearch()
  }

  //Søgning i API
  const handleSearch = () => {
    // makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language + "&apiKey" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET" )
    makeRequest("https://newsapi.org/v2/everything?q=" + searchKey + "&language=" + language + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET")
  }

  // useEffect( () => {
  //   makeRequest("https://newsapi.org/v2/everything?q=mw3&language=en&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET")
  // }, [] )
  
  return (
    <div>

      <h1 className="mb-6 mt-6 text-6xl font-bold text-center">News</h1>
      <hr className='w-1/4 mb-10 m-auto'/>
        <div className='w-5/6 m-auto rounded bg-gray-100 p-6'>
            <input type="search" 
                onKeyUp={ ( e ) => handleSearchKeyUp( e ) }
                onChange={ (e) => setSearchKey( e.target.value ) }
                value={ searchKey } placeholder="Søg noget" className="mb-5 mr-5 input input-bordered" />

            <select onChange={ e => setLanguage( e.target.value ) } value={ language } className="w-full max-w-xs select select-bordered">
                <option value="da">Dansk</option>
                <option value="en">Engelsk</option>
                <option value="de">Tysk</option>
                <option value="es">Spansk</option>
                <option value="jp">Japansk</option>
            </select>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

                { data && data.articles.map( n => 
                
                <div className="shadow-xl card bg-green-100" key={ n.url }>

                    <figure>
                    <img src={ n.urlToImage } alt="" />
                    </figure>

                    <div className="card-body">

                    <div className="card-title">
                        <h2 className="text-4xl">{n.title}</h2>
                        <p className='font-light my-5'>{n.description}</p>
                    </div>

                    <p className="italic text-gray-500">{ new Date( n.publishedAt ).toLocaleString( "en-US", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit" } ) }</p>

                    <p>{ formatDistanceToNow( new Date( n.publishedAt ), { addSuffix: true } ) } by {n.source.name}</p>

                    <Link target='_blank' className='btn' to={n.url}>Læs mere</Link>

                    </div>

                </div>
                
                ) }

            </div>
        </div>
    </div>
  )
}

export default News