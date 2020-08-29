import React, { useState, useEffect } from 'react';
import './style.css';
import { BsPerson, BsCalendar, BsChatSquareDots, BsBell, BsGear } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { routers } from '../../config/router';
import { Link } from "react-router-dom";

const navIcons = [
    {
        route: routers.HOMEPAGE,
        element: <BsPerson size="33px" color={sharedColors.primaryFontColor} />,
        id: 'home',
    }, {
        route: "",
        element: <BsCalendar size="33px" color={sharedColors.primaryFontColor} />,
        id: 'calendar',
    }, {
        route: routers.CHATPAGE,
        element: <BsChatSquareDots size="33px" color={sharedColors.primaryFontColor} />,
        id: 'chat',
    }, {
        route: "",
        element: <BsBell size="33px" color={sharedColors.primaryFontColor} />,
        id: 'notify',
    }, {
        route: "",
        element: <BsGear size="33px" color={sharedColors.primaryFontColor} />,
        id: 'setting',
    },
]

export const SideBar = ({select}) => {
    // Style for special text
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }

    const [navMenu, setNavMenu] = useState(navIcons);
    const [selectedTab, setSelectedTab] = useState();
    useEffect(() => {
        setSelectedTab(select)
    }, [select]);

    return (
        <div className="side-bar">
            <h1 className="side-bar-title">n<span style={specialColorFont}>.</span></h1>
            <div className="navigation-icons-container">
                {navMenu.map((item, i) =>
                    <Link to={item.route}>
                        <div id={item.id} key={i} className={item.id !== selectedTab ? "navigation-icon-none-selected" : "navigation-icon-selected"}>
                            {item.element}
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}
