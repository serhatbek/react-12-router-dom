import React from 'react';

const Dashboard = ({ user }) => {
  const { name, email } = user;
  return (
    <div>
      <h2>Hello {name}, welcome</h2>
    </div>
  );
};

export default Dashboard;
