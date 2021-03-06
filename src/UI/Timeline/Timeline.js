import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = (props) => {
    const items = props.items.map( (val, index) => {
        return <TimelineItem title={val.title} content={val.content} key={index} />
    });
    return (
        <div className="timeline">
            {items}
        </div>
    );
}

export default Timeline;