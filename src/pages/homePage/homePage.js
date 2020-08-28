import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { SideBar } from '../../components';
import { AvatarsContainer } from '../../components';
import { sharedColors } from '../../theme/sharedColor';
import { UserDataComponent } from '../../components';

export const HomePage = () => {
    const [mainPart, setMainPart] = useState("intro");
    // Style for the highlighted text color.
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }

    // Set main section
    const setMainSection = (part) => {
        setMainPart(part)
    }

    // Get the main section states.
    const mainSectionState = useSelector(state => state.HomeReducer);
    console.log('main section switch', mainSectionState);
    return (
        <div className="intro-page-container">
            <SideBar />
            <div className="main-section">
                <AvatarsContainer setMainSection={setMainSection} />
                {mainPart === "intro" &&
                    <div className="intro-section-part">
                        <div className="intro-page-intro-section">
                            <h1 className="intro-title">Good Morning<span style={specialColorFont}>,</span><br />Dr<span style={specialColorFont}>.</span> Smith</h1>
                            <p className="intro-description">Click on a patient on the left to view<br />their medical record</p>
                        </div>
                    </div>
                }
                {mainPart !== "intro" &&
                    <UserDataComponent />
                }
            </div>
        </div>
    )
}
