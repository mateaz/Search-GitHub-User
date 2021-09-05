import React from 'react';
import PropTypes from 'prop-types';
import { BsGeo } from "react-icons/bs";



export default function Data ({ avatar, name, location, bio}) {
    
    return (
        <div id="data-user">
            <img src={avatar} width={150} alt={name} />
            <div id="user-info">
                <div id="name-location-user">
                    {name ? <h2><b>{name}</b></h2> : null}
                    {location ? <p><b><BsGeo/> </b>{location}</p> : null}
                </div>
                {bio ? <p><span>{bio}</span></p> : null}
                {bio && name ? null : <em>No further informations about this user</em>}
            </div>
        </div>
    )
}

Data.propTypes={
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    location: PropTypes.string, 
    bio: PropTypes.string
}