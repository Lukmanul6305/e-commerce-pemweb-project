const Dashboard = () => {
  function handleLogout(){
    alert("anda logoout")
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Selamat datang, your name</p>
      <button onClick={handleLogout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
