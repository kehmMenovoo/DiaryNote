import { useParams, Link } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const PostPage = () => {
    const {posts, handleDelete} = useContext(DataContext);
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
       <main className="PostPage">
           <article className="post">
                {post && 
                    <>
                        <div className="back" style={{marginTop: "-30px"}}>
                            <Link to="/">
                                <FaArrowLeft className="arrowBack"/><br /><br />
                            </Link>
                        </div>
                        <div className="postTitle">
                            <div className="postTitle_head">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="postTool">
                                <Link to={`/edit/${post.id}`} className="editButton">Edit</Link>
                                <button onClick={() => handleDelete(post.id)} title="Delete">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                    </>
                }
                {!post && 
                    <>
                        <br />
                        <h3 style={{textAlign: "center"}}>Post Not Found</h3>
                        <p style={{textAlign: "center"}}>Well, that's disappointing.</p>
                        <p style={{textAlign: "center"}}>
                            <Link to="/">Visit Homepage</Link>
                        </p>
                    </>
                }
           </article>
       </main>
    )
}

export default PostPage
