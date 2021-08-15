const fs = require('fs')
const path = require('path')

function getPostsInfo() {
  const dir = path.join(__dirname, '../../assets/posts')
  const fileNames = fs.readdirSync(dir)

  const postTitleSlug = fileNames.map((file) => {
    const title = titleCase(file.replace('.md', '').split('-').join(' '))
    const slug = file.replace('.md', '')
    return {
      title: title,
      slug: slug,
    }
  })
  // return JSON array
  return postTitleSlug
}

function getPostContent(title) {
  const post = path.join(__dirname, `../../assets/posts/${title}.md`)
  const content = fs.readFileSync(post, 'utf-8')
  // returns content in string
  return content
}

function titleCase(str) {
  str = str.split(' ')
  str = str.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return str.join(' ')
}

module.exports = {
  getPostContent,
  getPostsInfo,
}
