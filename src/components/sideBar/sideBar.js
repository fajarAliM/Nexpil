import React from 'react';
import './style.css';
import { BsPerson, BsCalendar, BsChatSquareDots, BsBell, BsGear } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { routers } from '../../config/router';
import { Link } from "react-router-dom";

export const SideBar = () => {
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }
    return (
        <div className="side-bar">
            <h1 className="side-bar-title">n<span style={specialColorFont}>.</span></h1>
            <div className="navigation-icons-container">
                <div className="navigation-icon-none-selected">
                    <Link to={routers.USERDETAILPAGE}><BsPerson size="33px" color={sharedColors.primaryFontColor} /></Link>
                </div>
                <div className="navigation-icon-none-selected">
                    <BsCalendar size="33px" color={sharedColors.primaryFontColor} />
                </div>
                <div className="navigation-icon-none-selected">
                    <BsChatSquareDots size="33px" color={sharedColors.primaryFontColor} />
                </div>
                <div className="navigation-icon-none-selected">
                    <BsBell size="33px" color={sharedColors.primaryFontColor} />
                </div>
                <div className="navigation-icon-none-selected">
                    <BsGear size="33px" color={sharedColors.primaryFontColor} />
                </div>
            </div>
        </div>
    )
}
