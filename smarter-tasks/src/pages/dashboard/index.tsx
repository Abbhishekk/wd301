import React from 'react';
import { json } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const getStorage = localStorage.getItem("userData");
  const data = JSON.parse(getStorage || "")


  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <p className="text-3xl font-bold  text-gray-800 mb-8">Id: {data.id}</p>
      <p className="text-3xl font-bold  text-gray-800 mb-8">Name: {data.name}</p>
      <p className="text-3xl font-bold  text-gray-800 mb-8">Email: {data.email}</p>
    </div>
  );
}

export default Dashboard;