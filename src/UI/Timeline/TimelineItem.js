import React from 'react';
import Wrap from '../../Layout/Wrap';

const TimelineItem = (props) => (
    <Wrap>
        <div className="timeline-item">
            <div className="dot"></div>
            <div className="timeline-filler"></div>
            <div className="timeline-content">
                <div className="t-year"><strong>{props.year}</strong></div>
                <div className="t-desc">
                    {props.desc}
                </div>
            </div>
        </div>
    </Wrap>
);

export default TimelineItem;