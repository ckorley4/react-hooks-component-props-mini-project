import React from 'react'
import Article from './Article'

export default function ArticleList({ posts }) {
  const postsArr = posts.map((postObj) => (
    <Article
      key={postObj.id}
      title={postObj.title}
      date={postObj.date}
      preview={postObj.preview}
    />
  ))
  return <main>{postsArr}</main>
}
