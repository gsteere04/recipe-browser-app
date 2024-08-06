import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Comment from './Comment';

const CommentList: React.FC<{ recipeId: number }> = ({ recipeId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const response = await api.get(`/recipes/${recipeId}/comments/`);
            setComments(response.data);
        };
        fetchComments();
    }, [recipeId]);
    
    return (
        <div>
            {comments.map((comment: any) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    );
};

export default CommentList