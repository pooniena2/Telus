import React from 'react';

// **** import style ****
import './UserOutput.css';
const userOutput = (props) => {
    return (
        <div className="UserOutput" >
            <p>Username: {props.userName} </p>
            <p>This is the paragraph of your choice</p>
        </div>
    );
};
export default userOutput;