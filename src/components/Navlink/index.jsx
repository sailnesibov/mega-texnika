import { NavLink as RRD_Navlink, useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from "react";
import { Menu, MenuItem, } from "@mui/material";


const Navlink = ({ to, title, links }) => {
    const [hover, setHover] = useState(false)
    const [anchorElem,setAnchorElem]=useState(false)
    const navigate=useNavigate()
    return (
        <>
            <RRD_Navlink
                to={to}
                style={({ isActive }) => {
                    return {
                        color: isActive ? 'rgba(255, 192, 31, 1)' : 'black'
                    }

                }}
                onMouseEnter={(e) => {
                    setHover(true)
                    setAnchorElem(e.target)
                }}
                onMouseLeave={() => {
                    setHover(false)
                }}
            >
                {title}

                {
                    Array.isArray(links) &&
                    <ExpandMoreIcon
                        sx={{ color: 'rgba(255, 192, 31, 1)', fontSize: "1rem ", transform: "translate(0, 3px)" }} />

                }
                {
                    Array.isArray(links) && hover &&

                    <Menu
                        open={true}
                        onClose={()=>setHover(false)}
                        anchorEl={anchorElem}
                    >
                         {
                            links.map((link) => {
                                return <MenuItem
                                    key={link.id}
                                    onClick={() => navigate(link.to)}
                                >{link.title}
                                </MenuItem>
                            })
                        }
                        
                    </Menu>
                }
            </RRD_Navlink>

        </>
    )
}


export default Navlink



