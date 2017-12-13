import React from 'react';
import Page from '../../PageComponents/Page';
import './Error.css';

const Error = (props) => {
    const initial = "http://perrymarkg.github.io" + props.location.pathname + " is not available ...";
    let text = "Nothing to see here really!.\n\n" +
    "\nBut hey since you already saw this message on \"http://perrymarkg.github.io"+ props.location.pathname +"\", check back again sometime." +
    "\n\nI am in the process of learning new things to add more features to this site or hopefully start building an awesome web app." +
    "\n\nOn the web:" +
    "\nhttps://steamcommunity.com/id/tipzee89/" +
    "\nhttp://www.facebook.com/tipzee89" +
    "\n\nCheers!";

    return(
    <Page class={props.class}>
        <div className="container">
            <h2><span className="fa fa-exclamation-triangle"></span> Page Not FOund!</h2>
            <p>{initial}</p>
            <p>{btoa(text)}</p>
        </div>
    </Page>
    )
}

export default Error;