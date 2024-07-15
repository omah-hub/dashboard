// UserStateManager.tsx
import { useAppDispatch } from "../redux/redux.hooks";
import { useEffect, ReactNode } from "react";
import { setUser } from "../features/authSlice";

interface UserStateManagerProps {
  children: ReactNode;
}

const UserStateManager: React.FC<UserStateManagerProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      dispatch(setUser(user));
    }
  }, [dispatch, user]);

  return <>{children}</>;
};

export default UserStateManager;
