const fs = require('fs')
const path = require('path')

function getPostInfo() {
  const dir = path.join(__dirname, '../../assets/posts')
  const fileNames = fs.readdirSync(dir)

  const postTitleSlug = fileNames.map((file) => {
    const title = file.replace('.md', '').split('-').join(' ')
    const slug = file.replace('.md', '')
    return {
      title: title,
      slug: slug,
    }
  })
  // return JSON array
  console.log(postTitleSlug)
  return postTitleSlug
}

console.log(getPostInfo())

function getPostContent(title) {
  const post = path.join(__dirname, `../../assets/posts/${title}.md`)
  const content = fs.readFileSync(post, 'utf-8')
  // returns content in string
  return content
}

console.log(typeof getPostContent('mediasuite-tech-stack'))
console.log(getPostContent('mediasuite-tech-stack'))
