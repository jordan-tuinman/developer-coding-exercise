import request from 'superagent'

// Get list of posts - title and slug - JSON Array
export const getPostsList = () => {
  return request.get('/posts').then((res) => {
    return res.body
  })
}

// Get post content - JSON
export const getPost = (slug) => {
  return request.get(`/post/${slug}`).then((res) => {
    return res.body
  })
}
