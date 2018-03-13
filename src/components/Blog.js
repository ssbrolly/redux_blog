import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    styles={ complete ? {textDecoration: 'line-through', color: 'grey'} : 
  {} 
  }
 >
 {name}
 </li>
)
export default connect()(Blog)