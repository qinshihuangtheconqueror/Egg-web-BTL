// src/pages/admin.jsx
import React from 'react';
import Layout from '../app/layout';
import Table from '../components/Table';

const AdminDashboard = () => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'role', headerName: 'Role' },
  ];

  const data = [
    { id: 1, name: 'John Doe', role: 'Member' },
    { id: 2, name: 'Jane Smith', role: 'Coach' },
    { id: 3, name: 'Alice Johnson', role: 'Member' },
  ];

  return (
    <Layout>
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <Table columns={columns} data={data} />
      </div>
    </Layout>
  );
};

export default AdminDashboard;
