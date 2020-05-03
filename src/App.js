import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import PostList from './components/PostList';
import {connect} from 'react-redux';
import {getPosts} from './actions/postsAction';

class  App extends Component {
 state = {posts: []}
 componentDidMount(){
    getPosts();
 } 
 render(){
  return (
    <div className="ui container">
      <CreateForm />
      <PostList posts={this.props.posts}/>
    </div>
  );
 }
}
function mapStateToProps(state, ownProps){
  return{
    posts: state.posts
  }
}
const mapDispatchToProps = dispatch => ({
  getPosts: dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
