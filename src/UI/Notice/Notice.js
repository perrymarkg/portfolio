import React from 'react';
import './Notice.css'

const Notice = (props) => (
    <div className={["notice", props.type].join(' ')}>
        {props.children}
    </div>
);

export default Notice;