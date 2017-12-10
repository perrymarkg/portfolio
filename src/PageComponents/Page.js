import React from 'react';

const Page = (props) => {
    let classes = ["wrapper", props.class];
    
    if( (!props.activePage && props.class === "home") || ( props.activePage === props.class ) )
        classes.push('active')
    

    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    )
}
    


export default Page;