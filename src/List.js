import React from 'react';
import PropTypes from 'prop-types';

export default function List ({ userrepos, number}) {
    
    return (
            <li className='border'><span className="number-list">{number}</span> {userrepos}</li>
    )
}

List.propTypes={
    userrepos: PropTypes.string
}