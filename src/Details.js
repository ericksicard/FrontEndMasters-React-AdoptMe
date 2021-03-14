import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let { id } = useParams();

    return (
        <div>
            <h3>{id}</h3>
        </div>
    )
};

export default Details;