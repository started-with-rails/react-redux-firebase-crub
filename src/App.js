import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
import {database} from './firebase'

class  App extends Component {
 state = {posts: []}
 componentDidMount(){
    database.on('value', (snapshot) => {
      this.setState({posts: snapshot.val()})
    });
 } 
 render(){
  return (
    <div className="ui container">
      <CreateForm />
      <PostList posts={this.state.posts}/>
    </div>
  );
 }
}

export default App;
