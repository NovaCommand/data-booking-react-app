import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Sub-navigation */}
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;