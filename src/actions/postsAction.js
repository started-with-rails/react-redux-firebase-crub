import { GET_POSTS } from "../actionTypes";
import { database } from "../firebase";

export function getPosts() {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: GET_POSTS,
        payload: snapshot.val()
      })
    })
  }
}

export function addPost(post) {
 return dispatch => database.push(post) 
}

