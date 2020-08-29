import React from 'react';
import './style.css';
import { SideBar } from '../../components';
import { ChatAvatarsContainer } from '../../components';
import { ChatWindow } from '../../components';
import { ChatUserInfo } from '../../components'

export const ChatPage = () => {
    return (
        <div className="chat-page-container">
            <SideBar select={"chat"} />
            <div className="main-section">
                <ChatAvatarsContainer />
                <div className="chat-section-part">
                        <div className="chat-page-section">
                            <div className="chatting-section">
                                <ChatWindow />
                            </div>
                            <div className="chatting-user-info-section">
                                <ChatUserInfo />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
