import React, { Component } from 'react'
import PostItem from './PostItem';
import {database} from '../firebase';

class PostList extends Component{

	deletePost = (key) =>{
		database.child(key).remove();
	}

	render(){
		if(!this.props.posts){
			return <div>No data...</div>
		}
		const posts = Object.entries(this.props.posts).map(([key,value])=>{
			return <PostItem key={key} postKey={key} post={value} deletePost={this.deletePost}/>
		})
		return(
			<div className="ui middle aligned divided list">{posts}</div>
		);
	}
}



export default PostList;