import React, { useState } from 'react';
import './style.css';

const paginationList = [
    {
        text: "Allergies",
        selected: true,
    },{
        text: "Immunizations",
        selected: false,
    },{
        text: "Medications",
        selected: false,
    },
];
export const MedicalRecord = () => {
    const [paginationData, setPaginationData] = useState(paginationList);
    const setCurrentSelected = (selectedNumber) => {
        let virtualArray = [];
        for(let i = 0; i < paginationData.length; i++) {
            if(i !== selectedNumber) virtualArray.push({...paginationData[i], selected: false});
            if(i === selectedNumber) virtualArray.push({...paginationData[i], selected: true})
        }
        setPaginationData(virtualArray)
    }
    return (
        <div className="card-section">
            <div className="pagination-section">
                <h1 className="pagination-title">Medical Record</h1>
                <ul className="pagination-list">
                    {paginationData.map((item, i) => 
                        <li onClick={()=>setCurrentSelected(i)} key={i} className={item.selected === true ? "pagination-item-selected" : "pagination-item"}>
                            <p>{item.text}</p>
                            {item.selected === true && <div className="bottom-border"></div>}
                        </li>
                    )}
                </ul>
            </div>
            <div className="medical-no-report">
                <p className="medical-no-report-text">No Reported Allergies</p>
            </div>
        </div>
    )
}
