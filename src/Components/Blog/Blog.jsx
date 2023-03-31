import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const alert = 'You Have Already Bookmarked This Blog'
const done = 'Bookmarked'

const Blog = (props) => {
    const {setCart, cart, time, setTime, blog} = props;
    const {id, authorname, tittle, coverimage, authorimage, readetime, publishdate, hash} = props.blog;
        const notify1 = (msg) => 
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });;
        
        const notify2 = (msg) => 
        toast(msg, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        



    const handleTime = () =>{
        const readTime = time;
        const newReadTime = +readTime + blog.readetime;
        setTime(newReadTime);
    }
    const handleBookmark =()=>{
        const exist = cart.find((i)=> i.id == id)
        if(exist){
            notify1(alert)    
        }
        else{
            notify2(done)
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
                    <ToastContainer/>
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