import Feed from './Feed';
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from 'react-router-dom';

const Home = () => {
    const {searchResults, fetchError, isLoading} = useContext(DataContext);
    return (
       <main className="Home">
            {isLoading && <p className="statusMsg" style={{color: 'gray'}}>Loading...</p>}
            {!isLoading && fetchError && 
                <p className="statusMsg" style={{color: "red"}}>
                    {fetchError}
                </p>
            }
            {!isLoading && !fetchError && 
                (searchResults.length ? <Feed posts={searchResults} /> 
                : <p className="statusMsg">
                    No post is found
                </p>)
            }

            {/* {searchResults.length ? (
                <Feed searchResults={searchResults} />
            ) : (
                <p style={{textAlign: "center", marginTop: "100px", color: "gray"}}>No post to display</p>
            )} */}
       </main>
    )
}

export default Home
