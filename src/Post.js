import { Link } from "react-router-dom";

const Post = ({post}) => {
    const end3dots = function(e) {
        const myArr = e.split(" ");
        let res ="";
        let i=0;
        for(i; i<10; i++){
            res = i<9 ? (res + myArr[i] + " ") : (res + myArr[i]);
        }
        res += '...';
        return res;
    }
    return (
       <article className="post">
           <Link to={`/post/${post.id}`} >
               <h4>{post.title}</h4>
               <p className="postDate">{post.datetime}</p>
           </Link>
           <p className="postBody">
                {(post.body).length <= 50 ? post.body : `${end3dots(post.body)}`}
           </p>
       </article>
    )
}

export default Post
