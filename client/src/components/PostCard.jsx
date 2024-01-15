import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ( { p } ) => {
  return (
    <div className="shadow-xl card bg-base-100" key={ p.id }>
        <div className="card-body">
            <h2 className="text-xl font-bold">{ p.title }</h2>
            <p>{p.id}</p>
            <Link to={ "/post/" + p.id } className="btn">Læs mere</Link>
        </div>
    </div>
  )
}

export default PostCard