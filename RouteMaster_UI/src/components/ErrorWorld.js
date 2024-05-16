import React from 'react';
import background from '../assets/images/bus.jpg';

/**
 * this component renders error page for wrong url
 */
function ErrorWorld(props) {
    return (
        <div className="container-fluid" style={styling.bg}>
            <h1 style={styling.heading}>
                You are on the wrong planet!!
            </h1>
        </div>
    );
}

let styling = {
    bg : {
        background : `url(${background}) no-repeat fixed center`,
        width : "100%",
        height : '100vh'
    },
    heading : {
        textAlign: "center",
        position: "relative",
        top: "15%",
        fontFamily: "fantasy",
        border: "2px #333333",
        color: "#ffffff"
    }
}

export default ErrorWorld;