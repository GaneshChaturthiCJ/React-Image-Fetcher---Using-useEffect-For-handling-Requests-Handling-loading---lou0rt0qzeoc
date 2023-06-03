import React from 'react';

export const PhotoFrame = ({url,title}) => {
   
    console.log(url,title);

    return (
        <div className='photoframe'>
            <img src={url} title={title} />
            <div className="caption">
                {title}
            </div>
        </div>
        
    )
}