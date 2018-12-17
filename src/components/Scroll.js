import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '90vh'}}>
            {props.children}
        </div>
    );
};

export default Scroll;