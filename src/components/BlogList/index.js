// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {list} = this.props
    return (
      <ul className="list-container">
        {list.map(eachBlog => (
          <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
