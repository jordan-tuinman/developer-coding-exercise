import request from 'superagent'

// Get list of posts - title and slug - JSON Array
export const getPostsList = () => {
  return request.get()
}

// Get post content - JSON
export const getPost = () => {
  return request.get()
}
