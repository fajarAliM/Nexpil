import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { BsChatSquareDots } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { MedicalRecord } from './medicalRecord';
import { LabResult } from './labResult';
import { AssignedText } from './assignedText';
import { DoctorNotes } from './doctorNotes';
import { Link } from "react-router-dom";
import { routers } from '../../config/router';

export const UserDataComponent = () => {
    const currectSelectedUser = useSelector(state => state.usersSelect);
    const [infoData, setInfoData] = useState();

    useEffect(() => {
        const userInfo = [
            {
                title: "Date of Birth",
                info: currectSelectedUser.birthday,
            }, {
                title: "Age",
                info: currectSelectedUser.age,
            }, {
                title: "Phone Number",
                info: currectSelectedUser.phoneNumber,
            }, {
                title: "Street Address",
                info: currectSelectedUser.address,
            }, {
                title: "City, State",
                info: currectSelectedUser.cityState,
            }, {
                title: "Zip Code",
                info: currectSelectedUser.zip,
            },
        ];
        setInfoData(userInfo);
    }, [])
    console.log('user info', infoData)

    // Style for primary color button
    const style = {
        background: `linear-gradient(to right, ${sharedColors.primaryButtonGradientStart}, ${sharedColors.primaryButtonGradientEnd})`,
    }
    return (
        <div className="data-container">
            <div className="card-container">
                <div className="card-avatar-section">
                    <img src={currectSelectedUser.url} className="card-user-avatar-image" />
                    <div className="user-name-container">
                        <h1 className="user-name">{currectSelectedUser.name}</h1>
                        <p className="user-type">{currectSelectedUser.type}</p>
                    </div>
                    <Link to={routers.CHATPAGE}>
                        <div style={style} className="show-chat-icon-container">
                            <BsChatSquareDots className="chat-button" size="24px" color="white" />
                        </div>
                    </Link>
                </div>
                <div className="card-user-info-section">
                    {infoData && infoData.map((item, i) =>
                        <div className="info-section">
                            <p className="user-info-title">{item.title}</p>
                            <p className="user-info-description">{item.info}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="scroll-card-section">
                <MedicalRecord />
                <LabResult />
                <AssignedText />
                <DoctorNotes />
            </div>
        </div>
    )
}
