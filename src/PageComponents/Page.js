import React from 'react';

const Page = (props) => {
    
    
    
    return (
        <div className={["wrapper", props.class, "active"].join(' ')}>
            {props.render}
            {props.children}
        </div>
    )
}
    


export default Page;