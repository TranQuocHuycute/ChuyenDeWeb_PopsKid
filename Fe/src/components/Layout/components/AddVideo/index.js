import { useEffect, useState } from 'react'
import VideoService from '../../../../services/VideoService'
import { useParams } from 'react-router-dom'

export function AddVideo() {
  const { id } = useParams()
  const [genres, setGenres] = useState([])
  const [countries, setCountries] = useState([])
  const [categories, setCategories] = useState([])
  const [dataValue, setdataValue] = useState({
    title: '',
    another_name: '',
    content_by: '',
    release_year: '',
    time: '',
    genre: '',
    rating: '',
    country: '',
    category: '',
    description: '',
  })
  const SetValue = (setValue, name, value) => {
    console.log({ name, value })
    setValue({
      ...dataValue,
      [name]: value,
    })
  }

  const handleTitleValue = (e) => {
    const { name, value } = e.target
    SetValue(setdataValue, name, value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id) {
      const category = categories.find(
        (category) => category.name === dataValue.category
      )
      const country = countries.find(
        (country) => country.name === dataValue.country
      )
      const genre = genres.find((genre) => genre.name === dataValue.genre)

      const video = {
        title: dataValue.title,
        another_name: dataValue.another_name,
        release_year: dataValue.release_year,
        time: dataValue.time,
        rating: dataValue.rating,
        content_by: dataValue.content_by,
        description: dataValue.description,
        categories: [
          {
            id: category.id,
            name: category.name,
          },
        ],
        countries: [
          {
            id: country.id,
            name: country.name,
          },
        ],
        types: [
          {
            id: genre.id,
            name: genre.name,
          },
        ],
      }
      VideoService.updateVideo(id, video)
    } else {
      VideoService.addVideo({
        title: dataValue.title,
        another_name: dataValue.another_name,
        release_year: dataValue.release_year,
        time: dataValue.time,
        rating: dataValue.rating,
        content_by: dataValue.content_by,
        description: dataValue.description,
      }).then((res) => {
        console.log(res)
        VideoService.addType(res.id, dataValue.genre)
        VideoService.addCategory(res.id, dataValue.category)
        VideoService.addCountry(res.id, dataValue.country)
        window.location.href = '/dashboard/videos'
      })
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        VideoService.getTypes().then((res) => {
          dataValue.genre = res.data[0].name
          setGenres(res.data)
        })
        VideoService.getCountries().then((res) => {
          dataValue.country = res.data[0].name
          setCountries(res.data)
        })
        VideoService.getCategories().then((res) => {
          dataValue.category = res.data[0].name
          setCategories(res.data)
        })

        if (id) {
          const dataValue = {}
          VideoService.getVideoById(id).then((response) => {
            dataValue.title = response.data.title
            dataValue.another_name = response.data.another_name
            dataValue.content_by = response.data.content_by
            dataValue.release_year = response.data.release_year
            dataValue.time = response.data.time
            dataValue.genre = response.data.types[0].name
            dataValue.rating = response.data.rating
            dataValue.country = response.data.countries[0].name
            dataValue.category = response.data.categories[0].name
            dataValue.description = response.data.description
          })
          setdataValue(dataValue)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="mt-10 sm:mt-0">
      <div className="">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    onChange={handleTitleValue}
                    value={dataValue.title}
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="another_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Another Name
                  </label>
                  <input
                    onChange={handleTitleValue}
                    value={dataValue.another_name}
                    type="text"
                    name="another_name"
                    id="another_name"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="content_by"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content By
                  </label>
                  <input
                    onChange={handleTitleValue}
                    value={dataValue.content_by}
                    type="text"
                    name="content_by"
                    id="content_by"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="release_year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Release Year
                  </label>
                  <input
                    onChange={handleTitleValue}
                    value={dataValue.release_year}
                    type="text"
                    name="release_year"
                    id="release_year"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-1">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <input
                    onChange={handleTitleValue}
                    value={dataValue.time}
                    type="text"
                    name="time"
                    id="time"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-1">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rating
                  </label>
                  <input
                    onChange={handleTitleValue}
                    value={dataValue.rating}
                    type="text"
                    name="rating"
                    id="rating"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="genre"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Genre
                  </label>
                  <select
                    onChange={handleTitleValue}
                    value={dataValue.genre}
                    id="genre"
                    name="genre"
                    autoComplete="genre-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    {genres.map((genre) => (
                      <option key={genre.id} value={genre.name}>
                        {genre.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    onChange={handleTitleValue}
                    value={dataValue.country}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    onChange={handleTitleValue}
                    value={dataValue.category}
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter description"
                    name="description"
                    onChange={handleTitleValue}
                    value={dataValue.description}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
