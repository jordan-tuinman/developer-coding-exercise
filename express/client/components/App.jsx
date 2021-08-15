import React from 'react'
import { Route } from 'react-router-dom'

// Components:
import PostsList from './PostsList'
import Post from './Post'

const App = () => {
  return (
    <>
      <h1>Media Suite Blog</h1>
      <Route exact path="/" component={PostsList} />
      <Route exact path="/posts/:slug" component={Post} />
    </>
  )
}

export default App
