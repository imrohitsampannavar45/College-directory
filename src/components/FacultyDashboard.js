import React from 'react';
import { Link } from 'react-router-dom';

const FacultyDashboard = () => {
    return (
        <div>
            <h2>Faculty Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/faculty/class-list">Manage Class List</Link></li>
                    <li><Link to="/faculty/profile">Update Profile</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default FacultyDashboard;
