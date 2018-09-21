import React, {Component} from 'react';

import CommentList from './CommentList';

class Article extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            showComment: false
        }
    }
    render() {
        const {article} = this.props;
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    showCommentText = () => {
        this.setState({
            showComment: !this.state.showComment
        })
    };

    getBody() {
        return this.state.isOpen && <article>
            {this.props.article.text}
            <button onClick = {this.showCommentText}>{this.state.showComment ? <span>Hide</span> : <span>Show</span>}</button>
            {console.log(this.props.article.comments[0].text, this.state.showComment)}
            {this.state.showComment && <CommentList comments={this.props.article.comments}/>}
            </article>;
    };
}

export default Article;

/*export default function Article(props) {
    const {article} = props
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}*/