import { Link, Outlet } from "react-router-dom";
import { MdDashboard,MdOutlineManageAccounts,MdManageSearch } from 'react-icons/md';

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2" 
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay">
        </label>
        <ul className="menu p-4 w-80 h-full text-base-content bg-blue-950 rounded-md">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
            <p className="ms-4 mt-7 mb-12 text-xl font-bold text-white flex items-center">
                <span className="me-2"><MdDashboard></MdDashboard></span><span>Admin <span className="text-orange-600">Dashboard</span></span></p>
              <li>
              <Link to="dashboard/manageClasses" className="text-white"><MdManageSearch></MdManageSearch>Manage Classes</Link>
              </li>
              <li>
                <Link to="dashboard/manageUsers" className="text-white"><MdOutlineManageAccounts></MdOutlineManageAccounts>Manage Users</Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
            <p className="ms-4 mt-7 mb-12 text-xl font-bold text-white flex items-center"><span>Instructor <span className="text-orange-600">Dashboard </span></span></p>
              <li>
              <Link to="dashboard/addAClass" className="text-white">Add a Class</Link>
              </li>
              <li>
              <Link to="dashboard/myClasses" className="text-white">My Classes</Link>
              </li>
            </>
          ) : (
            <>
            <p className="ms-4 mt-7 mb-12 text-xl font-bold text-white flex items-center"><span>Student <span className="text-orange-600">Dashboard </span></span></p>
              <li>
                <Link to="dashboard/selectedClasses" className="text-white">My Selected Classes</Link>
              </li>
              <li>
                <Link to="dashboard/enrolledClasses" className="text-white">My Enrolled Classes</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
