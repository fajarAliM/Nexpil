import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { BsFillCameraVideoFill, BsPlus } from "react-icons/bs";
import { routers } from "../../config/router";
import { Link } from "react-router-dom";

const chatRecords = [
    {
        key: "recieved",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor libero libero, vel viverra quam iaculis et. Vestibulum nulla augue, fringilla nec libero id, pulvinar malesuada lacus."
    }, {
        key: "sent",
        text: "Suspendisse potenti. Nullam cursus ligula nec tortor porttitor, in ultricies nisl dictum.",
    }
]

export const ChatWindow = ({page}) => {
    const patient = useSelector(state => state.usersSelect);
    const [chatTexts, setChatTexts] = useState(chatRecords);

    return (
        <div className="chat-main-part">
            <div className="chat-user-name">
                <div className="chat-patient-name-title">
                    <p className="chat-patient-name">Elise Antoine</p>
                    {!page && <p className="chat-user-net-state">Online</p>}
                </div>
                {!page && <Link to={routers.DETAIL_PAGE}>
                    <div className="video-call-button">
                        <BsFillCameraVideoFill color="white" size="15px" />
                    </div>
                </Link>}
            </div>
            <div className="chat-text-section">
                {chatTexts.map((item, i) =>
                    <div className={item.key === "recieved" ? "chat-text-recieved" : "chat-text-sent"}>
                        <img src={patient.url} className="chat-avatar-image" />
                        <div className={item.key === "recieved" ? "recieved-chat-text" : "sent-chat-text"}>
                            <p className="chat-text">{item.text}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="chat-text-input-section">
                <div className="chat-text-input-plus-button">
                    <BsPlus size="20px" color="#4939E3" />
                </div>
                <div className="chat-text-input-div">
                    <input className="chat-text-input" type="text" placeholder="Type a message..." />
                    <p className="chat-text-send-button">Send</p>
                </div>
            </div>
        </div>
    )
}
