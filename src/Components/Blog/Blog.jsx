import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.blog)
    const {authorname, tittle, coverimage, authorimage, readetime, publishdate, hash} = props.blog;
    return (
        <div className="blog-main">
            <img className="cover-img" src={coverimage} alt="" />
            <div className="book-mark">
                <div className="user-date">
                    <img src={authorimage} alt="" />
                    <div>
                        <h4>{authorname}</h4>
                        <small>{publishdate}</small>
                    </div>
                </div>
                <div className="read-time">
                    <h5>{readetime} min read </h5>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>
            <h2>{tittle}</h2>
            <small>{hash}</small> <br />
            <u className="small"><small>Mark as read</small></u>
            <hr />
        </div>
    );
};

export default Blog;