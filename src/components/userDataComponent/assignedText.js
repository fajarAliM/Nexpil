import React from 'react';
import './style.css';

export const AssignedText = () => {
    return (
        <div className="card-section">
            <h1 className="card-title">Assigned Tasks</h1>
            <div className="assigned-tasks-container">
                <div className="assigned-task-card">
                    <p className="assigned-task-text">Check Blood Sugar</p>
                    <p className="subscribe-text">3 out of 7 Days<br />Complete</p>
                </div>
                <div className="assigned-task-card">
                    <p className="assigned-task-text">Make a Follow-Up Appointment</p>
                </div>
            </div>
            <div className="assigned-tasks-container">
                <div className="assigned-task-card">
                    <p className="assigned-task-text">Schedule a Blood Test</p>
                </div>
                <div className="add-button">
                    <p className="assigned-task-text">Add New Task</p>
                </div>
            </div>
        </div>
    )
}
