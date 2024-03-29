// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, publishedDate, description} = eachBlog
  return (
    <div className="blog-item">
      <div className="post-time">
        <h1 className="heading">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default BlogItem
