import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
//Icons
import { TbUserEdit } from "react-icons/tb"; //Edit
import { RiDeleteBin4Fill } from "react-icons/ri"; //Delete
import { RiUserAddFill } from "react-icons/ri"; //Add

const ReviewsAdmin = () => {
    const { data, isLoading, error, makeRequest } = useRequestData()

    //Delete data
    const {
        data: dataDelete,
        makeRequest: makeRequestDelete
    } = useRequestData()

    useEffect(() => {
        makeRequest("http://localhost:5023/reviews")
    }, [])

    const handleDelete = (reviewID, reviewAuthor) => {
        if (window.confirm("Du sletter" + reviewAuthor)) {
            makeRequestDelete("http://localhost:5023/reviews/admin/" + reviewID,
            "DELETE")
        }
    }


  return (
    <div>
      <h1 className="font-bold text-3xl text-center m-4">Admin for Reviews</h1>
      {/* ---- */}
      <div className="overflow-x-auto">
        <div className="w-52 bg-gray-200 my-5 mx-auto h-10 text-center p-2 rounded-md shadow-md">
          <p>
            Lav et nyt review{" "}
            <Link className="text-2xl float-right" to={"/reviewsCreate"}>
              <RiUserAddFill />
            </Link>
          </p>
        </div>
        <table className="table text-black m-auto bg-green-100 rounded-md shadow-md w-10/12 h-auto">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Id</th>
              <th>Navn</th>
              <th>Review</th>
              <th>Ret</th>
              <th>Slet</th>
            </tr>
          </thead>
          <tbody className="m-auto rounded-md p-3">
            {data &&
              data.map((p) => (
                <tr
                  className="border-green-200 border-2 py-3 px-6 rounded-md m-3"
                  key={p._id}
                >
                  <td className="py-3 px-6">{p._id}</td>
                  <td className="py-3 px-6">{p.author}</td>
                  <td className="py-3 px-6">{p.content}</td>
                  <td className="py-3 px-6">
                    <Link
                      className="text-3xl"
                      href={{ pathname: "/ReviewEdit", query: { id: p._id } }}
                    >
                      <TbUserEdit />
                    </Link>
                  </td>
                  <td className="py-3 px-6">
                    <button
                      className="text-3xl"
                      onClick={() => handleDelete(p._id, p.author)}
                    >
                      <RiDeleteBin4Fill />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReviewsAdmin