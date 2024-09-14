import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/admin/manage-records">Manage Student and Faculty Records</Link></li>
                    <li><Link to="/admin/graphs">Dashboard with Graphs</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
