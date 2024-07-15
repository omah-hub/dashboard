import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { useAppDispatch } from '../redux/redux.hooks';
import { logout } from '../features/authSlice';
import { toast } from 'react-toastify';


function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("User Logout Successfully");
    navigate("/");
  }
  return (
    <div className="text-white px-4 grid space-y-10 text-center">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `${
            isActive
              ? "text-blue-500 border px-4 shadow-glow-green border-blue-500 rounded py-2"
              : "text-blue-500"
          }`
        }
      >
        Dashboard
      </NavLink>



      <button
        className="text-blue-500 flex justify-center items-center hover:text-gray-400 ease-out duration-500"
        onClick={() => handleLogout()}
      >
        <IoMdLogOut className='mr-2'/>
        Logout
      </button>
    </div>
  );
}

export default Sidebar