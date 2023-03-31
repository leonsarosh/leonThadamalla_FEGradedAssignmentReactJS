import React from 'react';

const MovieListHeading = (props: any) => {
    return (
        <div className='col pl-1'>
            <h5>{props.heading}</h5>
        </div>
    );
};

export default MovieListHeading;
