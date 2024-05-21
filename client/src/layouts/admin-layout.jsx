import { NavLink, Outlet,Navigate } from "react-router-dom";
import { FaUser, FaAddressBook, FaHome } from "react-icons/fa";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminLayout = () => {
  const {user}=useAuth();
  if(!user.isAdmin){
    return <Navigate to="/" />
  }
  return (
    <>
      
      <div className="admin-layout">
        <div className="sidebar">
          <ul>
            <li>
              <NavLink to="/admin/users"><FaUser /> Users</NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts"><FaAddressBook /> Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/"><FaHome /> Home</NavLink>
            </li>
          </ul>
        </div>
        
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
