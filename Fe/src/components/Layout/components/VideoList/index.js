// eslint-disable-next-line no-unused-vars
import React, { Fragment, useEffect, useState } from 'react'
import VideoService from '../../../../services/VideoService'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
// import { Link } from "react-router-dom";
export function VideoList() {
  const [videos, setVideos] = useState([])
  const [showModal, setShowModal] = React.useState(false)
  const [video, setVideo] = useState({})

  function handleDelete(id) {
    VideoService.deleteVideo(id)
    setShowModal(false)
  }
  function handleModal(video) {
    setVideo(video)
    setShowModal(true)
  }

  function Modal() {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Delete Video</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {`Do you really want to delete this video '${video.title}'?`}
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleDelete.bind(this, video.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  }

  useEffect(() => {
    VideoService.getVideos().then((response) => {
      setVideos(response.data)
    })
  }, [])

  return (
    <Fragment>
      {videos.length > 0
        ? videos.map((video) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={video.id}
            >
              <div className="basis-3/5 lg:basis-3/4 flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  Name: {video.title}
                </p>
                <p className="text-gray-600">
                  description: {video.description}
                </p>
                <span className="inline-block text-sm font-semibold mt-1">
                  Total episodes: {video.eps.length}
                </span>
              </div>
              <div className="basis-2/5 lg:basis-1/4 flex-auto text-right px-4 py-2 m-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </button>
                <Link to={`/dashboard/videos/edit/${video.id}`}>
                  <button
                    title="Edit"
                    // onClick={() => <AddVideo video={{
                    //   title: video.title,
                    //   another_name: video.another_name,
                    //   content_by: video.content_by,
                    //   release_year: video.release_year,
                    //   time: video.time,
                    //   genre: video.type.name,
                    //   rating: video.rating,
                    //   country: video.country.name,
                    //   category: video.category.name,
                    //   description: video.description,
                    // }}
                    // />}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold sm:my-0 my-3 md:mx-3 py-2 px-4 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </Link>
                <button
                  title="Remove"
                  onClick={handleModal.bind(this, video)}
                  className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))
        : null}
      {showModal ? Modal() : null}
    </Fragment>
  )
}
