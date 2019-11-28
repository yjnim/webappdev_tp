import React from 'react';

const Introduction = ({match}) => {
    return (
        <div>
            Introduction {match.params.id}
        </div>
    );
};

export default Introduction;