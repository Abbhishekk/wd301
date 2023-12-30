import React from 'react';

const Dashboard: React.FC = () => {
  const getStorage = localStorage.getItem("userData");
  const data = JSON.parse(getStorage || "{}" )


  return (
    <div className="min-h-screen flex flex-col  items-start  ">
      <h1 className="text-3xl font-bold text-center  mb-8">Dashboard</h1>
      <p className="text-3xl font-bold   mb-8">Id: {data.id}</p>
      <p className="text-3xl font-bold   mb-8">Name: {data.name}</p>
      <p className="text-3xl font-bold   mb-8">Email: {data.email}</p>
    </div>
  );
}

export default Dashboard;