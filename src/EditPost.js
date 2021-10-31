import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { FaArrowLeft } from "react-icons/fa";

const EditPost = () => {
    const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle} = useContext(DataContext);
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);

        }
    }, [post, setEditTitle, setEditBody]);
    return (
         <main className="NewPost">
            {editTitle && 
                <>
                    <div className="back" style={{marginTop: "-12px"}}>
                        <Link to={`/post/${id}`} style={{marginLeft: "-2px"}}>
                            <FaArrowLeft className="arrowBack"/><br /><br />
                        </Link>
                    </div>
                    <h2 style={{fontSize: "25px"}}>Edit Post</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                                type="text" 
                                id="postTitle"
                                required
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <label htmlFor="postBody">Post:</label>
                            <textarea
                                id="postBody"
                                required
                                value={editBody}
                                onChange={(e) => setEditBody(e.target.value)}
                            />
                            <div className="post-btn">
                                <button type="submit" onClick={() => handleEdit(post.id)}>
                                    <p>Save</p>
                                </button>
                            </div>
                    </form>
                </>
            }
             {!editTitle && 
                    <>
                        <br />
                        <h3 style={{textAlign: "center"}}>Post Not Found</h3>
                        <p style={{textAlign: "center"}}>Well, that's disappointing.</p>
                        <p style={{textAlign: "center"}}>
                            <Link to="/">Visit Homepage</Link>
                        </p>
                    </>
                }
       </main>
    )
}

export default EditPost
