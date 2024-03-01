import React, { useState } from 'react'
import Employee from './Employee'
import Hello from './Hello'
import World from './World'
import PostList from './PostList'
import PhotoList from './PhotoList'

const Maincontent = () => {
  const [showResults, setShowResults] = useState(true)

  const onClickHandler = () => {
    setShowResults(true)
  }

  const onClickPhotoHandler = () => {
    setShowResults(false)
  }

  return (
    <div>
      <Hello />
      <World />
      <Employee />
      <button class='btn btn-primary btn-lg' onClick={onClickHandler}>
        Get Data
      </button>
      <button class='btn btn-primary btn-lg' onClick={onClickPhotoHandler}>
        Get Photo
      </button>
      {showResults ? <PostList/> : <PhotoList/>}
    </div>
  )
}
export default Maincontent
