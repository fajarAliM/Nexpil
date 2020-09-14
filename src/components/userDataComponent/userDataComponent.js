import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();

    const currectSelectedUser = useSelector(state => state.usersSelect);
    const currentSelectedUserData = useSelector(state => state.patientSelect);
    const [infoData, setInfoData] = useState();
    const patientDetailData = useSelector(state => state.patientPersonalInfo);

    useEffect(() => {
        console.log("user data component patient info", patientDetailData);
        const userInfo = [
            {
                title: "Date of Birth",
                info: patientDetailData.dob,
            }, {
                title: "Age",
                info: patientDetailData.age,
            }, {
                title: "Phone Number",
                info: patientDetailData.phone_number,
            }, {
                title: "Street Address",
                info: patientDetailData.street_address,
            }, {
                title: "City, State",
                info: `${patientDetailData.city}${patientDetailData.state}`,
            }, {
                title: "Zip Code",
                info: patientDetailData.zipcode,
            },
        ];
        setInfoData(userInfo);
    }, [patientDetailData])
    console.log('user info', infoData)

    // Style for primary color button
    const style = {
        background: `linear-gradient(to right, ${sharedColors.primaryButtonGradientStart}, ${sharedColors.primaryButtonGradientEnd})`,
    }
    return (
        <div className="data-container">
            <div className="card-container">
                <div className="card-avatar-section">
                    <img src={currentSelectedUserData.userimage} className="card-user-avatar-image" />
                    <div className="user-name-container">
                        <h1 className="user-name">{currentSelectedUserData.patient_name}</h1>
                        <p className="user-type">{currentSelectedUserData.type}</p>
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
