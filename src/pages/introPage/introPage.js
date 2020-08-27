import React from 'react';
import './style.css';
import { SideBar } from '../../components';
import { AvatarsContainer } from '../../components';
import { sharedColors } from '../../theme/sharedColor';

export const IntroPage = () => {
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }
    return (
        <div className="intro-page-container">
            <SideBar />
            <div className="main-section">
                <AvatarsContainer />
                <div className="intro-page-intro-section">
                    <h1 className="intro-title">Good Morning<span style={specialColorFont}>,</span><br />Dr<span style={specialColorFont}>.</span> Smith</h1>
                    <p className="intro-description">Click on a patient on the left to view<br />their medical record</p>
                </div>
            </div>
        </div>
    )
}
