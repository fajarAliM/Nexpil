import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { GET_USER } from '../../store/actionNames';
import './style.css';
import { BsSearch, BsFillPlusCircleFill, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { users } from '../../service/users';

export const ChatAvatarsContainer = () => {
    const dispatch = useDispatch();
    // Style for the highlighted text.
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }
    const [usersData, setUsersData] = useState(users);
    const [arrowDirection, setArrowDirection] = useState(true);
    const showAvatar = useRef();

    // select user
    const setHighlightedUser = (userItem) => {
        let virtualArray = [];
        for (let i = 0; i < usersData.length; i++) {
            if (i !== userItem) virtualArray.push({ ...usersData[i], selected: false });
            if (i === userItem) virtualArray.push({ ...usersData[i], selected: true })
        }
        setUsersData(virtualArray);
        dispatch({ type: GET_USER, payLoad: usersData[userItem] });
        const width = window.innerWidth;
        if (width <= 890) {
            showAvatar.current.className = showAvatar.current.className === "avatar-main-section" ? "avatar-main-section-showed" : "avatar-main-section";
            setArrowDirection(true);
        }
    }
    const toggleAvatar = () => {
        showAvatar.current.className = showAvatar.current.className === "avatar-main-section" ? "avatar-main-section-showed" : "avatar-main-section";
        setArrowDirection(!arrowDirection);
    }
    return (
        <div className="avatars">
            <div className="show-avatars" onClick={() => toggleAvatar()}>
                {arrowDirection ? <BsChevronCompactDown color="white" /> : <BsChevronCompactUp color="white" />}
            </div>
            <div className="avatar-main-section" ref={showAvatar}>
                <div className="avatars-title-container">
                    <h1 className="avatars-title-text">Chat<span style={specialColorFont}>.</span></h1>
                </div>
                <div className="search-bar">
                    <BsSearch size="18px" color={sharedColors.primaryFontColor} className="search-icon" />
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <div className="users-avatar">
                    {usersData.map((user, i) =>
                        <div onClick={() => setHighlightedUser(i)} key={i} className={user.selected == false ? "user-avatar" : "user-avatar-selected"}>
                            <img className="avatar-image" src={user.url} />
                            <div className="user-info">
                                <p className="user-name-text">{user.name}</p>
                                <p className="user-chats-text">{user.lastChat}</p>
                            </div>
                            <div className="chat-info-part">
                                <p className={user.selected == false ? "chat-date" : "chat-date-selected"}>{user.chatDate}</p>
                                {user.lastChatNumber !== 0 &&
                                    <div className={user.selected == false ? "chat-number" : "chat-number-selected"}>
                                        <p>{user.lastChatNumber}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
