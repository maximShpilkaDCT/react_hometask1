import React from 'react';

import ArticleList from './ArticleList';
import CommentList from "./CommentList";

export default function App (props) {
    return (
        <div>
            <h1>News App</h1>
            <ArticleList articles={props.articles}/>
        </div>
    )
}