import React from 'react';
import { connect } from 'react-redux';
import blogs from '../reducers/blogs';

const BlogList = ({ blogs }) => (
  <ul>
    { blogs.map( (t) => {
      return (
        <li key={t.id}>
          {t.name}
        </li>
        )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)