import React from 'react';
import './style.css';
import { SideBar } from '../../components';
import { AvatarsContainer } from '../../components';

export const UserDetailPage = () => {
    return (
        <div className="users-page-container">
            <SideBar />
            <div className="main-section">
                <AvatarsContainer />
                <p>this is user details page.</p>
            </div>
        </div>
    )
}
