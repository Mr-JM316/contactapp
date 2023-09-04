import React from "react";
import user from '../images/batman.jpeg';


const ContactCard = (props) =>{
    const {id,name,emailid} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
            <div className="header">{name}</div>
            <div>{emailid}</div>
        </div>
        <i className="trash alternate outline icon">
        </i>
        </div>
    );

};

export default ContactCard;