import { NavLink as RRD_Navlink } from "react-router-dom";

const Navlink = ({to, title}) => {
    
        return(
        <RRD_Navlink
            to={to}
            style={({ isActive }) => {
                return {
                    color: isActive ? 'rgba(255, 192, 31, 1)' : 'black'
                }

            }
        }
        >
            {title}

        </RRD_Navlink>
        )
}


export default Navlink