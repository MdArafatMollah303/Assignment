//import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';

const Comment = (props) => { 
    const {userid} = props.post ;
    return (
        <div>
            <h1>{userid}</h1>
            
        </div>
    );
};

export default Comment;