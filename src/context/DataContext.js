import { createContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import api from '../api/posts';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const history = useHistory();
  
    const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');
    
    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     try{
    //       const response = await api.get('/posts');
    //       setPosts(response.data);
    //     }
    //     catch(err) {
    //       // Not in the 200 response range
    //       if(err.response) {
    //         console.log(err.response.data);
    //         console.log(err.response.status);
    //         console.log(err.response.headers);
    //       }
    //       else {
    //         console.log(`Error: ${err.message}`);
    //       }
    //     }
    //   }
    //   fetchPosts();
    // }, [])
    useEffect(() => {
      setPosts(data);
    }, [data]);
  
    useEffect(() => {
      const filteredResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
      setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length -1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy ') + formatAMPM(new Date);
        const newPost = {id, title: postTitle, datetime, body: postBody};
        try{
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            history.push('/');
        }
        catch(err) {
          console.log(`Error ${err.message}`);
        }
    
    }
    
    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy ') + formatAMPM(new Date);
        const updatePost = {id, title: editTitle, datetime, body: editBody};
        try{
            const response = await api.put(`/posts/${id}`, updatePost);
            setPosts(posts.map(post => post.id === id ? {...response.data} : post));
            setEditTitle('');
            setEditBody('');
            history.push(`/post/${id}`);
        }
        catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }
    
    const handleDelete = async (id) => {
        try{
          await api.delete(`/posts/${id}`);
          const postList = posts.filter(post => post.id !== id);
          setPosts(postList);
          history.push('/');
        }
        catch(err) {
          console.log(`Error ${err.message}!`);
        }
    }

    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, fetchError, isLoading,
            handleSubmit, postTitle, setPostTitle, postBody, setPostBody,
            posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle,
            posts, handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;