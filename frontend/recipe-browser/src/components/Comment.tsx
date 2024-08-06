import React from 'react';

const Comment: React.FC<{ comment: any }> = ({ comment }) => (
    <div>
        <p>{comment.text}</p>
    </div>
);

export default Comment