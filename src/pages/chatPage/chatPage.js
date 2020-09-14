import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { SideBar } from '../../components';
import { ChatAvatarsContainer } from '../../components';
import { ChatWindow } from '../../components';
import { ChatUserInfo } from '../../components';
import { GET_PATIENTS_LIST } from '../../store/actionNames/homePageActions';

export const ChatPage = () => {
    const dispatch = useDispatch();
   
    // Dispatch the action for get patient list after components mounted
    useEffect(() => {
        dispatch({ type: GET_PATIENTS_LIST });
    }, []);

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
