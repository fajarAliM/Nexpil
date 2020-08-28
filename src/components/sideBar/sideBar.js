import React, { useState } from 'react';
import './style.css';
import { BsPerson, BsCalendar, BsChatSquareDots, BsBell, BsGear } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { routers } from '../../config/router';
import { Link } from "react-router-dom";

const navIcons = [
    {
        element: <BsPerson size="33px" color={sharedColors.primaryFontColor} />,
        selected: true,
    }, {
        element: <BsCalendar size="33px" color={sharedColors.primaryFontColor} />,
        selected: false,
    }, {
        element: <BsChatSquareDots size="33px" color={sharedColors.primaryFontColor} />,
        selected: false,
    }, {
        element: <BsBell size="33px" color={sharedColors.primaryFontColor} />,
        selected: false,
    }, {
        element: <BsGear size="33px" color={sharedColors.primaryFontColor} />,
        selected: false,
    },
]

export const SideBar = () => {
    // Style for special text
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }

    const [navMenu, setNavMenu] = useState(navIcons);

    // Highlight selected icon
    const setHighlight = (elementItem) => {
        let virtualArray = [];
        for(let i = 0; i < navMenu.length; i++) {
            if(i !== elementItem) virtualArray.push({...navMenu[i], selected: false});
            if(i === elementItem) virtualArray.push({...navMenu[i], selected: true})
        }
        setNavMenu(virtualArray)
    }
    return (
        <div className="side-bar">
            <h1 className="side-bar-title">n<span style={specialColorFont}>.</span></h1>
            <div className="navigation-icons-container">
                {navMenu.map((item, i) =>
                    <div onClick={()=>setHighlight(i)} key={i} className={item.selected == false ? "navigation-icon-none-selected" : "navigation-icon-selected"}>
                        {item.element}
                    </div>
                )}
            </div>
        </div>
    )
}
