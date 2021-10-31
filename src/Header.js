import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
    const { width } = useWindowSize();
    return (
        <header className="Header">
            <h3>{title}</h3>
            <div className="plateform">
                {width < 768 ? <FaMobileAlt style={{fontSize: "23px"}}/>
                    : width < 992 ? <FaTabletAlt style={{fontSize: "23px"}}/>
                        : <FaLaptop style={{fontSize: "40px"}}/>}
            </div>
        </header>
    )
}

export default Header
