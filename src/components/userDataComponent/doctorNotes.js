import React from 'react';
import './style.css';

export const DoctorNotes = () => {
    return (
        <div className="card-section">
            <h1 className="card-title">Doctor’s Notes</h1>
            <div className="note-row">
                <div className="doctor-note-card">
                    <p className="assigned-task-text">Dr. Julia Smith</p>
                    <p className="subscribe-text">7-8-2020</p>
                </div>
                <div className="discard-button">
                    <p className="doctor-notes-button-text">Discard</p>
                </div>
                <div className="primary-button">
                    <p className="doctor-notes-button-text">Save</p>
                </div>
                <div className="primary-button">
                    <p className="doctor-notes-button-text">Sign</p>
                </div>
            </div>
            <div className="note-row">
                <div className="doctor-note-card">
                    <p className="assigned-task-text">Dr. Julia Smith</p>
                    <p className="subscribe-text">7-8-2020</p>
                </div>
                <div className="discard-button">
                    <p className="doctor-notes-button-text">Discard</p>
                </div>
                <div className="primary-button">
                    <p className="doctor-notes-button-text">Save</p>
                </div>
                <div className="primary-button">
                    <p className="doctor-notes-button-text">Sign</p>
                </div>
            </div>
        </div>
    )
}
