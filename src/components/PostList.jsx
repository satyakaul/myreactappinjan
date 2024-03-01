import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <h1 className='text-center'>All Post</h1>

      <table className='table table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <Post data={post} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostList
