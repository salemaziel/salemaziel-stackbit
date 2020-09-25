import React from "react";
import Alert from "react-bootstrap/Alert";
import {Link} from "gatsby";

function Announcement(props) {
  return (
    <Alert variant={props.variant} className="border-0 rounded-0 text-center" style={{marginLeft: '2.5em'}}>
      {props.text}
      {` `}

      
        <a href="https://www.youtube.com/watch?v=DLzxrzFCyOs" rel="noreferrer nofollow" target="_blank" > {props.linkText}</a>
      
    </Alert>
  );
}

export default Announcement;
