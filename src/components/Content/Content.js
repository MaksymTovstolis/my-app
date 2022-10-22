import React from "react";
import classes from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'


const Image = (props) => {
  return (
    <img src="https://djq098wr042w0.cloudfront.net/media/Norway9.jpg" className={classes.Main_photo}></img>
  )
}

const Greeting = (props) => {
  return (
    <div>Hello Yana (не жопа,а сонечко)</div>
  )
}

const Content = () => {
    return   <div className = {classes.content}>
    <Image />
    <Greeting />
    <MyPosts />
  </div>
}

export default Content;