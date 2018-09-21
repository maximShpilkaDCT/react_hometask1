import React from 'react';

import Article from './Article';

function CommentList(props) {
    console.log(props.comments);
    const commentElements = props.comments.map(comments => <li key={comments.id}>{comments.text}</li>)
    return (
        <ul>
            {commentElements }
        </ul>
    )
}

export default CommentList;