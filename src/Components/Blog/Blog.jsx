import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Blog = (props) => {
    const {setCart, cart, time, setTime, blog} = props;
    const {id, authorname, tittle, coverimage, authorimage, readetime, publishdate, hash} = props.blog;
    const notify = () => toast("You Have Already Bookmarked This Blog");



    const handleTime = () =>{
        const readTime = time;
        const newReadTime = +readTime + blog.readetime;
        setTime(newReadTime);
    }
    const handleBookmark =()=>{
        const exist = cart.find((i)=> i.id == id)
        if(exist){
            notify()    
        }
        else{
            setCart((priv)=>[...priv, props.blog])

        }

    }

    return (
        <div className="blog-main">
            <ToastContainer/>
            <img className="cover-img" src={coverimage} alt="" />
            <div className="book-mark">
                <div className="user-date">
                    <img src={authorimage} alt="" />
                    <div className="name-date">
                        <h4>{authorname}</h4>
                        <small>{publishdate}</small>
                    </div>
                </div>
                <div className="read-time">
                    <h5>{readetime} min read </h5>
                    <FontAwesomeIcon onClick={handleBookmark} icon={faBookmark} />
                </div>
                
            </div>
            <h2>{tittle}</h2>
            <small>{hash}</small> <br />
            <button className="marks-as-read" onClick={handleTime} ><u className="small"><small>Mark as read</small></u></button>
            <hr />
        </div>
    );
};

export default Blog;