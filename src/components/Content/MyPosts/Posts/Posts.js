import React from "react";
import classes from './Posts.module.css'

const Posts = (props) => {
  console.log(props.message)
    return (
      <div className={classes.item}>
        <img src='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg' className={classes.img_logo}></img>
          {props.message}
          <div>
            <span>{props.likes}</span>
          </div>
        </div>
    )
}

export default Posts;