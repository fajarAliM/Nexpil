import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { SideBar } from '../../components';
import { AvatarsContainer } from '../../components';
import { sharedColors } from '../../theme/sharedColor';
import { UserDataComponent } from '../../components';
import axios from 'axios';

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

    useEffect(() => {

        axios.post(`https://nexp.xyz/nexpil/task_byuser.php`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }, [])

    // Get the main section states.
    const mainSectionState = useSelector(state => state.HomeReducer);
    return (
        <div className="intro-page-container">
            <SideBar select={"home"} />
            <div className="main-section">
                <AvatarsContainer setMainSection={setMainSection} />
                {mainPart === "intro" &&
                    <div className="intro-section-part">
                        <div className="intro-page-intro-section">
                            <div>
                                <h1 className="intro-title">Good Morning<span style={specialColorFont}>,</span><br />Dr<span style={specialColorFont}>.</span> Smith</h1>
                                <p className="intro-description">Click on a patient on the left to view<br />their medical record</p>
                            </div>
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
