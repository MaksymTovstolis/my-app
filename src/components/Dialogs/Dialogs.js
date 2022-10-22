import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const DialogItem = (props) => {
    return (
    <div className={classes.dialog + ' ' + classes.active}> 
    <NavLink end to = {'/dialogs/' + props.id} style={({isActive}) => ({color : isActive ? 'gold' : 'white'})}  >{props.name}</NavLink>
</div>
)
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
    
}

const Dialog = (props) => {
    let dialogsData = [
        {id: 1, name: 'Yana'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Leha'},
        {id: 5, name: 'Den'},
        {id: 6, name: 'Miha'}
    ]

    let messageData = [
        {id: 1, message: 'HI'},
        {id: 2, message: 'Hi hi'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]

    return (
    <div className={classes.dialogs}>
        <div className={classes.dialog_items}> 
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
        </div>
        <div className={classes.messages}>
            <Message message = {messageData[0].message}/>
            <Message message = {messageData[1].message}/>
            <Message message = {messageData[2].message}/>
        </div>
    </div>
 )
}

export default Dialog;