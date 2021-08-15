import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// API:
import { getPost } from '../apis'

const Post = (props) => {
  const [postContent, setPostContent] = useState()
  useEffect(() => {
    const slug = props.match.params.slug
    getPost(slug).then((data) => {
      setPostContent(data.post)
    })
  }, [])

  const paragraphs = postContent?.content.split('\n')

  return (
    <>
      <h2>This will be an individual blog post</h2>
      {paragraphs?.map((paragraph, i) =>
        paragraph[0] === '#' ? (
          <h1 key={i}>{paragraph.replace('#', '')}</h1>
        ) : (
          <p key={i}>{paragraph}</p>
        )
      )}
      <h2>Tags</h2>
      {postContent?.tags.map((tag, i) => (
        <span key={i}>{tag}, </span>
      ))}
    </>
  )
}

export default Post
