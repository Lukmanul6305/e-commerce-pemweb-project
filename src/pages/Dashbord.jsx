import React from "react";
import { auth } from "../firebase";

const Dashboard = () => {
  const user = auth.currentUser;

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Selamat datang, {user?.displayName}</p>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
