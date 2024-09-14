import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div>
            <h2>Student Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/student/profile">View Personal Profile</Link></li>
                    <li><Link to="/student/search">Search for Other Students</Link></li>
                    <li><Link to="/student/advisors">Contact Faculty Advisors</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default StudentDashboard;
