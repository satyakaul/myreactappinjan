import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Photo from './Photo'

const PhotoList = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setPhotos(response.data))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h1 className='text-center'>All Photos</h1>

      <table className='table table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {photos.map(photo => (
            <Photo data={photo} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PhotoList
