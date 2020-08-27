import React from 'react';
import './style.css';
import { BsSearch, BsFillPlusCircleFill } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { users } from '../../service/users';

export const AvatarsContainer = () => {
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }
    return (
        <div className="avatars">
            <div className="avatar-main-section">
            <div className="avatars-title-container">
                <h1 className="avatars-title-text">Patients<span style={specialColorFont}>.</span></h1>
                <BsFillPlusCircleFill color={sharedColors.primaryButtonsColor} className="avatars-title-add-button" />
            </div>
            
            <div className="search-bar">
                <BsSearch size="18px" color={sharedColors.primaryFontColor} className="search-icon" />
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="users-avatar">
                {users.map((user, i) =>
                    <div key={i} className="user-avatar">
                        <img className="avatar-image" src={user.url} />
                        <div className="user-info">
                            <p className="user-name-text">{user.name}</p>
                            <p className="user-type-text">{user.type}</p>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}
