import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name } = this.state
    const blog = { name, id }
    dispatch({ type: 'ADD_BLOG', blog })
    dispatch({ type: 'INC_ID' })
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }
  render() {
    const { name } = this.state

    return (
      <di>
        <h3>Add A Blog</h3>
        <form onSubmit={this.handdleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </di>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);