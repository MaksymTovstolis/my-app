import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Posts/Posts";

const MyPost = () => {
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post message = 'Hi,how are you? meeeew' likes = 'Likes : 15 ' />
          <Post message = 'Its meeeew first post' likes = 'Likes : 20' />
        </div>
      </div>
    )
}

export default MyPost;