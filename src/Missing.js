import { Link } from "react-router-dom";

const Missing = () => {
    return (
       <main className="Missing">
           <br />
            <h3 style={{textAlign: "center", color: "black"}}>Post Not Found</h3>
            <p style={{textAlign: "center", color: "black"}}>Well, that's disappointing.</p>
            <p style={{textAlign: "center"}}>
                <Link to="/">Visit Homepage</Link>
            </p>
       </main>
    )
}

export default Missing
