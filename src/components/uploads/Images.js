import React from "react";

export default props =>
    props.images.map((image, i) => (
        <div key={i} className='fadein'>
            <div
                onClick={() => props.removeImage(image.public_id)}
                className='delete'>
                <i className='fas fa-times-circle fa-2x' />
            </div>
            <img src={image.secure_url} alt='' />
        </div>
    ));
