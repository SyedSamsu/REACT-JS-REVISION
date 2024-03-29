import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor () {
    super()
    this.state = {
      userId: ' ',
      title: ' ',
      body: ' '
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render () {
    const { userId, title, body } = this.state

    return (
      <div >
        <form onSubmit={this.submitHandler}>

          <div className='formUI'>
            <label> UserID : </label>
            <input
              type='text'
              name='userId'
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>

          <div className='formUI'>
          <label> Title : </label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>

          <div className='formUI'>
          <label> Body : </label>
            <input
              type='text'
              name='body'
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>

          <button type='submit'> Submit </button>

        </form>
      </div>
    )
  }
}

export default PostForm
