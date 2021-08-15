import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// API:
import { getPostsList } from '../apis'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPostsList().then((data) => setPosts(data))
  }, [])

  return (
    <>
      <h2>Blog Posts</h2>
      <ul>
        {posts?.map((post, i) => (
          <li key={i}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostsList
