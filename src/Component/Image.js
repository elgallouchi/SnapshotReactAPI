import React from 'react';

function Image (props) {
    return (
        <div>
            <img src={props.src} alt="test alt" />
        </div>
    );
}

export default Image;
