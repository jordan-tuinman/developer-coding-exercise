import expectExport from 'expect'
import nock from 'nock'

import { getPost, getPostsList } from '.'

describe('getPostsList', () => {
  const fakePostsList = [{ title: 'fake title', slug: 'fake-slug' }]
  const scope = nock('http://localhost').get('/posts').reply(200, fakePostsList)

  test('returns array of posts titles and slugs', () => {
    expectExport.assertions(2)
    return getPostsList().then((postsList) => {
      expect(postsList).toEqual(fakePostsList)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getPost', () => {
  const fakeSlug = 'this-is-a-fake-slug'
  const fakePost = {
    post: { content: 'this is fake content', tags: ['fake', 'tag'] },
  }
  const scope = nock('http://localhost')
    .get(`/post/${fakeSlug}`)
    .reply(200, fakePost)

  test('returns post JSON from api', () => {
    expect.assertions(2)
    return getPost(fakeSlug).then((post) => {
      expect(post).toEqual(fakePost)
      expect(scope.isDone()).toBe(true)
    })
  })
})
