import React, { Component } from 'react'
import {database} from '../firebase'

class CreateForm extends Component {
  state = { title: '', body: ''}

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(post)
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="First Name" onChange={this.handleChange} value={this.state.title}/>
          </div>
          <div className="field">
            <label>Body</label>
            <textarea name="body" onChange={this.handleChange}  value={this.state.body}></textarea>
          </div>
          <button className="ui button blue" type="submit">Submit</button>
        </form>
    </div>
    )
  }
}

export default CreateForm