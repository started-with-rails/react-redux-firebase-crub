import React, { Component } from 'react'

class PostItem extends Component{
    
    render(){
        const {post, postKey, deletePost} = this.props
        return(
            <div className="item">
                <div className="right floated content">
                <div className="ui button red" onClick={() => deletePost(postKey)}>Remove</div>
                </div>
                <div className="content">
                    <h2 className="header">{post.title}</h2>
                    <div className="description">
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        )
    }
   
}
export default  PostItem;